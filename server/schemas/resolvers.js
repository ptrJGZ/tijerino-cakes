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
    updateProduct: async (
      _,
      { productId, productName, price, description }
    ) => {
      const product = await Product.findByIdAndUpdate(
        { _id: productId },
        {
          productName: productName,
          price: price,
          description: description,
        },
        { new: true }
      );

      return product;
    },
    deleteProduct: async (_, { productId }) => {
      const product = await Product.findByIdAndDelete({
        _id: productId,
      });

      return product;
    },
    addUser: async (_, args) => {
      const user = await User.create(args);

      return user;
    },
  },
};

module.exports = resolvers;
