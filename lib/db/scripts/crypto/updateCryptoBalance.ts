const updateCryptoBalance = (id: Number, json: unknown) => {
  return `UPDATE crypto SET cryptos = '${json}' WHERE crypto_id = ${id}`;
};

export default updateCryptoBalance;
