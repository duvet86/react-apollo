FROM node:latest

# Yarn please
RUN curl -o- -L https://yarnpkg.com/install.sh | bash

ENV PATH="/root/.yarn/bin:${PATH}"

# Installs these globally WITHIN the container, not our local machine
RUN yarn global add nodemon

# Prepare app directory
RUN mkdir -p /usr/src/app
ADD ../../ /usr/src/app

# Any commands start from this directory IN the container
WORKDIR /usr/src/app



FROM node:0.12
MAINTAINER tribou

# Prepare app directory
RUN mkdir -p /usr/src/app
ADD . /usr/src/app

# Install dependencies
WORKDIR /usr/src/app
RUN npm install

# Build the app
RUN npm build

# Expose the app port
EXPOSE 8000

# Start the app
CMD npm start