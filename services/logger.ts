import winston from "winston";

winston.addColors({
  info: "green",
  warn: "cyan",
  error: "red",
  verbose: "blue",
  i: "gray",
  db: "magenta",
});

const logger = new winston.Logger({
  transports: [
    new winston.transports.Console({ colorize: false, timestamp: true }),
  ],
});

export default logger;
