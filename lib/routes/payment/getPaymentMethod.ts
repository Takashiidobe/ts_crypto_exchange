import pool from "../../db/client";

import { checkPaymentMethod } from "../../db/scripts/payment";
import { Request, Response } from "express";
import { JSONType } from "types";

const getPaymentBalance = (req: Request, res: Response) => {
  const id = parseInt(req.body.id);
  pool.query(checkPaymentMethod(id), (err: string, data: JSONType) => {
    if (err) throw err;
    res.send(data.rows);
  });
};

export default getPaymentBalance;
