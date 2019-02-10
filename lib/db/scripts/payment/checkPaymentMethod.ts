const checkPaymentMethod = (id: number) => {
  return `SELECT * from payment WHERE payment_id = ${id};`;
};

export default checkPaymentMethod;
