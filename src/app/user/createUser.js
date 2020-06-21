const User = require("../../domain/user/user");

class CreateUser {
  constructor({ userRepository }) {
    this._userRepository = userRepository;
  }
  async execute(userData) {
    try {
      const user = new User(userData);
      return await this._userRepository.persist(user);
    } catch (e) {
      throw new Error(e);
    }
  }
}

module.exports = CreateUser;
