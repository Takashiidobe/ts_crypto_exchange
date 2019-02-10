const clearCryptoBalance = (id: Number) => {
  return `DELETE FROM crypto WHERE crypto_id = ${id}`;
};

export default clearCryptoBalance;
