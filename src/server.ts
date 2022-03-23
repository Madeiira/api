import express from "express"; // node não comprede import
import "reflect-metadata";
const app = express();

import "./database";
import { router } from "./router";

app.use(express.json());
app.use(router) // use = middlewere

// criar servidor
app.listen(3333, () => console.log("Servidor em operação!"));
