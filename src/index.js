const port = 8686;
const app = require("./app");

app.listen(port, () => {
  console.log("Servidor iniciou na porta: " + port);
});
