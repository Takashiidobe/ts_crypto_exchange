import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes";
import pool from "./db/client";

import {
  createAccountTableString,
  createCryptoTableString,
  createPaymentTableString,
  createStockTableString
} from "./db/scripts/startup";

class App {
  public app: express.Application;
  public routePrv: Routes = new Routes();

  constructor() {
    this.app = express();
    this.config();
    this.routePrv.routes(this.app);
    pool.connect();
    pool.query(createAccountTableString);
    pool.query(createCryptoTableString);
    pool.query(createPaymentTableString);
    pool.query(createStockTableString);
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}

export default new App().app;
