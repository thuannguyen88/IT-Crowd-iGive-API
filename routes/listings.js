import express from "express";
import { getListings } from "../models/users.js";

const listingsRouter = express.Router();

listingsRouter.get("/", async (req, res) => {
	//   res.send("item reserve status updated successfully");

	const getAllListings = await getListings();

	res.json({
		message: `all users and items fetched successfully`,
		success: true,
		payload: getAllListings,
	});
});

export default listingsRouter;
