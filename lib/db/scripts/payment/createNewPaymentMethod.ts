const createNewPaymentMethod = (
  card_number: string,
  expiration_month: number,
  expiration_date: number,
  cvv: number,
  country: string
) => {
  return `INSERT INTO payment (
    card_number,
    expiration_month,
    expiration_date,
    cvv,
    country
  ) VALUES (
    '${card_number}',
    '${expiration_month}',
    '${expiration_date}',
    '${cvv}',
    '${country}'
  );`;
};

export default createNewPaymentMethod;
