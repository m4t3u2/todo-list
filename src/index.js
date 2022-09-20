const port = 8686;
const app = require("./app");
const db = require("./mongoosedb");

db.init();

app.listen(port, () => {
  console.log("Server started! Port: " + port);
});
