import pool from "../../db/client";
import { clearCryptoBalance } from "../../db/scripts/crypto";
import { Request, Response } from "express";

const deleteCryptoBalance = (req: Request, res: Response) => {
  const id = parseInt(req.body.id);
  pool.query(clearCryptoBalance(id), (err: string, data: string) => {
    if (err) throw err;
    res.send(data);
  });
};

export default deleteCryptoBalance;
