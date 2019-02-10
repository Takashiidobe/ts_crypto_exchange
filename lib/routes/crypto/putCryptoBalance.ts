import pool from "../../db/client";
import { updateCryptoBalance } from "../../db/scripts/crypto";
import { Request, Response } from "express";

const putCryptoBalance = (req: Request, res: Response) => {
  const id = parseInt(req.body.id);
  const currencies = JSON.stringify(req.body.currencies);
  pool.query(
    updateCryptoBalance(id, currencies),
    (err: string, data: unknown) => {
      if (err) throw err;
      res.send(data);
    }
  );
};

export default putCryptoBalance;
