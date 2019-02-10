import pool from "../../db/client";
import { checkCryptoBalance } from "../../db/scripts/crypto";
import { Request, Response } from "express";

const getCryptoBalance = (req: Request, res: Response) => {
  const id = parseInt(req.body.id);
  pool.query(checkCryptoBalance(id), (err: string, data: string) => {
    if (err) throw err;
    res.send(data);
  });
};

export default getCryptoBalance;
