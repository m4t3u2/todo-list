function error(err, req, res, next) {
  let code = 500;

  if (err.code) {
    code = err.code;
  }

  res.status(code).send({ message: err.message, code: code });
}

module.exports = error;
