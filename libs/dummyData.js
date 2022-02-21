export const users = [
  {
    first_name: "Jane",
    last_name: "Wilkins",
    email: "jane.wilkins@gmail.com",
    address: "Main Street, LA22 9BU, Ambleside, United Kingdom",
    is_active: false,
    cloudinary_id: "",
    user_bio: "hello I'm Jane, i like food",
  },
  {
    first_name: "Dennis",
    last_name: "Thompson",
    email: "dennis.thompson@gmail.com",
    address: "Newlands Meadow, HP11 2BZ, High Wycombe, United Kingdom",
    is_active: true,
    cloudinary_id: "",
    user_bio: "hello I'm Dennis, i like drink",
  },
];

export const items = [
  {
    user_id: 1,
    category: "fruit",
    item_name: "apple",
    item_description: "I have 5 red apples to give",
    use_by_date: "2022-02-22",
    date_added: "2022-02-18",
    quantity: 5,
    cloudinary_id: "",
    is_reserved: false,
    availablity: true,
    time_slot: "between 5pm-7pm",
  },
  {
    user_id: 1,
    category: "vegetable",
    item_name: "carrot",
    item_description: "I have 10kg of carrots to give",
    use_by_date: "2022-02-22",
    date_added: "2022-02-18",
    quantity: 1,
    cloudinary_id: "",
    is_reserved: true,
    availability: false,
    time_slot: "12:00pm-2:00pm",
  },
];
