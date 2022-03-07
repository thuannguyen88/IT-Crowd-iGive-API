import query from "../../connection.js";
import { users } from "../../../libs/dummyData.js";

async function populateUserTable() {
	for (let i = 0; i < users.length; i++) {
		const full_name = users[i].full_name;

		const email = users[i].email;
		const address = users[i].address;
		const is_active = users[i].is_active;
		const cloudinary_id = users[i].cloudinary_id;
		const avatar = users[i].avatar;
		const user_bio = users[i].user_bio;
		const res = await query(
			`INSERT INTO users( full_name, email, address, is_active, cloudinary_id, avatar, user_bio) VALUES( $1, $2, $3, $4, $5, $6, $7 ) RETURNING *`,
			[full_name, email, address, is_active, cloudinary_id, avatar, user_bio]
		);
		console.log(res);
	}
}

populateUserTable();
