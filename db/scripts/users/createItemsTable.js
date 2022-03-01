import query from "../../connection.js";

const sqlString = `CREATE TABLE IF NOT EXISTS items (item_id SERIAL PRIMARY KEY, user_id INT, category TEXT, item_name TEXT, item_description TEXT, use_by_date TEXT, date_added TEXT, quantity INT, cloudinary_id VARCHAR(128) NOT NULL, item_image TEXT, is_reserved BOOL, availability BOOL, time_slot TEXT, CONSTRAINT id_to_user_id FOREIGN KEY(user_id) REFERENCES users(id));`;

export async function createItemsTable() {
	const res = await query(sqlString);
}
console.log(sqlString);

createItemsTable();
