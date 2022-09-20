const AuthError = require("../entities/error/authError");

async function authenticate(req, res, next) {
  const headers = req.headers;

  if (!(headers["api-key"] && headers["api-key"] == "123456789")) {
    throw new AuthError("Invalid API key!");
  }

  next();
}

module.exports = authenticate;
