import query from "../db/connection.js";

// -=-=-=-=-=-=-=-=-=-=-=-=- USERS MODELS -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// fetch all USERS from a user table
export async function getAllUsers() {
	const data = await query(`SELECT * FROM users;`);
	return data.rows;
}

// fetch the USER by ID from a user table 
export async function getUserById( id ) {
	const data = await query(`SELECT * FROM users WHERE id=$1;`, [ id ]);
	return data.rows;
}

// fetch the USER by EMAIL from a user table 
export async function getUserByEmail( email ) {
	const data = await query(`SELECT * FROM users WHERE email=$1;`, [ email ]);
	return data.rows;
}

// create a new USER registration in a user table
export async function createUser(
    firstName, 
    lastName, 
    email, 
    address, 
    isActive, 
    cloudinary_id, 
    userBio
) {
	const data = await query(`INSERT INTO users ( firstName, lastName, email, address, isActive, cloudinary_id, userBio ) VALUES ( $1, $2, $3, $4, $5, $6, $7 )  RETURNING *;`,
    [ firstName, lastName, email, address, isActive, cloudinary_id, userBio ]);
	return data.rows;
}

// 
export async function updateUser(
    id,
    firstName, 
    lastName, 
    email, 
    address, 
    isActive, 
    cloudinary_id, 
    userBio
) {
	const data = await query(`UPDATE users SET firstName=$2, lastName=$3, email=$4, address=$5, isActive=$6, cloudinary_id=$7, userBio=$8 WHERE id=$1 RETURNING *;`,
    [ id, firstName, lastName, email, address, isActive, cloudinary_id, userBio ]);
	return data.rows;
}

// 
export async function deleteUser( id ) {
	const data = await query(`DELETE FROM users WHERE id=$1;`, [ id ]);
	return data.rows;
}

// -=-=-=-=-=-=-=-=-=-=-=-=- ITEMS MODELS -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

//
export async function getAllItems() {
	const data = await query(`SELECT * FROM items;`);
	return data.rows;
}

// 
export async function getAllItemsParticularUser( id ) {
	const data = await query(`SELECT * FROM items WHERE userId=$1;`, [ id ]);
	return data.rows;
}

// 
export async function createAGiveAwayItem(
    userId,
    category,
    itemName,
    itemDescription,
    useByDate,
    dateAdded,
    quantity,
    cloudinary_id,
    isReserved,
    availability,
    timeslot
) {
	const data = await query(`INSERT INTO items ( userId, category, itemName, itemDescription, useByDate, dateAdded, quantity, cloudinary_id, isReserved, availability, timeslot ) VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11 )  RETURNING *;`,
    [ userId, category, itemName, itemDescription, useByDate, dateAdded, quantity, cloudinary_id, isReserved, availability, timeslot ]);
	return data.rows;
}

// 
export async function updateAGiveAwayItem(
    itemId,
    userId,
    category,
    itemName,
    itemDescription,
    useByDate,
    dateAdded,
    quantity,
    cloudinary_id,
    isReserved,
    availability,
    timeslot
) {
	const data = await query(`UPDATE items SET userId=$2, category=$3, itemName=$4, itemDescription=$5, useByDate=$6, dateAdded=$7, quantity=$8, cloudinary_id=$9, isReserved=$10, availability=$11, timeslot=$12 WHERE itemId=$1 RETURNING *;`,
    [ itemId, userId, category, itemName, itemDescription, useByDate, dateAdded, quantity, cloudinary_id, isReserved, availability, timeslot ]);
	return data.rows;
}

// 
export async function deleteAGiveAwayItem( id ) {
	const data = await query(`DELETE FROM items WHERE itemId=$1;`, [ id ]);
	return data.rows;
}