const db = require("../config/connection");
const { User, Product } = require("../models");

const { faker } = require("@faker-js/faker");

db.once("open", async () => {
  await User.deleteMany({});
  await Product.deleteMany({});

  const userData = [];

  for (let i = 0; i < 10; i++) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();
    const isAdmin = faker.datatype.boolean();

    userData.push({ username, email, password, isAdmin });
  }

  await User.insertMany(userData);

  const productData = [];

  const productList = [
    "Tiramisu",
    "Red Velvet Cake",
    "Macaroons",
    "Dominican Cake",
    "Tres Leches Cake",
  ];

  for (let i = 0; i < productList.length; i++) {
    const price = faker.commerce.price(50, 100);
    const description = faker.lorem.sentences(2);

    productData.push({ productName: productList[i], price, description });
  }

  await Product.insertMany(productData);

  console.log("Finished! Successfully inserted documents!");
  process.exit(0);
});
