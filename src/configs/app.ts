import express from "express";
import routes from "../routes";

const app = express();

// Utilizar body em json como padrão
app.use(express.json());

app.use(routes);

export default app;
