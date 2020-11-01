import bodyParser from "body-parser";
import express from "express";
import winston from "express-winston";
import logger from "./services/logger";
import searchRouter from "./routes/search";

const app = express();

process.on("uncaughtException", (error) => {
  console.dir(error);
  console.log("uncaughtException");
  if (error.stack) console.log(error.stack);
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  //Allows user to set content type on client side
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(bodyParser.json());

app.use(
  winston.logger({
    winstonInstance: logger,
    meta: false,
    msg: "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}",
    expressFormat: true,
    colorize: true,
    ignoreRoute: () => {
      return false;
    },
  })
);

app.use("/", searchRouter);

var port = process.env.PORT || "8080";
app.listen(port);
logger.info("Server listening on port: " + port);
