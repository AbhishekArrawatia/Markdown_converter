//importing files and packages
import express from "express";
import cors from "cors";
import markdownRoute from "./Routes/markdownRoute.js";
//setting up an express router
const app = express();
app.use(express.json());
app.use(cors());

//setting up route for getting html from Markdown
app.use("/api/markdown", markdownRoute);

app.listen(3000, () => {
  console.log("listening to port 3000");
});
