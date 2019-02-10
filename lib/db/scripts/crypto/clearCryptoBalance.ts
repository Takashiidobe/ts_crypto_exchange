const clearCryptoBalance = (id: number) => {
  return `DELETE FROM crypto WHERE crypto_id = ${id}`;
};

export default clearCryptoBalance;
