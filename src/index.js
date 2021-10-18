const express = require("express");
const mongoose = require("mongoose");
const app = express();

require('dotenv').config()

app.use(express.json());

const personRoutes = require("./routes/routes")

app.use("/register", personRoutes);

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@personrecord.vaooa.mongodb.net/dbPersonRecord?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Connected to Mongo");
    app.listen(3333);
  })
  .catch((err) => {
    console.log(err);
  });

