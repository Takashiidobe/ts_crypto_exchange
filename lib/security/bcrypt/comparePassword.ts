import * as bcrypt from "bcrypt";

const comparePassword = (password: string, hash: string) =>
  bcrypt.compare(password, hash);

export default comparePassword;
