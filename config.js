// this environment variable gets handed to us by heroku if we use the postgres add-on

// import("dotenv").config();

export const db = {
	port: process.env.PG_PORT,
	host: process.env.PG_HOST,
	user: process.env.PG_USER,
	password: process.env.PG_PASSWORD,
	database: process.env.PG_DATABASE,
};

export const connectionString = process.env.DATABASE_URL;

//cloudinary import and config

import * as Cloudinary from "cloudinary";

const { uploader } = Cloudinary.v2;

const cloudinaryConfig = (req, res, next) => {
	config({
		cloudinary_url: process.env.CLOUDINARY_URL,
		secure: true,
	});
	next();
};

export { uploader };

console.log(cloudinaryConfig);
