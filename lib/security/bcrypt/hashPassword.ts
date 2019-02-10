import * as bcrypt from "bcrypt";
const saltRounds = 10;

const hashPassword = (password: string) => bcrypt.hash(password, saltRounds);

export default hashPassword;
