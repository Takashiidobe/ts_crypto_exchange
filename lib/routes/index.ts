import { Request, Response } from "express";
import postNewAccount from "./account/postNewAccount";

import index from "./rootRoute";
import {
  getCryptoBalance,
  postCryptoBalance,
  putCryptoBalance,
  deleteCryptoBalance
} from "./crypto";
import { postNewPayment, getPaymentMethod, putPaymentMethod } from "./payment";
import {
  getStockBalance,
  postStockBalance,
  putStockBalance,
  deleteStockBalance
} from "./stocks";

export class Routes {
  public routes(app): void {
    /* Method: GET
     ** route: /
     ** desc: Test route to see if the service is running
     */
    app.route("/").get((req: Request, res: Response) => {
      index(req, res);
    });
    /* Method: POST
     ** route: api/account
     ** desc: creates a new account.
     */
    app.route("/api/account").post((req: Request, res: Response) => {
      postNewAccount(req, res);
    });
    /* Method: POST
     ** route: api/payment
     ** desc: create a new payment method
     */
    app.route("/api/payment").post((req: Request, res: Response) => {
      postNewPayment(req, res);
    });
    /* Method: GET
     ** route: api/payment
     ** desc: Get current payment methods
     */
    app.route("api/payment").get((req: Request, res: Response) => {
      getPaymentMethod(req, res);
    });
    /* Method: PUT
     ** route: api/payment
     ** desc: update an existing payment method
     */
    app.route("api/payment").put((req: Request, res: Response) => {
      putPaymentMethod(req, res);
    });
    /* Method: GET
     ** route: api/crypto
     ** desc: Check crypto sheet
     */
    app.route("/api/crypto").get((req: Request, res: Response) => {
      getCryptoBalance(req, res);
    });
    /* Method: POST
     ** route: api/crypto
     ** desc: create a new crypto sheet
     */
    app.route("/api/crypto").post((req: Request, res: Response) => {
      postCryptoBalance(req, res);
    });
    /* Method: PUT
     ** route: api/crypto
     ** desc: updates a crypto sheet
     */
    app.route("/api/crypto").put((req: Request, res: Response) => {
      putCryptoBalance(req, res);
    });
    /* Method: DELETE
     ** route: api/crypto
     ** desc: clears the crypto sheet
     */
    app.route("/api/crypto").delete((req: Request, res: Response) => {
      deleteCryptoBalance(req, res);
    });
    /* Method: GET
     ** route: api/stocks
     ** desc: gets the current stock sheet
     */
    app.route("/api/stocks").get((req: Request, res: Response) => {
      getStockBalance(req, res);
    });
    /* Method: POST
     ** route: api/stocks
     ** desc: creates a new stock sheet
     */
    app.route("/api/stocks").post((req: Request, res: Response) => {
      postStockBalance(req, res);
    });
    /* Method: PUT
     ** route: api/stocks
     ** desc: Updates the current stock sheet
     */
    app.route("/api/stocks").put((req: Request, res: Response) => {
      putStockBalance(req, res);
    });
    /* Method: DELETE
     ** route: api/stocks
     ** desc: deletes the stocks sheet
     */
    app.route("/api/stocks").delete((req: Request, res: Response) => {
      deleteStockBalance(req, res);
    });
  }
}
