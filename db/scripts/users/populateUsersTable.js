import query from "../../connection.js";
import { users } from "../../../libs/dummyData.js";

async function populateUserTable() {
  for (let i = 0; i < users.length; i++) {
    const firstName = users[i].firstName;
    const lastName = users[i].lastName;
    const email = users[i].email;
    const address = users[i].address;
    const isActive = users[i].isActive;
    const cloudinary_id = users[i].cloudinary_id;
    const userBio = users[i].userBio;
    const res = await query(
      `INSERT INTO users( firstName, lastName, email, address, isActive, cloudinary_id, userBio) VALUES( $1, $2, $3, $4, $5, $6, $7 ) RETURNING *`,
      [
        firstName,
        lastName,
        email,
        address,
        isActive,
        cloudinary_id,
        userBio
      ]
    );
    console.log(res);
  }
}

populateUserTable();
