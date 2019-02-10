const insertIntoCrypto = (id: Number, json: unknown) => {
  return `INSERT INTO crypto (cryptos, crypto_id) VALUES ('${json}', ${id})`;
};

export default insertIntoCrypto;
