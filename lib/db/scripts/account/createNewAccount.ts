import knex from '../../knex/';

const createNewAccount = (username: string, password: string) => {
  return knex('account').insert({
    username,
    password
  }).then(result => result.json({ success: true, message: 'ok' }));
};

export default createNewAccount;
