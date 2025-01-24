const items = [
    { id: 1, name: "Moisturizer" },
    { id: 2, name: "Serum" },
    { id: 3, name: "Toner" },
    { id: 4, name: "Face Masks" },
    { id: 5, name: "Cleanser" },
];

export const listProducts = (req, res) => {
    res.status(200).send("Explore different products here.");
};

export const getProductById = (req, res) => {
    const pid = parseInt(req.params.pid);
    const product = items.find((x) => x.id === pid);

    if (product) {
        res.status(200).send(`You have requested the product: ${product.name}`);
    } else {
        res.status(404).send("Product not found");
    }
};
