// cartMiddleware.js

// Middleware to validate that the cart item has all required fields
export const validateCartItem = (req, res, next) => {
    const { id, name, price, qty } = req.body;

    // Check if all fields are provided
    if (!id || !name || !price || !qty) {
        return res.status(400).json({ error: "All fields (id, name, price, qty) are required" });
    }

    // Validate price (must be a positive number)
    if (typeof price !== 'number' || price <= 0) {
        return res.status(400).json({ error: "Price must be a positive number" });
    }

    // Validate quantity (must be an integer greater than 0)
    if (!Number.isInteger(qty) || qty <= 0) {
        return res.status(400).json({ error: "Quantity must be a positive integer" });
    }

    next();  // If validation passes, move on to the next handler (controller)
};

// Middleware to check if the cart item exists before removing
export const checkItemExists = (req, res, next) => {
    const { id } = req.params;

    // Check if the item exists in the shopping cart
    const item = shoppingCart.find(item => item.id === parseInt(id));
    if (!item) {
        return res.status(404).json({ error: "Item not found in the cart" });
    }

    next();
};
