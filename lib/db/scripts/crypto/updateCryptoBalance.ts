import { JSONType } from "types";

const updateCryptoBalance = (id: number, json: JSONType) => {
  return `UPDATE crypto SET cryptos = '${json}' WHERE crypto_id = ${id};`;
};

export default updateCryptoBalance;
