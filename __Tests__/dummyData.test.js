import { users } from "../libs/dummyData.js";
import { jest } from "@jest/globals";

test(`the users data is correct`, () => {
  expect(users).toMatchSnapshot();
  expect(users).toHaveLength(2);
  expect(users.map((user) => user.first_name)).toEqual(["Jane", "Dennis"]);
});

for (let i = 0; i < users.length; i++) {
  test(`users[${i}] should have properties (first_name, last_name, email, address, is_active, cloudinary_id, avatar, user_bio)`, () => {
    expect(users[i]).toHaveProperty("first_name");
    expect(users[i]).toHaveProperty("last_name");
    expect(users[i]).toHaveProperty("email");
    expect(users[i]).toHaveProperty("address");
    expect(users[i]).toHaveProperty("is_active");
    expect(users[i]).toHaveProperty("cloudinary_id");
    expect(users[i]).toHaveProperty("avatar");
    expect(users[i]).toHaveProperty("user_bio");
    //  expect(users[i]).toHaveProperty("interesting") => test case for checking property that shouldn't be there, test failed as expected;
  });
}

test("user data has jane and matches as an object", () => {
  const jane = {
    first_name: "Jane",
    last_name: "Wilkins",
    email: "jane.wilkins@gmail.com",
    address: "Main Street, LA22 9BU, Ambleside, United Kingdom",
    is_active: false,
    cloudinary_id: "",
    avatar:
      "https://cdn.vox-cdn.com/thumbor/00awoM5IS2kFITs9546UyMSePBY=/0x0:2370x1574/1200x800/filters:focal(996x598:1374x976)/cdn.vox-cdn.com/uploads/chorus_image/image/69715362/Screen_Shot_2020_07_21_at_9.38.25_AM.0.png",
    user_bio: "hello I'm Jane, i like food",
  };
  expect(users[0]).toMatchObject(jane);
});
