const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schemas");
const express = require("express");
const db = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  server.applyMiddleware({ app });

  console.log(
    ` 🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  );
}

startApolloServer();

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
});
