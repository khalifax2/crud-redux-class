const mongoose = require("mongoose");
let User = require("../models/userModel");

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    if (!users) {
      throw new Error("Error to fetch users");
    }

    res.status(200).json({
      results: users.length,
      data: {
        users
      }
    });
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong"
    });
  }
};

exports.createUser = async (req, res, next) => {
  try {
    // const user = await User.create(req.body);
    const name = req.body.name;
    const address = req.body.address;
    const email = req.body.email;
    const contact = req.body.contact;

    const newUser = new User({
      name,
      address,
      email,
      contact
    });

    const save = await newUser.save();
    if (!save) {
      throw new Error("Not saved");
    }

    res.status(201).json({
      data: {
        data: newUser
      }
    });
  } catch (err) {
    res.status(400).json({
      message: "Please fill up all fields with valid data"
    });
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const userId = await User.findById(req.params.id);

    if (!userId) {
      throw new Error("No user with this id");
    }
    res.status(200).json({
      data: userId
    });
  } catch (err) {
    res.status(404).json({
      message: "User not found."
    });
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const userId = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    console.log(userId);
    if (!userId) {
      throw new Error("User not found.");
    }

    res.status(201).json({
      data: {
        data: userId
      }
    });
  } catch (err) {
    res.status(400).json({
      message: "Please fill up all fields with valid data"
    });
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const userId = await User.findByIdAndDelete(req.params.id, req.body);

    if (!userId) {
      throw new Error("No user with this id");
    }

    res.status(201).json({
      message: "Deleted successfully"
    });
  } catch (err) {
    res.status(404).json({
      message: "User not found."
    });
  }
};
