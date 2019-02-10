const updatePaymentMethod = (
  id: number,
  card_number: string,
  expiration_month: number,
  expiration_date: number,
  cvv: number,
  country: string
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
