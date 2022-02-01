import "dotenv/config";
import "express-async-errors";

import express, { Request, Response, NextFunction } from "express";
import path from "path";
import cors from "cors";
import { createServer } from "http";
import { engine } from "express-handlebars";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import { routes } from "./routes";

const app = express();
app.use(cors());

app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "views"));

app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "views/layouts"),
    partialsDir: path.join(__dirname, "views/partials"),
  })
);
app.set("view engine", "hbs");

const http = createServer(app);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        error: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
);

export { http };
