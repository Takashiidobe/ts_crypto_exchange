import pool from "../../db/client";

import { createStockBalance } from "../../db/scripts/stocks";
import { Request, Response } from "express";
import { JSONType } from "types";

const postStockBalance = (req: Request, res: Response) => {
  const id = parseInt(req.body.id);
  const stocks = (JSON.stringify(req.body.stocks) as unknown) as JSONType;
  pool.query(createStockBalance(id, stocks), (err: string, data: JSONType) => {
    if (err) throw err;
    res.send(data.rows);
  });
};

export default postStockBalance;
