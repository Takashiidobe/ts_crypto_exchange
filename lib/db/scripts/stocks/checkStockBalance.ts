const checkStockBalance = (id: Number) => {
  return `SELECT stocks from stock WHERE id = ${id}`;
};

export default checkStockBalance;
