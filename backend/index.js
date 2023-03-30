// Import modules
import express from "express";
import cors from "cors";
import multer from "multer";
import { deletePost, load, save } from "./util/localStorage.js";
import morgan from "morgan";

//Const
const PORT = 7777;
const upload = multer({
  dest: "./images",
});

//Server
const app = express();

//Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//Bilder anzeigen
app.use("/images", express.static("./images"));

//Methods & Routes
app.get("/api/v1/posts/:id", (req, res) => {
  let paramId = req.params.id;
  load()
    .then((posts) => {
      if (paramId === "all") res.json(posts);
      else {
        res.json(posts.find(({ id }) => id === paramId));
      }
    })
    .catch((err) => res.json("Errror"));
});

app.post("/api/v1/posts", upload.single("link"), (req, res) => {
  const post = req.body;
  post.link = req.file.path;
  save(post)
    .then((posts) => res.json(posts))
    .catch((err) => res.json("Errror"));
});

app.delete("/api/v1/deletePost/:id", (req, res) => {
  let paramId = req.params.id;
  deletePost(paramId)
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => res.json("Errror"));
});

//Listen Server
app.listen(PORT, () => console.log("The server listen on port:", PORT));
