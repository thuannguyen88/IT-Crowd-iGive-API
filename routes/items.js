import express from "express";
// import { uploadItemImage } from "../multer/index.js";
import {
	getItemById,
	getAllItems,
	getAllItemsParticularUser,
	createAGiveAwayItem,
	updateAGiveAwayItem,
	deleteAGiveAwayItem,
	deleteAllItemsOfParticularUser,
	updateIsReservedStatus,
} from "../models/users.js";

import { uploader } from "../config.js";

// import { cloudinary } from "../config.js";

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
	//extract the data from the register user form on client , sent via req.body

	const {
		user_id,
		category,
		item_name,
		item_description,
		use_by_date,
		date_added,
		quantity,
		is_reserved,
		availability,
		time_slot,
		image,
	} = req.body;

	//some variables are unavailable unless scoped outside the try block
	let result;

	try {
		//cloudinary uploader passed image which is a base 64 encoded image
		result = await uploader.upload(image);
	} catch (error) {
		//if this fails, let the client know
		console.log("upload failed", error);
		//bad practice to return like this but ok for development
		return;
	}
	//cloudinary returned us an object which we saved as const result
	//we store the image url property as avatar
	//we store the public_id of that image as unique cloudinary_id
	const item_image = result.secure_url;
	const cloudinary_id = result.public_id;

	//insert these values into the users table
	let newItem;
	try {
		newItem = await createAGiveAwayItem(
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
		);
	} catch (error) {
		console.log("create newItem failed", error);
		return;
	}

	res.json({
		message: `item created successfully`,
		success: true,
		payload: newItem,
	});
});

/* DELETE specific item */
itemsRouter.delete("/:id", async (req, res) => {
	const id = Number(req.params.id);
	//also delete cloudinary id of the user we want to delete
	try {
		const item = await getItemById(id);
		item.cloudinary_id
			? await uploader.destroy(item.cloudinary_id, (error, result) =>
					console.log(result)
			  )
			: null;
	} catch (error) {
		console.log("unable to delete cloudinary id", error);
	}

	const deletedItem = await deleteAGiveAwayItem(id);

	res.json({
		message: `user successfully deleted`,
		success: true,
		payload: deletedItem,
	});
});

// /* DELETE all items of a particular USER */
// itemsRouter.delete("/:id", async (req, res) => {
// 	const id = Number(req.params.id);
// 	//also delete cloudinary id of the user we want to delete
// 	try {
// 		const user = await getItemById;
// 		user.cloudinary_id
// 			? await uploader.destroy(user.cloudinary_id, (error, result) =>
// 					console.log(result)
// 			  )
// 			: null;
// 	} catch (error) {
// 		console.log("unable to delete cloudinary id", error);
// 	}

// 	const deletedUser = await deleteUser(id);

// 	res.json({
// 		message: `user successfully deleted`,
// 		success: true,
// 		payload: deletedUser,
// 	});
// });

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
		time_slot,
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
