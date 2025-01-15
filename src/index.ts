import FileUpload from "express-fileupload";
import { connect } from "mongoose";
import Express from "express";
import dotenv from "dotenv";
import chalk from "chalk";
import path from "path";
import CookieParser from "cookie-parser";
import Router from "./routes/index.js";
try {
  dotenv.config();
  connect(process.env.DB_URI as string);
  Express()
    .use(Express.static(path.join(import.meta.dirname, "./../public")))
    .use(Express.json())
    .use(Express.urlencoded({ extended: true }))
    .use(FileUpload({
      limits: {
        fileSize: 40 * 1024
      },
      abortOnLimit: true
    }))
    .use(CookieParser())
    .use(Router)
    .set("view engine", "ejs")
    .set("views", path.join(import.meta.dirname, "./../views"))
    .listen(process.env.PORT, (port) => {
      console.log(chalk.blue.bold(`running http://localhost:${process.env.PORT}`));
    });
} catch (error) {
  console.log((error as Error).message);
}
