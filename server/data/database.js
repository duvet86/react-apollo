import jwt from "jsonwebtoken";
import { pubsub } from "./subscriptionManager";

let loggedUser = null;

class Channel {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

class User {
  constructor(id, email, password, jwtToken) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.jwtToken = jwtToken;
  }
}

const channelsById = {
  0: new Channel(0, "Luca"),
  1: new Channel(1, "Pippo")
};

let nextChannelId = 2;

export function getChannels() {
  return Object.keys(channelsById).map(id => channelsById[id]);
}

export function addChannel(name) {
  const channel = new Channel(nextChannelId++, name);
  channelsById[channel.id] = channel;

  pubsub.publish("channelAdded", channel);

  return channel;
}

export function removeChannel(id) {
  delete channelsById[id];
}

export function login(email, password) {
  if (email === "luca@gmail.com" && password === "luca") {
    const jwtToken = jwt.sign(
      {
        email,
        password
      },
      "secret"
    );

    loggedUser = new User(1, email, password, jwtToken);

    return loggedUser;
  }
}

export function getJwtToken() {
  return loggedUser.jwtToken;
}

export function logout(jwtToken) {
  if (loggedUser.jwtToken === jwtToken) {
    return {
      status: "OK",
      message: `Successfully logged out user with id: ${loggedUser.id}`
    };
  }
  return {
    status: "FAIL",
    message: `Couldn't logout user with id: ${loggedUser.id}`
  };
}
