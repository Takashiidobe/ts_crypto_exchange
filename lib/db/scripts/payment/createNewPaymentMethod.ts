const createNewPaymentMethod = (
  card_number: String,
  expiration_month: Number,
  expiration_date: Number,
  cvv: Number,
  country: String
) => {
  return `INSERT INTO payment (
    card_number,
    expiration_month,
    expiration_date,
    cvv,
    country
  ) VALUES (
    ${card_number},
    ${expiration_month},
    ${expiration_date},
    ${cvv},
    ${country}
  )`;
};

export default createNewPaymentMethod;
