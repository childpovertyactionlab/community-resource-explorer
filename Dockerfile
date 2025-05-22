# Base image: Ubuntu 20.04 (Focal Fossa) for better long-term support
FROM ubuntu:focal
# Set working directory for all subsequent operations
WORKDIR /app

#TO DO: exclude root dependency
USER root

# Prevent interactive prompts during package installation
ENV DEBIAN_FRONTEND=noninteractive

# replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# Install system dependencies required for Node.js and native modules
# - build-essential: Provides compiler and build tools
# - libvips-dev, libglib2.0-dev: Required for the 'sharp' image processing library
# - python2.7: Required for node-gyp to build native modules
# - xz-utils: For unpacking Node.js binaries
# - libtool, automake, autoconf: For building native dependencies
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        build-essential \
        pkg-config \
        curl \
        libvips-dev \
        libglib2.0-dev \
        python2.7 \
        xz-utils \
        ca-certificates \
        libtool \
        automake \
        autoconf \
    && apt-get -y autoclean \
    && rm -rf /var/lib/apt/lists/*

# Set Python path for node-gyp (required for building native modules)
ENV PYTHON=python2.7
# Specify Node.js version for consistency across builds
ENV NODE_VERSION=14.1.0

# Multi-architecture support for Node.js installation
# This enables the same Dockerfile to work on both ARM64 (Apple Silicon) and AMD64 (Intel/standard cloud)
# TARGETARCH is automatically set by Docker BuildKit when building with --platform flag
ARG TARGETARCH
RUN case ${TARGETARCH} in \
        # For standard x86-64 architecture (Intel/AMD, most cloud providers)
        amd64) NODE_ARCH=x64 ;; \
        # For ARM64 architecture (Apple Silicon M1/M2, some cloud providers)
        arm64) NODE_ARCH=arm64 ;; \
        # Fail if architecture is not supported
        *) echo "Unsupported architecture: ${TARGETARCH}"; exit 1 ;; \
    esac \
    # Download and install the appropriate Node.js binary for the target architecture
    && curl -SL "https://nodejs.org/dist/v${NODE_VERSION}/node-v${NODE_VERSION}-linux-${NODE_ARCH}.tar.xz" -o nodejs.tar.xz \
    && tar -xJf nodejs.tar.xz -C /usr/local --strip-components=1 \
    && rm nodejs.tar.xz \
    # Create symlinks to ensure Node.js is in the PATH
    && ln -s /usr/local/bin/node /usr/bin/node \
    && ln -s /usr/local/bin/npm /usr/bin/npm

# Ensure Node.js binaries are in the PATH
ENV PATH=/usr/local/bin:$PATH

# confirm installation
RUN node -v
RUN npm -v

# adding to skip gatsby webpack errors. No ideal, but we will need to eventually update packages to bypass this
RUN touch .eslintrc

# env variables to be added via CI/CD pipeline. If local, use a .env file
ENV GATSBY_GA_TRACKING_ID $GATSBY_GA_TRACKING_ID
ENV GATSBY_MAPBOX_API_TOKEN $GATSBY_MAPBOX_API_TOKEN
ENV GATSBY_MAPBOX_USER $GATSBY_MAPBOX_USER

# copy all files into container, .dockerignore file specifies all that need to be skipped
COPY . .

# Install Node.js dependencies
# SHARP_IGNORE_GLOBAL_LIBVIPS=1 ensures the sharp module uses its bundled libvips
# This prevents compatibility issues between the system libvips and the one expected by sharp
RUN SHARP_IGNORE_GLOBAL_LIBVIPS=1 npm install


# exposed port for develop command
EXPOSE 8000

#command to be run during contianer runtime
CMD ["npm", "run", "develop"]
