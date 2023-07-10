const express = require("express");
const mongoose = require("mongoose");
const dbConfig = require("./configs/db.config");
const serverConfig = require("./configs/server.config");
const userModel = require("./models/UserModel");

const app = express();
mongoose.connect(dbConfig.DB_URL);

const db = mongoose.connection;

db.on("error", () => {
  console.log("error while connecting database");
});

db.once("open", () => {
  console.log("db is connected succesfullly");

  init();
});

async function init() {
  let admin = await userModel.findOne({
    userId: "Admin",
  });

  if (admin) {
    console.log("admin user find can'nt add same user ");
    return;
  }

  admin = await userModel.create({
    name: "krishna  gupta",
    userId: "Admin",
    email: "k@gmail.com",
    password: "password123",
    userType: "Admin",
  });

  console.log("the admin data is ", admin);
}

app.listen(serverConfig.PORT, () => {
  console.log(`Server is running on port ${serverConfig.PORT}`);
});
