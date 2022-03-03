import query from "../db/connection.js";

// -=-=-=-=-=-=-=-=-=-=-=-=- USERS MODELS -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// fetch all USERS from a user's table
export async function getAllUsers() {
	const data = await query(`SELECT * FROM users;`);
	return data.rows;
}

// fetch the USER by ID from an users table
export async function getUserById(id) {
	const data = await query(`SELECT * FROM users WHERE id=$1;`, [id]);
	return data.rows;
}

// fetch the USER by EMAIL from an users table ***
// export async function getUserByEmail( email ) {
// 	const data = await query(`SELECT * FROM users WHERE email=$1;`, [ email ]);
// 	return data.rows;
// }

// create a new USER registration in an users table
export async function createUser(
	first_name,
	last_name,
	email,
	address,
	is_active,
	cloudinary_id,
	avatar,
	user_bio
) {
	const data = await query(
		`INSERT INTO users ( first_name, last_name, email, address, is_active, cloudinary_id, avatar, user_bio ) VALUES ( $1, $2, $3, $4, $5, $6, $7, $8)  RETURNING *;`,
		[
			first_name,
			last_name,
			email,
			address,
			is_active,
			cloudinary_id,
			avatar,
			user_bio,
		]
	);
	return data.rows;
}

// update an existing USER registration parameters in an users table
export async function updateUser(
	id,
	first_name,
	last_name,
	email,
	address,
	is_active,
	cloudinary_id,
	avatar,
	user_bio
) {
	const data = await query(
		`UPDATE users SET first_name=$2, last_name=$3, email=$4, address=$5, is_active=$6, cloudinary_id=$7, avatar=$8, user_bio=$9 WHERE id=$1 RETURNING *;`,
		[
			id,
			first_name,
			last_name,
			email,
			address,
			is_active,
			cloudinary_id,
			avatar,
			user_bio,
		]
	);
	return data.rows;
}

// delete an existing USER registration in an users table
export async function deleteUser(id) {
	const data = await query(`DELETE FROM users WHERE id=$1;`, [id]);
	return data.rows;
}

// update an isActive parameter with an existing USER registration in an users table
export async function updateIsActiveStatus(id, is_active) {
	// const selectedUser = await getUserById(id);
	// const currentStatus = selectedUser[0].isActive;
	// const isComplete = changeIsCompleteStatus(currentStatus);
	const data = await query(
		`UPDATE users SET is_active = $2 WHERE id = $1 RETURNING *;`,
		[id, is_active]
	);
	return data.rows;
}

// fetch JOINED data of USERS and ITEMS on ID
export async function getListings() {
	const data = await query(
		`SELECT *
FROM
	users
INNER JOIN items 
    ON users.id = items.user_id;`
	);

	return data.rows;
}

// `SELECT
//     users.id,
//     first_name,
//     last_name,
//     address,
//     is_active,
//     cloudinary_id,
//     avatar,
//     items.user_id,
//     category,
//     item_name,
//     item_description,
//     use_by_date,
//     date_added,
//     quantity,
//     cloudinary_id,
//     item_image,
//     is_reserved,
//     availability,
//     time_slot
// FROM
// 	users
// INNER JOIN items
//     ON users.id = items.user_id;`);

// -=-=-=-=-=-=-=-=-=-=-=-=- ITEMS MODELS -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

//fetch all ITEMS from a items table
export async function getAllItems() {
	const data = await query(`SELECT * FROM items;`);
	return data.rows;
}

// fetch the ITEM by ID from items table
export async function getItemById(id) {
	const data = await query(`SELECT * FROM items WHERE item_id=$1;`, [id]);
	return data.rows;
}

// fetch all ITEMS from a particular USER from an user table
export async function getAllItemsParticularUser(id) {
	const data = await query(`SELECT * FROM items WHERE user_id=$1;`, [id]);
	return data.rows;
}

// create a new ITEM registration in an items table
export async function createAGiveAwayItem(
	user_id,
	category,
	item_name,
	item_description,
	use_by_date,
	date_added,
	quantity,
	cloudinary_id,
	item_image,
	is_reserved,
	availability,
	time_slot
) {
	const data = await query(
		`INSERT INTO items ( user_id, category, item_name, item_description, use_by_date, date_added, quantity, cloudinary_id, item_image, is_reserved, availability, time_slot ) VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12 )  RETURNING *;`,
		[
			user_id,
			category,
			item_name,
			item_description,
			use_by_date,
			date_added,
			quantity,
			cloudinary_id,
			item_image,
			is_reserved,
			availability,
			time_slot
		]
	);
	return data.rows;
}

// update an existing ITEM registration parameters in an items table
export async function updateAGiveAwayItem(
	item_id,
	user_id,
	category,
	item_name,
	item_description,
	use_by_date,
	date_added,
	quantity,
	cloudinary_id,
	is_reserved,
	availability,
	time_slot
) {
	const data = await query(
		`UPDATE items SET userId=$2, category=$3, itemName=$4, itemDescription=$5, useByDate=$6, dateAdded=$7, quantity=$8, cloudinary_id=$9, isReserved=$10, availability=$11, timeslot=$12 WHERE itemId=$1 RETURNING *;`,
		[
			item_id,
			user_id,
			category,
			item_name,
			item_description,
			use_by_date,
			date_added,
			quantity,
			cloudinary_id,
			is_reserved,
			availability,
			time_slot,
		]
	);
	return data.rows;
}

// delete an existing ITEM registration in an items table
export async function deleteAGiveAwayItem(id) {
	const data = await query(`DELETE FROM items WHERE item_id=$1;`, [id]);
	return data.rows;
}

// delete all ITEMS registrations in an items table belongs to particular USER
export async function deleteAllItemsOfParticularUser(id) {
	const data = await query(`DELETE FROM items WHERE user_id=$1;`, [id]);
	return data.rows;
}

// update an isReserved parameter with an existing ITEM registration in an items table
export async function updateIsReservedStatus(id, is_reserved) {
	// const selectedItem = await getItemById(id);
	// const currentStatus = selectedUser[0].isReserved;
	// const isReserved = changeIsReservedStatus(currentStatus);
	const data = await query(
		`UPDATE items SET is_reserved = $2 WHERE item_id = $1 RETURNING *;`,
		[id, is_reserved]
	);
	return data.rows;
}
