import pool from "../../db/client";
import { checkCryptoBalance } from "../../db/scripts/crypto";
import { Request, Response } from "express";
import { JSONType } from "types/JsonType";

const getCryptoBalance = (req: Request, res: Response) => {
  const id = parseInt(req.body.id);
  pool.query(checkCryptoBalance(id), (err: string, data: JSONType) => {
    if (err) throw err;
    res.send(data.rows);
  });
};

export default getCryptoBalance;
