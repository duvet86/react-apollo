import { pubsub } from "./subscriptionManager";

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

function getChannels() {
  return Object.keys(channelsById).map(id => channelsById[id]);
}

function addChannel(name) {
  const channel = new Channel(nextId++, name);
  channelsById[channel.id] = channel;

  return channel;
}

function removeChannel(id) {
  delete channelsById[id];
}

export default {
  Query: {
    channels(root, args, context, info) {
      return getChannels();
    }
  },
  Mutation: {
    addChannel(root, { name }, context, info) {
      var channel = addChannel(name);
      pubsub.publish("channelAdded", channel);

      return channel;
    },
    removeChannel(root, { id }, context, info) {
      removeChannel(id);

      return "Success";
    }
  },
  Subscription: {
    channelAdded(newChannel, args, context, info) {
      return newChannel;
    }
  }
};
