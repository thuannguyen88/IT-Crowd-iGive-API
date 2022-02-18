import query from "../../connection.js";

const sqlString = `DROP TABLE users`;

export async function dropUsersTable() {
  const res = await query(sqlString);
}
console.log(sqlString);

dropUsersTable();
