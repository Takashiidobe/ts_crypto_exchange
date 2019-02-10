import { JSONType } from "types";

const createStockBalance = (id: number, json: JSONType) => {
  return `INSERT INTO stock (id, stocks) VALUES (${id}, ${json});`;
};

export default createStockBalance;
