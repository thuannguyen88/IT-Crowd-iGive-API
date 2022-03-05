export const testUsers = [
  {
    id: 1,
    full_name: "Dmitriy Yegorov",
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
    full_name: "Rory Maguire",
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
    full_name: "Jordan Linton",
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

export const expectedUsers = [
  {
    id: 1,
    full_name: "Dmitriy Yegorov",
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
    full_name: "Rory Maguire",
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
    full_name: "Jordan Linton",
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

export const testItems = [
  {
    item_id: 10,
    user_id: 1,
    category: "snack",
    item_name: "crisps",
    item_description: "bag of sea salted proper crisps",
    use_by_date: "10/03/23",
    date_added: "03/03/22",
    quantity: "1 500g bag",
    cloudinary_id: "z4lanh8vcjayitiwutnj",
    item_image:
      "https://res.cloudinary.com/dzektczea/image/upload/v1646303706/z4lanh8vcjayitiwutnj.jpg",
    is_reserved: true,
    availability: false,
    time_slot: "today 5pm-7pm",
  },
  {
    item_id: 11,
    user_id: 2,
    category: "Tinned Food",
    item_name: "Various tins of food",
    item_description:
      "Hey there, I have loads of tins of food In my cupboard and I don't know how I'm going to use them all - is there anyone who wants to take these off me, food banks? neighbours? wouldn't want them to go to waste.. Thanks!",
    use_by_date: "17/05/22",
    date_added: "03/03/22",
    quantity: "fifty tins",
    cloudinary_id: "lxhjxwvhyt3a35atfktm",
    item_image:
      "https://res.cloudinary.com/dzektczea/image/upload/v1646310642/lxhjxwvhyt3a35atfktm.png",
    is_reserved: true,
    availability: false,
    time_slot: "I am available weekdays between 5-8pm ",
  },
  {
    item_id: 12,
    user_id: 2,
    category: "other",
    item_name: "other",
    item_description: "not sure how to describe this",
    use_by_date: "20/06/89",
    date_added: "05/03/22",
    quantity: "3 kg",
    cloudinary_id: "p6akezb9aclscgl8gk7x",
    item_image:
      "https://res.cloudinary.com/dzektczea/image/upload/v1646317392/p6akezb9aclscgl8gk7x.png",
    is_reserved: true,
    availability: false,
    time_slot: "anytime",
  },
];

export const newUser = [
  {
    id: 4,
    full_name: "Thuan Nguyen",
    email: "thuan.nguyen@gmail.com",
    address: "NW",
    is_active: true,
    cloudinary_id: "xnefc68tvb0wu94ewyls",
    avatar:
      "https://res.cloudinary.com/dzektczea/image/upload/v1646091225/xnefc68tvb0wu94ewyls.jpg",
    user_bio: "I like coffee",
  },
];

export const newUserRequestBody = {
  full_name: "Thuan Nguyen",
  email: "thuan.nguyen@gmail.com",
  address: "NW",
  image: "",
  is_active: true,
  user_bio: "I like coffee",
};

export const expectedNewUser = {
  id: 4,
  full_name: "Thuan Nguyen",
  email: "thuan.nguyen@gmail.com",
  address: "NW",
  is_active: true,
  cloudinary_id: "xnefc68tvb0wu94ewyls",
  avatar:
    "https://res.cloudinary.com/dzektczea/image/upload/v1646091225/xnefc68tvb0wu94ewyls.jpg",
  user_bio: "I like coffee",
};
