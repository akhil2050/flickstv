var express = require("express");
require("dotenv").config();
const app = express();

app.listen(3100, () => {
  console.log("Backend server is running fine");
});

const mongoose = require("mongoose");
const authRte = require("./routes/authorization");
const userRte = require("./routes/users");
const movieRte = require("./routes/movies");
const listRte = require("./routes/lists");

mongoose.connect(process.env.dbURI);

mongoose.connection.on("connected", () => {
  console.log("Mongoose connected to :", process.env.dbURI);
});

mongoose.connection.on("error", (err) => {
  console.log("Mongoose connection error :", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected");
});

app.use(express.json());
app.use("/api/auth", authRte);
app.use("/api/users", userRte);
app.use("/api/movies", movieRte);
app.use("/api/lists", listRte);
