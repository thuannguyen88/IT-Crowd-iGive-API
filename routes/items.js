import express from "express";
// import { getAllUsers } from "../models/users.js";

const router = express.Router();

// /items -> get all items
// /items/:id -> get specific item

/* GET all items */
router.get("/", async (req, res) => {
  res.send("get all items");
  // const items = await getAllItems();

  // res.json({
  //   message: `all items`,
  //   success: true,
  //   payload: items,
  // });
});

/* GET specific item */
router.get("/:id", async (req, res) => {
  res.send("get specific item");
  // const id = Number(req.params.id);
  // const requestedItem = await getItemById(id);
  // res.json({
  //   message: `found item with id ${id}`,
  //   success: true,
  //   payload: requestedItem,
  // });
});

export default router;
