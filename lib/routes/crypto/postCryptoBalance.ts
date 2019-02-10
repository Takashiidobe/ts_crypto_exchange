import pool from "../../db/client";
import { insertIntoCrypto } from "../../db/scripts/crypto";
import { Request, Response } from "express";
import { JSONType } from "types";

const postCryptoBalance = (req: Request, res: Response) => {
  const id = parseInt(req.body.id);
  const currencies = (JSON.stringify(
    req.body.currencies
  ) as unknown) as JSONType;
  pool.query(
    insertIntoCrypto(id, currencies),
    (err: string, data: JSONType) => {
      if (err) throw err;
      res.send(data["rows"]);
    }
  );
};

export default postCryptoBalance;
