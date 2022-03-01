import request from "supertest";
import app from "../app.js";
import { jest } from "@jestGlobals";

//import { dummyData } from "../libs/dummyData.js";

//get all users

// describe("GET /api/users should show all users", function () {
//    test("gives us back 200 OK success status code", async function () {
//       const actual = await request(app).get("/api/users");

//       expect(actual.status).toEqual(200);
//    });

//    test("gives us back an object", async function () {
//       const actual = await request(app).get("/api/users");

//       expect(actual.body).toBeInstanceOf(Object);
//    });
// });
describe("GET /api/users should show all users", function () {
   test("gives us back all users", () => {
      const spy = jest.spyOn(users, "get all users");
      const getUsers = users.getAll();

      expect(spy).toHaveBeenCalled();
      expect(getUsers).toBe(true);

      spy.mockRestore();
   });
});

//get a user by id

// describe("Get /api/users/:id", function () {
//    let id = 1;
//    test("gives us back success res 200", async function () {
//       const actual = await request(app).get(`/api/users/${id}/`);

//       expect(actual.status).toEqual(200);
//    });
// });

// //create user

// describe("Post /api/users", function () {
//    test("gives us back success res 200", async function () {
//       const actual = await request(app).post("/api/users");

//       expect(actual.status).toEqual(200);
//    });
// });

// // edit a user

// describe("Patch /api/users", function () {
//    test("gives us back success res 200", async function () {
//       const actual = await request(app).post("/api/users");

//       expect(actual.status).toEqual(200);
//    });
// });

// //delete a user
