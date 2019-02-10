const updateStockBalance = (id: Number, json: object) => {
  return `UPDATE stock SET stocks = ${json} WHERE stock_id = ${id}`;
};

export default updateStockBalance;
