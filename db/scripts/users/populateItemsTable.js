import query from "../../connection.js";
import { items } from "../../../libs/dummyData.js";

async function populateItemsTable() {
  for (let i = 0; i < items.length; i++) {
    const user_id = items[i].user_id;
    const category = items[i].category;
    const item_name = items[i].item_name;
    const item_description = items[i].item_description;
    const use_by_date = items[i].use_by_date;
    const date_added = items[i].date_added;
    const quantity = items[i].quantity;
    const cloudinary_id = items[i].cloudinary_id;
    const item_image = items[i].item_image;
    const is_reserved = items[i].is_reserved;
    const availability = items[i].availability;
    const time_slot = items[i].time_slot;

    const res = await query(
      `INSERT INTO items ( user_id, category, item_name, item_description, use_by_date, date_added, quantity, cloudinary_id, item_image, is_reserved, availability, time_slot ) VALUES( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *`,
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
        time_slot,
      ]
    );
    console.log(res);
  }
}

populateItemsTable();
