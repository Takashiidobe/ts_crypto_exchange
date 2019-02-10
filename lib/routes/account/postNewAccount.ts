import { Request, Response } from "express";
import * as bcrypt from "bcrypt";
import pool from "../../db/client";
import { createNewAccount } from "../../db/scripts/account/index";

const postNewAccount = (req: Request, res: Response) => {
  const username: string = req.body.username;
  const password: string = req.body.password;
  if (!username || !password) {
    res.status(404).send({
      message: "Either the username or password was not properly sent"
    });
  }
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) throw err;
    pool.query(
      createNewAccount(username, hash),
      (err: string, data: object) => {
        if (err) throw err;
        if (data) {
          res.send({
            message: "your account has been successfully created"
          });
        }
      }
    );
  });
};

export default postNewAccount;
