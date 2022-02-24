const app = express();
import express from "express";
import path from "path";
import __dirname from "./dirname.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import logger from "morgan";

import usersRouter from "./routes/users.js";
import itemsRouter from "./routes/items.js";
import listingsRouter from "./routes/listings.js";

app.use(cors());
app.use("/api/users", usersRouter);
app.use("/api/items", itemsRouter);
app.use("/api/listings", listingsRouter);

app.use(logger("dev"));

//below is the limit on file size (body-Parser) for files sent from client to server
app.use(
	express.json({
		limit: "20mb",
	})
);

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res, next) => {
	res.render("iGive api homepage");
});

app.use(function (req, res, next) {
	res
		.status(404)
		.json({ message: "We couldn't find what you were looking for 😞" });
});

app.use(function (err, req, res, next) {
	console.error(err.stack);
	res.status(500).json(err);
});

export default app;

// app.use(express.urlencoded({ limit: "50mb" }));
// app.use(express.urlencoded({ extended: false }));
//file uploader
