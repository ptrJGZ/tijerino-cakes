const { User, Product } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return User.find({});
    },
    products: async () => {
      return Product.find({});
    },
  },
  // @todo: test addProduct mutation in GraphQL playground
  Mutation: {
    addProduct: async (_, args) => {
      const product = await Product.create(args);

      return product;
    },
  },
};

module.exports = resolvers;
