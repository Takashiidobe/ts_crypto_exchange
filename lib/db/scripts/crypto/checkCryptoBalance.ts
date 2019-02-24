import knex from '../../knex';

const checkCryptoBalance = (id: number) => {
  return (
    knex.from('crypto')
      .select('cryptos')
      .where('crypto_id', '=', id)
      .then(result => result.json({ success: true, message: 'ok' }))
  );
};

export default checkCryptoBalance;
