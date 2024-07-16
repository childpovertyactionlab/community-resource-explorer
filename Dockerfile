FROM ubuntu:xenial-20210804
WORKDIR /app

#TO DO: exclude root dependency
USER root

# replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# update the repository sources list
# and install dependencies
RUN apt-get update \
    && apt-get install -y --no-install-recommends apt-utils \
    && apt-get install -y curl \
    && apt-get -y autoclean

# nvm environment variables
ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 14.1.0 

# install nvm
# https://github.com/creationix/nvm#install-script
RUN curl --silent -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.2/install.sh | bash

# install node and npm
RUN source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

# add node and npm to path so the commands are available
ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

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

# install package dependencies
RUN npm install

# exposed port for develop command
EXPOSE 8000

#command to be run during contianer runtime
CMD ["npm", "run", "develop"]
