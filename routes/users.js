import express from "express";
// import { getAllUsers } from "../models/users.js";

const router = express.Router();

// /users -> get all users
// /users/:id -> get specific user

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

/* GET specific user */
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





export default router;
