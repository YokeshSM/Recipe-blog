import express from "express";
import "dotenv/config";

const app = express();
const port = process.env.port || 4000;
app.use(express.json());
app.get("/", (req, res) => res.send("API working"));
app.listen(port, () => console.log(`server started on ${port}`));
