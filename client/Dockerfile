FROM node:latest

# Yarn please
RUN curl -o- -L https://yarnpkg.com/install.sh | bash

ENV PATH="/root/.yarn/bin:${PATH}"

# Installs these globally WITHIN the container, not our local machine
RUN yarn global add nodemon

# Prepare app directory
RUN mkdir -p /usr/src/app
ADD . /usr/src/app

# Any commands start from this directory IN the container
WORKDIR /usr/src/app

RUN yarn

# Build the app
RUN yarn build

# Expose the app port
EXPOSE 3000

# Start the app
CMD yarn start