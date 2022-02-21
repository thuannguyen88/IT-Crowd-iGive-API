import express from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  updateIsActiveStatus,
} from "../models/users.js";

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
usersRouter.post("/", async (req, res) => {
  // res.send("create new user");
  const {
    firstName,
    lastName,
    email,
    address,
    isActive,
    cloudinary_id,
    userBio,
  } = req.body;

  const newUser = await createUser(
    firstName,
    lastName,
    email,
    address,
    isActive,
    cloudinary_id,
    userBio
  );

  res.json({
    message: `user created successfully`,
    success: true,
    payload: newUser,
  });
});

/* DELETE specific user */
usersRouter.delete("/:id", async (req, res) => {
  // res.send("user deleted");

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

  const paramsId = Number(req.params.id);
  const {
    id,
    firstName,
    lastName,
    email,
    address,
    isActive,
    cloudinary_id,
    userBio,
  } = req.body;

  const updatedUser = await updateUser(
    paramsId,
    id,
    firstName,
    lastName,
    email,
    address,
    isActive,
    cloudinary_id,
    userBio
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
  const { isActive } = req.body;

  const userActiveStatus = await updateIsActiveStatus(id, isActive);

  res.json({
    message: `user active status updated successfully`,
    success: true,
    payload: userActiveStatus,
  });
});

export default usersRouter;
