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
      import { uploader } from "../config.js";
      import { jest } from "@jest/globals";
      import fs from "fs";

      //get all users

      describe("GET /api/users", function () {
         test("it should give us back 200 SUCCESS", async function () {
            const actual = await request(app)
               .get("/api/users")
               .expect("Content-Type", /json/)
               .expect(200);

            //  expect(actual.status).toEqual(200);
         });

         test("it should give us back an object", async function () {
            const actual = await request(app).get("/api/users");

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
      describe("Get /api/users/:id", function () {
         let id = 1;
         test("it should give us back 200 SUCCESS", async function () {
            const actual = await request(app)
               .get(`/api/users/${id}`)
               .expect("Content-Type", /json/)
               .expect(200);

            //  expect(actual.status).toEqual(200);
         });
      });

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
      describe("Post /api/users", function () {
         test("it should give us back 201 CREATED", async function () {
            const mockUploader = jest.spyOn(uploader, "upload");
            const createUser = jest.fn();
            const image = fs.readFileSync("./avatar.jpeg").toString("base64");
            const isUploaded = await uploader.upload(image);

            createUser.mockReset();
            const actual = await request(app)
               .post("/api/users")
               .send({
                  first_name: "Graham",
                  last_name: "Delbeck",
                  email: "graham.delbeck@gmail.com",
                  address: "Main Street, LA22 9BU, Ambleside, United Kingdom",
                  image: `${image}`,
                  is_active: true,
                  // cloudinary_id: "",
                  // avatar:
                  //   "https://cdn.vox-cdn.com/thumbor/00awoM5IS2kFITs9546UyMSePBY=/0x0:2370x1574/1200x800/filters:focal(996x598:1374x976)/cdn.vox-cdn.com/uploads/chorus_image/image/69715362/Screen_Shot_2020_07_21_at_9.38.25_AM.0.png",
                  user_bio: "hello I'm another Graham",
               });
            expect(createUser.mock.calls.length).toBe(1);

            // .expect("Content-Type", /json/)
            // .expect(201);

            // test("it should upload image successfully to cloudinary")
            // test("it should create new user")

            //  expect(actual.status).toEqual(201);
         });
      });

      // .expect("Content-Type", /json/)
      // .expect(201);

      // test("it should upload image successfully to cloudinary")
      // test("it should create new user")

      //  expect(actual.status).toEqual(201);
      // });
      //});

      //       expect(actual.status).toEqual(200);
      //    });
      // });

      // //delete a user
      //delete a user

      //jest.fn()
      //jest.spyOn()
      //jest.mock()
   });
});
