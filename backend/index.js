// Import modules
import express from "express";
import cors from "cors";
import multer from "multer";

//Const
const PORT = 7777;

//Server
const app = express();

//Middleware

//Methods & Routes
app.get("/api/v1/posts", (req, res) => {
  res.end("OK");
});

//Listen Server
app.listen(PORT, () => {
  console.log("The server listen on port:", PORT);
});
