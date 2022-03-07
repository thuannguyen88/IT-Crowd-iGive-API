import request from "supertest";
import app from "../app.js";
import { jest } from "@jest/globals";
import { pool } from "../db/connection.js";
import {
  testUsers,
  testItems,
  userOne,
  userTwo,
  userThree,
} from "../libs/testData.js";
import { uploader } from "../config.js";

//ARRANGE, ACT, ASSERT

// set up expected payload
const expected = [
  {
    id: 1,
    first_name: "Dmitriy",
    last_name: "Yegorov",
    email: "yegorovd14@gmail.com",
    address: "SW",
    is_active: true,
    cloudinary_id: "xnefc68tvb0wu94ewyls",
    avatar:
      "https://res.cloudinary.com/dzektczea/image/upload/v1646091225/xnefc68tvb0wu94ewyls.jpg",
    user_bio: "",
  },
  {
    id: 2,
    first_name: "Rory",
    last_name: "Maguire",
    email: "rorymaguire00@gmail.com",
    address: "B15 3",
    is_active: true,
    cloudinary_id: "x4ew1w1opn7nknxqvbt8",
    avatar:
      "https://res.cloudinary.com/dzektczea/image/upload/v1646158131/x4ew1w1opn7nknxqvbt8.jpg",
    user_bio: "hello i am a young boy",
  },
  {
    id: 3,
    first_name: "Jordan",
    last_name: "Linton",
    email: "jordan@schoolofcode.co.uk",
    address: "School of Code HQ",
    is_active: true,
    cloudinary_id: "wwqafj5ysxqyfhw8j3n1",
    avatar:
      "https://res.cloudinary.com/dzektczea/image/upload/v1646162115/wwqafj5ysxqyfhw8j3n1.png",
    user_bio:
      "Awesome coach at the school of code fffsafjkadsf ljkdasfh sadf sa",
  },
];

// GET to /api/users
describe("GET /api/users", function () {
  // mock pool.query
  const mockPoolQuery = jest.spyOn(pool, "query");

  beforeEach(() => {
    mockPoolQuery.mockClear();
  });

  test("it should give us back 200 SUCCESS", async function () {
    // specify return so doesnt speak to database
    mockPoolQuery.mockResolvedValueOnce({
      rows: testUsers,
    });

    const actual = await request(app)
      .get("/api/users")
      .expect("Content-Type", /json/)
      .expect(200);
  });

  test("it should give us all users from database", async function () {
    // specify return so doesnt speak to database
    mockPoolQuery.mockResolvedValueOnce({
      rows: testUsers,
    });

    const actual = await request(app).get("/api/users");

    expect(actual.body.payload).toEqual(expected);
  });

  test("it should give us response object containing properties (message, success and payload)", async function () {
    // specify return so doesnt speak to database
    mockPoolQuery.mockResolvedValueOnce({
      rows: testUsers,
    });

    const expectedResponse = {
      message: "all users",
      success: true,
      payload: testUsers,
    };

    const actual = await request(app).get("/api/users");

    expect(actual.body).toEqual(expectedResponse);
  });
});

// GET to /api/users/:id
describe("Get /api/users/:id", function () {
  // mock pool.query
  const mockPoolQuery = jest.spyOn(pool, "query");

  beforeEach(() => {
    mockPoolQuery.mockClear();
  });

  const id = [1, 2, 3];

  test(`it should give us back 200 SUCCESS`, async function () {
    // specify return so doesnt speak to database
    mockPoolQuery.mockResolvedValue({
      rows: testUsers,
    });

    const actual = await request(app)
      .get(`/api/users/1`)
      .expect("Content-Type", /json/)
      .expect(200);
  });

  for (let i = 0; i < id.length; i++) {
    test(`params id ${id[i]} should give us user with id ${id[i]}`, async function () {
      // specify return so doesnt speak to database
      mockPoolQuery.mockClear();

      mockPoolQuery.mockResolvedValue({
        rows: testUsers[i],
      });

      const actual = await request(app).get(`/api/users/${id[i]}`);
      expect(actual.body.payload).toEqual(expected[i]);
      // console.log("testusers[i]", testUsers[i], actual.body.payload);
    });
  }
});
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
