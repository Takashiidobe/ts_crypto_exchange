const checkStockBalance = (id: number) => {
  return `SELECT stocks from stock WHERE id = ${id}`;
};

export default checkStockBalance;
