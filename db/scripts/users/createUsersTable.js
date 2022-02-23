import query from "../../connection.js";

const sqlString = `CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, first_name TEXT, last_name TEXT, email TEXT, address TEXT, is_active BOOL, cloudinary_id VARCHAR(128) NOT NULL, avatar TEXT, user_bio TEXT);`;

export async function createUsersTable() {
	const res = await query(sqlString);
}
console.log(sqlString);

createUsersTable();
