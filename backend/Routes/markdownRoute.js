import express from "express";
import { getHtmlController } from "../controllers/markdownController.js";

const app = express();

app.post("/gethtml", getHtmlController);

export default app;
