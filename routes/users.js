import express from "express";
// import { getAllUsers } from "../models/users.js";

const router = express.Router();

// GET request to /users -> get all users
// GET request /users/:id -> get specific user
// POST request /users -> create new user
// PUT request /users/:id -> update user
// DELETE request /users/:id -> delete user

/* GET all users */
router.get("/", async (req, res) => {
  res.send("get all users");
  // const users = await getAllUsers();

  // res.json({
  //   message: `all users`,
  //   success: true,
  //   payload: users,
  // });
});

/* GET specific user by ID */
router.get("/:id", async (req, res) => {
  res.send("get user by id");
  // const id = Number(req.params.id);
  // const requestedUser = await getUserById(id);

  // res.json({
  //   message: `found user with id ${id}`,
  //   success: true,
  //   payload: requestedUser,
  // });
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
router.post("/", async (req, res) => {
  res.send("create new user");
  // const {
  //   firstName,
  //   lastName,
  //   email,
  //   address,
  //   isActive,
  //   cloudinary_id,
  //   userBio,
  // } = req.body;

  // const newUser = await createUser(
  //   firstName,
  //   lastName,
  //   email,
  //   address,
  //   isActive,
  //   cloudinary_id,
  //   userBio
  // );

  // res.json({
  //   message: `user created successfully`,
  //   success: true,
  //   payload: newUser,
  // });
});

/* DELETE specific user */
router.delete("/:id", async (req, res) => {
  res.send("user deleted");
  // const id = Number(req.params.id);
  // const deletedUser = await deleteUser(id);

  // res.json({
  //   message: `user successfully deleted`,
  //   success: true,
  //   payload: deletedUser,
  // });
});

/* UPDATE specific user */
router.put("/:id", async (req, res) => {
  res.send("user details updated successfully");
  // const paramsId = Number(req.params.id);
  // const {
  //   id,
  //   firstName,
  //   lastName,
  //   email,
  //   address,
  //   isActive,
  //   cloudinary_id,
  //   userBio,
  // } = req.body;

  // const updatedUser = await updateUser(
  //   paramsId,
  //   id,
  //   firstName,
  //   lastName,
  //   email,
  //   address,
  //   isActive,
  //   cloudinary_id,
  //   userBio
  // );

  // res.json({
  //   message: `user details updated successfully`,
  //   success: true,
  //   payload: updatedUser,
  // });
});

export default router;
