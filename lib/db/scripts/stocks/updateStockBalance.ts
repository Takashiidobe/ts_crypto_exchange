import { JSONType } from "types";

const updateStockBalance = (id: number, json: JSONType) => {
  return `UPDATE stock SET stocks = ${json} WHERE stock_id = ${id};`;
};

export default updateStockBalance;
