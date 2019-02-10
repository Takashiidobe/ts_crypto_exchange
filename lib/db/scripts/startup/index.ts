export const createAccountTableString = `CREATE TABLE IF NOT EXISTS account (id SERIAL PRIMARY KEY, username VARCHAR(255) NOT NULL, password varchar(255) NOT NULL, balance INTEGER);`;

export const createStockTableString = `CREATE TABLE IF NOT EXISTS stock (stock_id INTEGER, stocks json, FOREIGN KEY (stock_id) REFERENCES account(id));`;

export const createCryptoTableString = `CREATE TABLE IF NOT EXISTS crypto (crypto_id INTEGER, cryptos json, FOREIGN KEY(crypto_id) REFERENCES account(id));`;

export const createPaymentTableString = `CREATE TABLE IF NOT EXISTS payment (payment_id INTEGER, card_number VARCHAR(255), expiration_month VARCHAR(2), expiration_date VARCHAR(2), cvv VARCHAR(3), country VARCHAR(100), FOREIGN KEY(payment_id) REFERENCES account(id));`;
