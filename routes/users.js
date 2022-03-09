import express from "express";

//import cloudinary.uploader from cloudinary import and config
import { uploader } from "../config.js";

//import models
import {

  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  updateIsActiveStatus,
  deleteAllItemsOfParticularUser



} from "../models/users.js";

//create instance of usersRouter
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
  // console.log(users);

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

usersRouter.post("/", async (req, res) => {

	//extract the data from the register user form on client , sent via req.body
	const { full_name, email, address, image, is_active, user_bio } = req.body;

	//some variables are unavailable unless scoped outside the try block
	let result;

	try {
		//cloudinary uploader passed image which is a base 64 encoded image
		image ? (result = await uploader.upload(image)) : null;
	} catch (error) {
		//if this fails, let the client know
		console.log("upload failed", error);
		//bad practice to return like this but ok for development
		return;
	}
	//cloudinary returned us an object which we saved as const result
	//we store the image url property as avatar
	//we store the public_id of that image as unique cloudinary_id
	const avatar = result?.secure_url;
	const cloudinary_id = result?.public_id;
	console.log("avatar:", avatar);
	console.log("cloudinary_id:", cloudinary_id);

	//insert these values into the users table
	let newUser;
	try {
		newUser = await createUser(
			full_name,
			email,
			address,
			is_active,
			cloudinary_id,
			avatar,
			user_bio
		);
	} catch (error) {
		console.log("create newUser failed", error);
		return;
	}

	res.json({
		message: `user created successfully`,
		success: true,
		payload: newUser,
	});

});

/* DELETE specific user */
usersRouter.delete("/:id", async (req, res) => {


    const id = Number(req.params.id);
    //also delete cloudinary id of the user we want to delete

    const deletedItems = await deleteAllItemsOfParticularUser(id);
    console.log(deletedItems);
    
    deletedItems?.map(async item => 
                    await uploader.destroy( item.cloudinary_id, ( error, result ) =>
                      console.log( result )));
    try {
        const user = await getUserById(id);
        user[0].cloudinary_id
            ? await uploader.destroy(user[0].cloudinary_id, (error, result) =>
                    console.log(result)
              )
            : null;
    } catch (error) {
        console.log("unable to delete cloudinary id", error);
    }
    const deletedUser = await deleteUser(id);
    res.json({
        message: `user successfully deleted`,
        success: true,
        payload: deletedUser,
    });


});

/* UPDATE specific user */
usersRouter.put("/:id", async (req, res) => {
  const id = Number(req.params.id);
  //extract the data from the register user form on client , sent via req.body
  const { full_name, email, address, image, is_active, user_bio } = req.body;

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
  const avatar = result.secure_url;
  const cloudinary_id = result.public_id;
  // console.log("avatar:", avatar);
  // console.log("cloudinary_id:", cloudinary_id);

  const updatedUser = await updateUser(
    id,
    full_name,
    email,
    address,
    is_active,
    cloudinary_id,
    avatar,
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
