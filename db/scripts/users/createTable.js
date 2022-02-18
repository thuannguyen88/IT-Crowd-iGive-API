import query from "../../connection.js";

const sqlString = `CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, firstName TEXT, lastName TEXT, email TEXT, address TEXT, isActive BOOL, cloudinary_id VARCHAR(128) NOT NULL, userBio TEXT);`;

export async function createUsersTable() {
   const res = await query(sqlString);
}
console.log(sqlString);

createUsersTable();
