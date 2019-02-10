const checkCryptoBalance = (id: number) => {
  return `SELECT cryptos from crypto WHERE crypto_id = ${id};`;
};

export default checkCryptoBalance;
