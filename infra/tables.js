class tabelas {
  init(conexao) {
    this.conexao = conexao;
  }

  criarAlist() {
    const sql = `CREATE TABLE IF NOT EXISTS alistamento (id int NOT NULL AUTO_INCREMENT, 
                name varchar(50) NOT NULL, nameTrooper varchar(50) NOT NULL, 
                planet varchar(30), service varchar(20) NOT NULL, 
                status varchar (20) NOT NULL, date datetime NOT NULL, dateAlist datetime NOT NULL, descript text, PRIMARY KEY(id))`;

    this.conexao.query(sql, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("table alist");
      }
    });
  }

  Trooper() {
    const sql = `CREATE TABLE IF NOT EXISTS trooper (id int NOT NULL AUTO_INCREMEMT, name varchar(50) NOT NULL, nameTrooper varchar(50) NOT NULL, img varchar(200), PRIMARY KEY (id))`;

    this.conexao.query(sql, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("table Trooper");
      }
    });
  }
}
