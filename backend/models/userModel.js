const mongoose = require("mongoose");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide your name"]
    },
    address: {
      type: String,
      required: [true, "Please provide your address"]
    },
    email: {
      type: String,
      required: [true, "Please provide your email"],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, "Please provide a valid email"]
    },
    contact: {
      type: String,
      required: true
    }
  }
  // {
  //   timestamps: true
  // }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
