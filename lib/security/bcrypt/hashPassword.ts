import * as bcrypt from "bcrypt";
const saltRounds = 10;

const hashPassword = (password: String) => {
  return bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) throw err;
    return hash;
  });
};

export default hashPassword;
