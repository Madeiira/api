import express from "express"; // node não comprede import
import "reflect-metadata";
const app = express();

import "./database";


// criar servidor
app.listen(3333, () => console.log("Servidor em operação!"));
