# Use Node.js 14 explicitly for Gatsby v2 compatibility
FROM node:14-bullseye AS build

# Set working directory
WORKDIR /app

# Default environment variables can be overridden at runtime

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    python \
    make \
    g++ \
    && rm -rf /var/lib/apt/lists/*

# Copy package files
COPY package*.json ./

# Install dependencies. Legacy peer deps flag isn't ideal, but for compatibility with these old dependencies
RUN npm ci --legacy-peer-deps

# Copy the rest of the application
COPY . .

EXPOSE 8000

CMD ["npm", "run", "develop"]
