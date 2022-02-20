import query from "../../connection.js";

const sqlString = `CREATE TABLE IF NOT EXISTS items (itemId SERIAL PRIMARY KEY, userId INT, category TEXT, itemName TEXT, itemDescription TEXT, useByDate DATE NOT NULL, dateAdded TIMESTAMP, quantity INT, cloudinary_id VARCHAR(128) NOT NULL, isReserved BOOL, availability BOOL, timeslot TEXT, CONSTRAINT id_to_userId FOREIGN KEY(userId) REFERENCES users(id));`;

export async function createItemsTable() {
  const res = await query(sqlString);
}
console.log(sqlString);

createItemsTable();
