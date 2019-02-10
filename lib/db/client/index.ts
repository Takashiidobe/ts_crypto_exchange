import { Pool } from "pg";
import connectionString from "config/connectionString";

const pool = new Pool({
  connectionString,
  ssl: true
});

export default pool;
