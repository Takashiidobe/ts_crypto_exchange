import { Request, Response } from "express";
import pool from "../../db/client";
import { createNewAccount } from "../../db/scripts/account/index";
import { hashPassword } from "../../security/bcrypt";

const postNewAccount = (req: Request, res: Response) => {
  const username: string = req.body.username;
  const password: string = req.body.password;
  if (!username || !password) {
    res.status(404).send({
      message: "Either the username or password was not properly sent"
    });
  }
  hashPassword(password)
    .then(response => {
      pool.query(createNewAccount(username, response));
      res.send({ message: "your account has been successfully created" });
    })
    .catch(() =>
      res.send({ message: "There was an error in creating your account" })
    );
};

export default postNewAccount;
