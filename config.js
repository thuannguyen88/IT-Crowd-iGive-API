// this environment variable gets handed to us by heroku if we use the postgres add-on
export const db = {
  dbport: process.env.PORT,
  dbhost: process.env.HOST,
  username: process.env.USER,
  password: process.env.PASSWORD,
  dbname: process.env.DATABASE,
};
