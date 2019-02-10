const createNewAccount = (username: string, password: string) => {
  return `
  INSERT INTO account (
    username, password, balance
    ) VALUES (
      '${username}', '${password}', 0
    );
`;
};

export default createNewAccount;
