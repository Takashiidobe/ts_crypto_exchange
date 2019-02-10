const updatePaymentMethod = (
  id: Number,
  card_number: String,
  expiration_month: Number,
  expiration_date: Number,
  cvv: Number,
  country: String
) => {
  return `UPDATE payment
    SET  
      card_number = ${card_number},
      expiration_month = ${expiration_month},
      expiration_date = ${expiration_date},
      cvv = ${cvv},
      country = ${country}
    WHERE 
      payment_id = ${id}
  )`;
};

export default updatePaymentMethod;
