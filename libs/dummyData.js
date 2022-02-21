export const users = [
  {
    firstName: "Jane",
    lastName: "Wilkins",
    email: "jane.wilkins@gmail.com",
    address: "Main Street, LA22 9BU, Ambleside, United Kingdom",
    isActive: false,
    cloudinary_id: "",
    userBio: "hello I'm Jane, i like food",
  },
  {
    firstName: "Dennis",
    lastName: "Thompson",
    email: "dennis.thompson@gmail.com",
    address: "Newlands Meadow, HP11 2BZ, High Wycombe, United Kingdom",
    isActive: true,
    cloudinary_id: "",
    userBio: "hello I'm Dennis, i like drink",
  },
];

export const items = [
  {
    userId: 1,
    category: "fruit",
    itemName: "apple",
    itemDescription: "i have 5 red apples to give",
    useByDate: "2022-02-22",
    dateAdded: "2022-02-18",
    quantity: 5,
    cloudinary_id: "",
    isReserved: false,
    availablity: true,
    timeslot: "between 5pm-7pm",
  },
  {
    userId: 1,
    category: "vegetable",
    itemName: "carrot",
    itemDescription: "i have 10kg of carrots to give",
    useByDate: "2022-02-22",
    dateAdded: "2022-02-18",
    quantity: 1,
    cloudinary_id: "",
    isReserved: true,
    availability: false,
    timeslot: "12:00pm-2:00pm",
  },
];
