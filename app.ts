import "reflect-metadata";
import {createConnection, Connection,ConnectionOptions} from "typeorm";


const options: ConnectionOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "agilit",
    logging: ["query", "error"],
    synchronize: true,
    entities: [__dirname + "\\entity\\models\\*.ts"]
};

createConnection(options).then(connection => {
  console.log(`CONECTOU SEUS SHOW`)
  console.log(__dirname)
}).catch(error => console.log(error));

