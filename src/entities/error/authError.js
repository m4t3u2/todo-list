module.exports = class AuthError extends Error {
  constructor(message) {
    super(message);
    this.code = 401;
  }
};
