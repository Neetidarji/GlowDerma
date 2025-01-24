import express from "express";
import { validateCartItem, checkItemExists } from "../middleware/cartMiddleware.js";  // Adjusted to new middleware
import { getCartItems, addCartItem, removeCartItem } from "../controller/cartController.js";  // Adjusted to new controller

const router = express.Router();
router.use(express.json()); 

router.get("/", getCartItems);

// Add an item to the cart
router.post("/", validateCartItem, addCartItem);

// Remove an item from the cart
router.delete("/:id", checkItemExists, removeCartItem);

export default router;
