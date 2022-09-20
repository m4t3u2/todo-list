const mongoose = require("mongoose");

const user = "root";
const pass = "password";
const database = "todo";
const serverName = "localhost:27017";

module.exports = {
  init: () => {
    mongoose.connect(`mongodb://${serverName}/${database}`, {
        authSource: "admin",
        user: user,
        pass: pass,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((res) => console.log(`Connection Succesful! ${res}`))
      .catch((err) => console.log(`Error in DB connection! ${err}`));
  },
};
