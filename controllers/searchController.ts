import { RequestHandler, Response } from "express";
import logger from "../services/logger";
import OAuth from "oauth";
import * as config from "../config";

interface IError extends Error {
  errors?: string[];
  code: number;
}

const error = (message?: string, description?: string, code?: number) => {
  const err = new Error(message) as IError;
  err.code = code || 500;
  err.errors = [description || ""];
  return err;
};

export const getSearch: RequestHandler = async (req, res) => {
  const name = req.params.name;

  const oauth = new OAuth.OAuth(
    "https://api.twitter.com/oauth/request_token",
    "https://api.twitter.com/oauth/access_token",
    config.CONSUMER_KEY,
    config.CONSUMER_SECRET,
    "1.0A",
    null,
    "HMAC-SHA1"
  );

  try {
    oauth.get(
      `https://api.twitter.com/1.1/users/search.json?q=${name}`,
      config.ACCESS_TOKEN,
      config.ACCESS_TOKEN_SECRET,
      (e, data) => {
        if (e) throw e;
        res.status(200).json({
          data: data && JSON.parse(data as string),
        });
      }
    );
  } catch (err) {
    res
      .status(err.code || 500)
      .send({ errors: err.errors, message: err.message });
    logger.error(err.stack || "error encountered");
  }
};
