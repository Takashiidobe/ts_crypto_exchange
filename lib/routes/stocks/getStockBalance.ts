import pool from "../../db/client";

import { checkStockBalance } from "../../db/scripts/stocks";
import { Request, Response } from "express";
import { JSONType } from "types";

const getStockBalance = (req: Request, res: Response) => {
  const id = parseInt(req.body.id);
  pool.query(checkStockBalance(id), (err: string, data: JSONType) => {
    if (err) throw err;
    res.send(data.rows);
  });
};

export default getStockBalance;
