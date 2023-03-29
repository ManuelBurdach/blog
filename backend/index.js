// Import modules
import express from "express";
import cors from "cors";
import multer from "multer";

//Const
const PORT = 7777;

//Server
const app = express();

//Middleware

//Listen Server
app.listen(PORT, () => {
  console.log("The server listen on port:", PORT);
});
