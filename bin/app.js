"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const options = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "agilit",
    logging: ["query", "error"],
    synchronize: true,
    entities: [__dirname + "\\entity\\models\\*.js"]
};
typeorm_1.createConnection(options).then(connection => {
    console.log(`CONECTOU SEUS SHOW`);
    console.log(__dirname);
}).catch(error => console.log(error));
