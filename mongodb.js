const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/local")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch(() => {
    console.log("Failed to connect to MongoDB");
  });

const LoginSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const collection = mongoose.model("collection1", LoginSchema);

module.exports = collection;


