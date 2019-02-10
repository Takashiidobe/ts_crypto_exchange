import pool from "../../db/client";
import { clearStockBalance } from "../../db/scripts/stocks";
import { Request, Response } from "express";

const deleteStockBalance = (req: Request, res: Response) => {
  const id = parseInt(req.body.id);
  pool.query(clearStockBalance(id), (err: string, data: string) => {
    if (err) throw err;
    res.send(data);
  });
};

export default deleteStockBalance;
