const moment = require("moment");
const connected = require("../infra/connect");

class Alistamento {
  alista(alistamento) {
    const dateCreate = moment().format("YYYY-MM-DD HH:MM:SS");
    const date = moment(alistamento.data, "DD/MM/YYYY").format(
      "YYYY-MM-DD HH:MM:SS"
    );

    const dateValid = moment(date).isAfter(dateCreate);
    const nameValid = alistamento.name.length >= 5;

    const valids = [
      {
        name: "data",
        valid: dateValid,
        message: "Data deve ser maior que o dia do alistamento",
      },
      {
        name: "name",
        valid: nameValid,
        message: "Nome deve conter mais que 5 caracteres",
      },
    ];

    const errors = valids.filter((campo) => !campo.valid);
    const existErrors = errors.length;

    if (existErrors) {
      res.status(400).json(errors);
    }

    const alistDate = { ...alistamento, dateCreate, date };
    const sql = "INSERT INTO alistamento SET ?";

    connected.query(sql, alistDate, (error, result) => {
      if (error) {
        res.status(400).json(error);
      } else {
        res.status(201).json(alistamento);
      }
    });
  }

  lista(res) {
    const sql = "SELECT * FROM alistamento";

    connected.query(sql, (error, result) => {
      if (error) {
        res.status(400).json(error);
      } else {
        res.status(201).json(result);
      }
    });
  }

  busca(id, res) {
    const sql = `SELECT * from alistamento WHERE id=${id}`;

    connected.query(sql, (error, result) => {
      const alistamento = resultados[0];
      if (error) {
        res.status(400).json(error);
      } else {
        res.status(201).json(alistamento);
      }
    });
  }

  alter(id, values, res) {
    if (values.date) {
      values.data = moment(alistamento.data, "DD/MM/YYYY").format(
        "YYYY-MM-DD HH:MM:SS"
      );
    }

    const sql = "UPDATE alistamento SET ? WHERE id=?";

    connected.query(sql, [values, id], (error, result) => {
      if (error) {
        res.status(400).json(error);
      } else {
        res.status(201).json({ ...values, id, name });
      }
    });
  }

  delete(id, res) {
    const sql = "DELETE FROM alistamento WHERE id=?";

    connected.query(sql, id, (error, results) => {
      if (error) {
        res.status(400).json(error);
      } else {
        res.status(201).json({ id, name });
      }
    });
  }
}

module.exports = new Alistamento();
