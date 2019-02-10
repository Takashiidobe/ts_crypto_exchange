import { JsonType } from "types";

const updateStockBalance = (id: number, json: JsonType) => {
  return `UPDATE stock SET stocks = ${json} WHERE stock_id = ${id}`;
};

export default updateStockBalance;
