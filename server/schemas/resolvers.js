const { User } = require("../models");

const resolvers = {
  Query: {
    user: async (_root, inputs) => {
      return await User.findById(id);
    },
    users: async () => {
      return await User.find({});
    },
  },
  Mutation: {
    createUser: async (_root, {firstName, lastName, password}) => {
      return await User.create({
        firstName,
        lastName,
        password
      })
    }
  },
};

module.exports = resolvers;
