import {
  login,
  logout,
  getChannels,
  addChannel,
  removeChannel
} from "./database";

const checkAuthenticatedUser = ({ user }, cb) => {
  if (user) {
    return cb();
  }
};

export default {
  Query: {
    channels(root, args, context, info) {
      return checkAuthenticatedUser(context, () => getChannels());
    }
  },
  Mutation: {
    login(root, { email, password }, context, info) {
      return login(email, password);
    },
    logout(root, { jwtToken }, context, info) {
      return checkAuthenticatedUser(context, () => logout(jwtToken));
    },
    addChannel(root, { name }, context, info) {
      return checkAuthenticatedUser(context, () => addChannel(name));
    },
    removeChannel(root, { id }, context, info) {
      return checkAuthenticatedUser(context, () => removeChannel(id));
    }
  },
  Subscription: {
    channelAdded(newChannel, args, context, info) {
      // TODO: add auth
      return newChannel;
    }
  }
};
