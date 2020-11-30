const { alista } = require("../models/alistamento");
const Alistamento = require("../models/alistamento");

module.exports = (app) => {
  app.get("/alistamento", (req, res) => {
    Alistamento.lista(res);
  });

  app.get("/alistamento/:id", (req, res) => {
    const id = parseInt(req.params.id);

    Alistamento.busca(id, res);
  });

  app.post("/alistamento", (req, res) => {
    const alistamento = req.body;

    console.log(req.body);

    Alistamento.alista(alistamento);
    res.send("i need your POST power");
  });

  app.patch("/alistamento/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const values = req.body;

    Alistamento.alter(id, values, res);
  });

  app.delete("/alistamento/:id", (req, res) => {
    const id = parseInt(req.params.id);

    Alistamento.delete(id, res);
  });
};
