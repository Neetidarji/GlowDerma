import express from "express";
import { homePage, aboutPage, contactPage } from "../controller/mainController.js";
import { logger } from "../middleware/logger.js";

const router = express.Router();

router.use(logger);

router.get("/", homePage);
router.get("/about", aboutPage);
router.get("/contact", contactPage);

export default router;
