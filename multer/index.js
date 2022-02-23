//multer import and config
import multer from "multer";

import Datauri from "datauri";

import path from "path";

const storage = multer.memoryStorage();
export const uploadAvatar = multer({ storage }).single("avatar");
export const uploadItemImage = multer({ storage }).single("item_image");

const dUri = new Datauri();

const dataUri = (req) =>
	dUri.format(path.extname(req.file.originalname).toString(), req.file.buffer);

export { uploadAvatar, uploadItemImage, dataUri };
