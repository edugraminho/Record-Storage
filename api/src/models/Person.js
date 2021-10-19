const mongoose = require("mongoose");

const Person = mongoose.model("Person", {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  phone: {
    type: Number,
  },
});

module.exports = Person;
