import express from "express";
import { upload } from "../multer/index.js";

import {
	getAllUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
	updateIsActiveStatus,
} from "../models/users.js";

import { cloudinary } from "../config.js";

// cloudinary.upload.single

const usersRouter = express.Router();

// GET request to /users -> get all users
// GET request /users/:id -> get specific user
// POST request /users -> create new user
// PUT request /users/:id -> update user
// DELETE request /users/:id -> delete user

/* GET all users */
usersRouter.get("/", async (req, res) => {
	// res.send("get all users");

	const users = await getAllUsers();
	console.log(users);
	res.json({
		message: `all users`,
		success: true,
		payload: users,
	});
});

/* GET specific user by ID */
usersRouter.get("/:id", async (req, res) => {
	// res.send("get user by id");

	const id = Number(req.params.id);
	const requestedUser = await getUserById(id);

	res.json({
		message: `found user with id ${id}`,
		success: true,
		payload: requestedUser,
	});
});

// /* GET specific user by EMAIL */
// getting user by email, *unfinished logic*
// router.get("/auth/:email", async (req, res) => {
//   res.send("get user by email");

// const email = req.params.email;
// const requestedUser = await getUserByEmail(email);

// res.json({
//   message: `found user with email ${email}`,
//   success: true,
//   payload: requestedUser,
// });
// });

/* CREATE new user */
usersRouter.post("/", upload.single("avatar"), async (req, res) => {
	console.log(req.path);
});
// 	try {
// 		const result = await cloudinary.uploader.upload(req.file.path);
// 		//unique id for each image uploaded
// 		const cloudinary_id = result.public_id;
// 		// res.send("create new user");

// 		//user profile image as secure URL store in db
// 		const avatar = result.secure_url;

// 		// res.send("create new user");
// 		const { first_name, last_name, email, address, is_active, user_bio } =
// 			req.body;

// 		const newUser = await createUser(
// 			first_name,
// 			last_name,
// 			email,
// 			address,
// 			is_active,
// 			cloudinary_id,
// 			avatar,
// 			user_bio
// 		);
// 		res.json({
// 			message: `user created successfully`,
// 			success: true,
// 			payload: newUser,
// 		});
// 	} catch (error) {
// 		console.log(error);
// 	}
// });

/* DELETE specific user */
usersRouter.delete("/:id", async (req, res) => {
	// res.send("user deleted");
	//get the user whose image we want to delete from cloudinary
	const user = await getUserById(id);
	await cloudinary.uploader.destroy(user.cloudinary_id);

	const id = Number(req.params.id);
	const deletedUser = await deleteUser(id);

	res.json({
		message: `user successfully deleted`,
		success: true,
		payload: deletedUser,
	});
});

/* UPDATE specific user */
usersRouter.put("/:id", async (req, res) => {
	// res.send("user details updated successfully");

	const id = Number(req.params.id);
	const {
		first_name,
		last_name,
		email,
		address,
		is_active,
		cloudinary_id,
		user_bio,
	} = req.body;

	const updatedUser = await updateUser(
		id,
		first_name,
		last_name,
		email,
		address,
		is_active,
		cloudinary_id,
		user_bio
	);

	res.json({
		message: `user details updated successfully`,
		success: true,
		payload: updatedUser,
	});
});

usersRouter.patch("/:id", async (req, res) => {
	//   res.send("item reserve status updated successfully");

	const id = Number(req.params.id);
	const { is_active } = req.body;

	const userActiveStatus = await updateIsActiveStatus(id, is_active);

	res.json({
		message: `user active status updated successfully`,
		success: true,
		payload: userActiveStatus,
	});
});

// =-=-=-=-=-=-=-=-=-=-=

// usersRouter.get("/listings", async (req, res) => {
//   //   res.send("item reserve status updated successfully");

//   const getAllListings = await getListings();

//   res.json({
//     message: `all users and items fetched successfully`,
//     success: true,
//     payload: getAllListings,
//   });
// });

export default usersRouter;
