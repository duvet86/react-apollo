import jwt from "jsonwebtoken";

class Channel {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

const channelsById = {
  0: new Channel(0, "Luca"),
  1: new Channel(1, "Pippo")
};

let nextId = 2;

export function getChannels() {
  return Object.keys(channelsById).map(id => channelsById[id]);
}

export function addChannel(name) {
  const channel = new Channel(nextId++, name);
  channelsById[channel.id] = channel;

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

    return {
      jwtToken,
      email,
      password
    };
  }
}
