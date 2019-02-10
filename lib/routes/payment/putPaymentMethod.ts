import { JSONType } from "types";
import pool from "../../db/client";
import { updatePaymentMethod } from "../../db/scripts/payment";
import { Request, Response } from "express";
import { hashPassword } from "../../security/bcrypt";

const putPaymentMethod = async (req: Request, res: Response) => {
  const id = parseInt(req.body.id);
  const cardNumber = await hashPassword(req.body.card_number);
  const expirationMonth = parseInt(req.body.expiration_month);
  const expirationDate = parseInt(req.body.expiration_date);
  const cvv = parseInt(req.body.cvv);
  const country = req.body.country;
  pool.query(
    updatePaymentMethod(
      id,
      cardNumber,
      expirationMonth,
      expirationDate,
      cvv,
      country
    ),
    (err: string, data: JSONType) => {
      if (err) throw err;
      res.send(data);
    }
  );
};

export default putPaymentMethod;
