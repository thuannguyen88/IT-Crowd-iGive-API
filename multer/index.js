//multer import and config
import multer from "multer";

const storage = multer.memoryStorage();
export const uploadAvatar = multer({ storage }).single("avatar");
export const uploadItemImage = multer({ storage }).single("item_image");
