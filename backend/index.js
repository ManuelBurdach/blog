// Import modules
import express from "express";
import cors from "cors";
import multer from "multer";
import { load, save } from "./util/localStorage.js";

//Const
const PORT = 7777;

//Server
const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//Methods & Routes
app.get("/api/v1/posts", (req, res) => {
  load()
    .then((posts) => res.json(posts))
    .catch((err) => res.json("Errror"));
});

app.post("/api/v1/posts", (req, res) => {
  const post = req.body;
  save(post)
    .then((posts) => res.json(posts))
    .catch((err) => res.json("Errror"));
});

//Listen Server
app.listen(PORT, () => console.log("The server listen on port:", PORT));
