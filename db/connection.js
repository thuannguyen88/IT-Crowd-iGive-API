import pg from "pg";
import { db } from "../config.js";

import { connectionString } from "../config.js";

const pool = new pg.Pool({
	// connectionString,
	user: db.user,
	host: db.host,
	database: db.database,
	password: db.password,
	port: db.port,
	ssl: {
		rejectUnauthorized: false,
	},
});

export default async function query(text, params) {
	return pool.query(text, params);
}

//
