// cartController.js

let shoppingCart = [];

// Get all items in the shopping cart
export const getCartItems = (req, res) => {
    res.status(200).json({ shoppingCart });
};

// Add an item to the shopping cart
export const addCartItem = (req, res) => {
    const { id, name, price, qty } = req.body;

    // Check if the item already exists in the cart
    const existingItem = shoppingCart.find(item => item.id === id);
    if (existingItem) {
        existingItem.qty += qty;  // Increase the quantity if item exists
        return res.status(200).json({ message: "Updated item quantity", item: existingItem });
    }

    // Otherwise, add a new item to the cart
    shoppingCart.push({ id, name, price, qty });
    res.status(201).json({ message: "Item added to cart", item: { id, name, price, qty } });
};

// Remove an item from the shopping cart
export const removeCartItem = (req, res) => {
    const { id } = req.params;

    // Find and remove item from the cart
    const itemIndex = shoppingCart.findIndex(item => item.id === parseInt(id));
    if (itemIndex !== -1) {
        shoppingCart.splice(itemIndex, 1);
        return res.status(200).json({ message: `Item with id ${id} removed from cart` });
    }
    
    res.status(404).json({ error: "Item not found" });
};
