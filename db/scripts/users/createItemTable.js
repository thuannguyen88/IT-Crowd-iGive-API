import query from "../../connection.js";

const sqlString = `CREATE TABLE IF NOT EXISTS items (id SERIAL PRIMARY KEY, userId INT, category TEXT, itemName TEXT, itemDescription TEXT, useByDate INT, dateAdded INT, quantity INT, cloudinary_id VARCHAR(128) NOT NULL, isReserved BOOL, availability BOOL, timeslot TEXT);`;

export async function createItemsTable() {
   const res = await query(sqlString);
}
console.log(sqlString);

createItemsTable();
