import query from "../../connection.js";

const sqlString = `DROP TABLE items`;

export async function dropItemsTable() {
  const res = await query(sqlString);
}
console.log(sqlString);

dropItemsTable();
