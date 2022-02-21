import query from "../../connection.js";
import { users } from "../../../libs/dummyData.js";

async function populateUserTable() {
  for (let i = 0; i < users.length; i++) {
    const first_name = users[i].first_name;
    const last_name = users[i].last_name;
    const email = users[i].email;
    const address = users[i].address;
    const is_active = users[i].is_active;
    const cloudinary_id = users[i].cloudinary_id;
    const user_bio = users[i].user_bio;
    const res = await query(
      `INSERT INTO users( first_name, last_name, email, address, is_active, cloudinary_id, user_bio) VALUES( $1, $2, $3, $4, $5, $6, $7 ) RETURNING *`,
      [
        first_name,
        last_name,
        email,
        address,
        is_active,
        cloudinary_id,
        user_bio
      ]
    );
    console.log(res);
  }
}

populateUserTable();
