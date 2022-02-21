import express from "express";
import {
  getAllItems,
  getAllItemsParticularUser,
  createAGiveAwayItem,
  updateAGiveAwayItem,
  deleteAGiveAwayItem,
  updateIsReservedStatus,
} from "../models/users.js";

const itemsRouter = express.Router();

// GET request /items -> get all items
// GET request /items/:id -> get all items for specific user
// POST request /items -> create an item
// PUT request /items/:id -> update an item
// DELETE request /items/:id -> delete item

/* GET all items */
itemsRouter.get("/", async (req, res) => {
  //   res.send("get all items");

  const items = await getAllItems();

  res.json({
    message: `all items`,
    success: true,
    payload: items,
  });
});

/* GET specific item */
itemsRouter.get("/:id", async (req, res) => {
  //   res.send("get all items for specific user");

  const id = Number(req.params.id);
  const requestedItems = await getAllItemsParticularUser(id);

  res.json({
    message: `found all items for user with id ${id}`,
    success: true,
    payload: requestedItems,
  });
});

/* CREATE an item */
itemsRouter.post("/", async (req, res) => {
  //   res.send("item created successfully");

  const {
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
  } = req.body;

  const newItem = await createAGiveAwayItem(
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
  );

  res.json({
    message: `item created successfully`,
    success: true,
    payload: newItem,
  });
});

/* DELETE specific item */
itemsRouter.delete("/:id", async (req, res) => {
  //   res.send("item deleted successfully");

  const id = Number(req.params.id);
  const deletedItem = await deleteAGiveAwayItem(id);

  res.json({
    message: `item deleted successfully`,
    success: true,
    payload: deletedItem,
  });
});

/* UPDATE specific item */
itemsRouter.put("/:id", async (req, res) => {
  //   res.send("item details updated successfully");

  const item_id = Number(req.params.id);
  const {
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
  } = req.body;

  const updatedItem = await updateAGiveAwayItem(
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
  );

  res.json({
    message: `item details updated successfully`,
    success: true,
    payload: updatedItem,
  });
});

itemsRouter.patch("/:id", async (req, res) => {
  //   res.send("item reserve status updated successfully");

  const id = Number(req.params.id);
  const { is_reserved } = req.body;

  const itemReserveStatus = await updateIsReservedStatus(id, is_reserved);

  res.json({
    message: `item reserve status updated successfully`,
    success: true,
    payload: itemReserveStatus,
  });
});

export default itemsRouter;
