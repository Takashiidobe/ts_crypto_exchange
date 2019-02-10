import { JsonType } from "types";

const insertIntoCrypto = (id: number, json: JsonType) => {
  return `INSERT INTO crypto (cryptos, crypto_id) VALUES ('${json}', ${id})`;
};

export default insertIntoCrypto;
