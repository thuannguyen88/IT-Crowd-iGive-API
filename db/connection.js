import pg from "pg";
import { db } from "../config.js";

import { connectionString } from "../config.js";

const pool = new pg.Pool({
  user: dbPort.USER,
  host: dbPort.HOST,
  database: dbPort.DATABASE,
  password: dbPort.PASSWORD,
  port: dbPort.PORT,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default async function query(text, params) {
  return pool.query(text, params);
}
