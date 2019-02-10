const createNewAccount = (username: String, password: String) => {
  return `
  INSERT INTO account (
    username, password, balance
    ) VALUES (
      '${username}', '${password}', 0
    );
`;
};

export default createNewAccount;
