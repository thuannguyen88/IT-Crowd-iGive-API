// //multer import and config
// import multer from "multer";

// import Datauri from "datauri";

// import path from "path";

// const storage = multer.memoryStorage();
// const uploadAvatar = multer({ storage }).single("avatar");
// const uploadItemImage = multer({ storage }).single("item_image");

// const dUri = new Datauri();

// const dataUri = async (req) =>
// 	await dUri.format(path.extname(req.file).toString(), req.file.buffer);

// export { uploadAvatar, uploadItemImage, dataUri };
