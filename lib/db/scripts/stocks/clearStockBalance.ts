const clearStockBalance = (id: number) => {
  return `DELETE FROM stock WHERE stock_id = ${id};`;
};

export default clearStockBalance;
