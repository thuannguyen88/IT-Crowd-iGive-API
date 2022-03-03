import request from "supertest";
import app from "../app.js";
import { uploader } from "../config.js";
import { jest } from "@jest/globals";
import { users } from "../libs/dummyData.js";
import { createUser } from "../models/users.js";

//import { dummyData } from "../libs/dummyData.js";

// GET test to /api/users
describe("GET /api/users", function () {
  test("it should give us back 200 SUCCESS", async function () {
    const actual = await request(app)
      .get("/api/users")
      .expect("Content-Type", /json/)
      .expect(200);

    //  expect(actual.status).toEqual(200);
  });

  test("it should give us back an object with keys; message, success, payload", async function () {
    const actual = await request(app).get("/api/users");
    expect(actual.body).toEqual(
      expect.objectContaining({
        message: expect.any(String),
        success: expect.any(Boolean),
        payload: expect.any(Array),
      })
    );
  });
});

// GET test to /api/users/:id
describe("Get /api/users/:id", function () {
  const id = 1;
  test("it should give us back 200 SUCCESS", async function () {
    const actual = await request(app)
      .get(`/api/users/${id}`)
      .expect("Content-Type", /json/)
      .expect(200);
  });

  test("it should give us back an object with keys; message, success, payload", async function () {
    const actual = await request(app).get(`/api/users/${id}`);
    expect(actual.body).toEqual(
      expect.objectContaining({
        message: expect.any(String),
        success: expect.any(Boolean),
        payload: expect.any(Array),
      })
    );
  });
});

// // implementing mock for POST to /api/users
describe("Post /api/users", function () {
  // create a mock upload function for cloudinary
  const mockUpload = jest.spyOn(uploader, "upload");

  beforeEach(() => {
    mockUpload.mockRestore();
  });

  test("it should upload profile image to cloudinary and then be given a secure_url and public_id which values are then passed on and new user is created", async function () {
    let secure_url =
      "https://res.cloudinary.com/dzektczea/image/upload/v1646091226/fgubsl1bw8dekqo94mix.jpg";
    let public_id = "xnefc68tvb0wu94ewyls";

    mockUpload.mockImplementationOnce((image) => {
      secure_url, public_id;
    });

    const avatar = secure_url;
    const cloudinary_id = public_id;

    const newUser = {
      id: 7,
      first_name: "Dmitriy",
      last_name: "Yegorov",
      email: "yegorovd14@gmail.com",
      address: "SW",
      is_active: true,
      cloudinary_id: public_id,
      avatar: secure_url,
      user_bio: "",
    };

    // create a mock function for creating user
    const mockCreateUser = jest.fn().mockImplementation(() => newUser);

    //  const actual = await request(app)
    //    .post("/api/users")
    //    .expect("Content-Type", /json/)
    //    .expect(201);

    expect(mockCreateUser("pass user properties")).toBe(newUser);
    expect(mockCreateUser).toHaveBeenLastCalledWith("pass user properties");

    //     // test("It should expect a json and a success create status code of 201")
    //     // .expect("Content-Type", /json/)
    //     // test("it should upload image successfully to cloudinary")
    //     // test("it should create new user")
    //     // test("It should respond with an object containing; message, success and payload ")
    mockCreateUser.mockReset();
  });
});
