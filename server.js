const express = require("./config/express");
const connected = require("./infra/connect");
const app = express();

connected.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("conectado");
    const port = 3000;
    app.listen(port, () => {
      console.log("server decolando na porta 3000");
    });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log("server decolando na porta 3000");
});
