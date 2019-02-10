import { JsonType } from "types";

const updateCryptoBalance = (id: number, json: JsonType) => {
  return `UPDATE crypto SET cryptos = '${json}' WHERE crypto_id = ${id}`;
};

export default updateCryptoBalance;
