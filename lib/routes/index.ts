import { Request, Response } from "express";
import postNewAccount from "./account/postNewAccount";

import index from "./rootRoute";
import {
  getCryptoBalance,
  postCryptoBalance,
  putCryptoBalance,
  deleteCryptoBalance
} from "./crypto";

export class Routes {
  public routes(app): void {
    app.route("/").get((req: Request, res: Response) => {
      index(req, res);
    });
    app.route("/api/account").post((req: Request, res: Response) => {
      postNewAccount(req, res);
    });
    app.route("/api/crypto").get((req: Request, res: Response) => {
      getCryptoBalance(req, res);
    });
    app.route("/api/crypto").post((req: Request, res: Response) => {
      postCryptoBalance(req, res);
    });
    app.route("/api/crypto").put((req: Request, res: Response) => {
      putCryptoBalance(req, res);
    });
    app.route("/api/crypto").delete((req: Request, res: Response) => {
      deleteCryptoBalance(req, res);
    });
  }
}
