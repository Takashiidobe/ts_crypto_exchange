import { Request, Response } from "express";

const index = (req: Request, res: Response) => {
  res.status(200).send({
    message: "GET request successful!"
  });
};

export default index;
