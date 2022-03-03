import request from "supertest";
import app from "../app.js";
import { uploader } from "../config.js";
import { jest } from "@jest/globals";
import { pool } from "../db/connection.js";
import { createUser } from "../models/users.js";

// GET test to /api/users
describe("GET /api/users", function () {
  // mock pool.query
  const mockPoolQuery = jest.spyOn(pool, "query");

  beforeEach(() => {
    mockPoolQuery.mockClear();
  });

  test("it should give us back 200 SUCCESS", async function () {
    // specify return so doesnt speak to database
    const data = mockPoolQuery.mockResolvedValueOnce({
      rows: [
        {
          id: 25,
          first_name: "Jane",
          last_name: "Wilkins",
          email: "jane.wilkins@gmail.com",
          address: "Main Street, LA22 9BU, Ambleside, United Kingdom",
          is_active: false,
          cloudinary_id: "",
          avatar:
            "https://cdn.vox-cdn.com/thumbor/00awoM5IS2kFITs9546UyMSePBY=/0x0:2370x1574/1200x800/filters:focal(996x598:1374x976)/cdn.vox-cdn.com/uploads/chorus_image/image/69715362/Screen_Shot_2020_07_21_at_9.38.25_AM.0.png",
          user_bio: "hello I'm Jane, i like food",
        },
      ],
    });

    const actual = await request(app)
      .get("/api/users")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(actual.body.payload).toEqual([
      {
        id: 25,
        first_name: "Jane",
        last_name: "Wilkins",
        email: "jane.wilkins@gmail.com",
        address: "Main Street, LA22 9BU, Ambleside, United Kingdom",
        is_active: false,
        cloudinary_id: "",
        avatar:
          "https://cdn.vox-cdn.com/thumbor/00awoM5IS2kFITs9546UyMSePBY=/0x0:2370x1574/1200x800/filters:focal(996x598:1374x976)/cdn.vox-cdn.com/uploads/chorus_image/image/69715362/Screen_Shot_2020_07_21_at_9.38.25_AM.0.png",
        user_bio: "hello I'm Jane, i like food",
      },
    ]);
  });

  //   test("it should give us back an object with keys; message, success, payload", async function () {
  //     const actual = await request(app).get("/api/users");
  //     expect(actual.body).toEqual(
  //       expect.objectContaining({
  //         message: expect.any(String),
  //         success: expect.any(Boolean),
  //         payload: expect.any(Array),
  //       })
  //     );
  //   });
});

// // GET test to /api/users/:id
// describe("Get /api/users/:id", function () {
//   const id = 1;
//   test("it should give us back 200 SUCCESS", async function () {
//     const actual = await request(app)
//       .get(`/api/users/${id}`)
//       .expect("Content-Type", /json/)
//       .expect(200);
//   });

//   test("it should give us back an object with keys; message, success, payload", async function () {
//     const actual = await request(app).get(`/api/users/${id}`);
//     expect(actual.body).toEqual(
//       expect.objectContaining({
//         message: expect.any(String),
//         success: expect.any(Boolean),
//         payload: expect.any(Array),
//       })
//     );
//   });
// });

// // // implementing mock for POST to /api/users
// describe("Post /api/users", function () {
//   // create a mock upload function for cloudinary
//   const mockUpload = jest.spyOn(uploader, "upload");

//   beforeEach(() => {
//     mockUpload.mockRestore();
//   });

//   test("it should upload profile image to cloudinary and then be given a secure_url and public_id which values are then passed on and new user is created", async function () {
//     let secure_url =
//       "https://res.cloudinary.com/dzektczea/image/upload/v1646091226/fgubsl1bw8dekqo94mix.jpg";
//     let public_id = "xnefc68tvb0wu94ewyls";

//     mockUpload.mockResolvedValueOnce({
//       secure_url,
//       public_id,
//     });

//     const avatar = secure_url;
//     const cloudinary_id = public_id;

//     const newUser = {
//       id: 7,
//       first_name: "Dmitriy",
//       last_name: "Yegorov",
//       email: "yegorovd14@gmail.com",
//       address: "SW",
//       is_active: true,
//       cloudinary_id: public_id,
//       avatar: secure_url,
//       user_bio: "",
//     };

//     // create a mock function for creating user
//     const mockCreateUser = jest.fn().mockImplementation(() => newUser);

//     //  const actual = await request(app)
//     //    .post("/api/users")
//     //    .expect("Content-Type", /json/)
//     //    .expect(201);

//     expect(mockCreateUser("pass user properties")).toBe(newUser);
//     expect(mockCreateUser).toHaveBeenLastCalledWith("pass user properties");

//     //     // test("It should expect a json and a success create status code of 201")
//     //     // .expect("Content-Type", /json/)
//     //     // test("it should upload image successfully to cloudinary")
//     //     // test("it should create new user")
//     //     // test("It should respond with an object containing; message, success and payload ")
//     mockCreateUser.mockReset();
//   });
// });
