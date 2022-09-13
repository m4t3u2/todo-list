const AuthError = require("../entities/error/authError");

function authenticate(req, res, next) {
  const headers = req.headers;

  if (!(headers["api-key"] && headers["api-key"] == "123456789")) {
    throw new AuthError("Chave de API inválida!");
  }

  next();
}

module.exports = authenticate;
