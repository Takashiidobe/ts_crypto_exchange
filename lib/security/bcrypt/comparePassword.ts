import * as bcrypt from "bcrypt";

const comparePassword = (password: string, hash: string) => {
  return bcrypt.compare(password, hash, (err, res) => {
    if (err) throw err;
    return res;
  });
};

export default comparePassword;
