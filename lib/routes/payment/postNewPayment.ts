import pool from "../../db/client";
import { Request, Response } from "express";
import { createNewPaymentMethod } from "../../db/scripts/payment";
import { JSONType } from "types";
import { hashPassword } from "../../security/bcrypt";

const postNewPayment = async (req: Request, res: Response) => {
  const cardNumber = await hashPassword(req.body.card_number);
  const expirationMonth = parseInt(req.body.expiration_month);
  const expirationDate = parseInt(req.body.expiration_date);
  const cvv = parseInt(req.body.cvv);
  const country = req.body.country;

  pool.query(
    createNewPaymentMethod(
      cardNumber,
      expirationMonth,
      expirationDate,
      cvv,
      country
    ),
    (err: string, data: JSONType) => {
      if (err) throw err;
      res.send(data["rows"]);
    }
  );
};

export default postNewPayment;
