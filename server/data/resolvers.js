import { pubsub } from "./subscriptionManager";
import { login, getChannels, addChannel, removeChannel } from "./database";

export default {
  Query: {
    channels(root, args, context, info) {
      return getChannels();
    }
  },
  Mutation: {
    login(root, { email, password }, context, info) {
      return login(email, password);
    },
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
