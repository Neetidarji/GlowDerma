import express from "express";
import { listProducts, getProductById } from "../controller/productHandler.js";
import { logProductRequest, validateProductId } from "../middleware/productLogger.js";

const router = express.Router();

router.use(logProductRequest);

router.get("/", listProducts);

router.get("/:pid", validateProductId, getProductById);

export default router;
