import query from "../../connection.js";
import { items } from "../../../libs/dummyData.js";

async function populateItemsTable() {
  for (let i = 0; i < items.length; i++) {
    const userId = items[i].userId;
    const category = items[i].category;
    const itemName = items[i].itemName;
    const itemDescription = items[i].itemDescription;
    const useByDate = items[i].useByDate;
    const dateAdded = items[i].dateAdded;
    const quantity = items[i].quantity;
    const cloudinary_id = items[i].cloudinary_id;
    const isReserved = items[i].isReserved;
    const availability = items[i].availability;
    const timeslot = items[i].timeslot;

    const res = await query(
      `INSERT INTO items (userId, category, itemName, itemDescription, useByDate, dateAdded, quantity, cloudinary_id, isReserved, availability, timeslot) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *`,
      [
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
        timeslot,
      ]
    );
    console.log(res);
  }
}

populateItemsTable();
