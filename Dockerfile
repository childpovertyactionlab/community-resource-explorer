FROM node:18-bullseye AS build

# Set working directory
WORKDIR /app

# Install system dependencies for native module compilation
RUN apt-get update && apt-get install -y --no-install-recommends \
    python3 \
    make \
    g++ \
    && rm -rf /var/lib/apt/lists/*

# Copy package
COPY package*.json ./

# With --legacy-peer-deps for React 18 compatibility
RUN npm ci --legacy-peer-deps \
    && npm rebuild @parcel/watcher --update-binary \
    && npm install @parcel/watcher@2.4.1 --no-save --force

# Copy the rest of the application
COPY . .

EXPOSE 8000
