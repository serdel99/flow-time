const { attributes } = require("structure");

const User = attributes({
  name: String,
  last_name: String,
  email: String,
  password: String,
  reset_token: String,
  isDeleted: Boolean,
  createdAt: Date,
  updatedAt: Date,
})(class User {});

module.exports = User;
