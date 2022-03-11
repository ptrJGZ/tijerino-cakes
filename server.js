const express = require("express");
const cors = require("cors");
const sequelize = require("./app/config/connection");
var corsOptions = {
  origin: "http://localhost:8081",
};
const routes = require("./app/routes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Tijerino Cakes & Pastries" });
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
