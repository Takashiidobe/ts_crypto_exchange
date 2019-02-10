import { JSONType } from "types";
import pool from "../../db/client";
import { updateStockBalance } from "../../db/scripts/stocks";
import { Request, Response } from "express";

const putStockBalance = (req: Request, res: Response) => {
  const id = parseInt(req.body.id);
  const stocks = (JSON.stringify(req.body.stocks) as unknown) as JSONType;
  pool.query(updateStockBalance(id, stocks), (err: string, data: JSONType) => {
    if (err) throw err;
    res.send(data);
  });
};

export default putStockBalance;
