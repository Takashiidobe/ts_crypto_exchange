import { JSONType } from "types";

const insertIntoCrypto = (id: number, json: JSONType) => {
  return `INSERT INTO crypto (cryptos, crypto_id) VALUES ('${json}', ${id});`;
};

export default insertIntoCrypto;
