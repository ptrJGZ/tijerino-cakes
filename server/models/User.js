const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6 },
    isAdmin: { type: Boolean, required: true },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
