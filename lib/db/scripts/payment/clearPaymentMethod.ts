const clearPaymentMethod = (id: number) => {
  return `DELETE FROM payment
    WHERE 
      payment_id = ${id}
  );`;
};

export default clearPaymentMethod;
