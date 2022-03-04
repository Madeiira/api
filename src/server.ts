import express from 'express' // node não comprede import 

const app = express();


// criar servidor
app.listen(3333, () => console.log("Servidor em operação!"))