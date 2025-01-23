import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to GlowDerma - Your Skincare Journey Begins Here.");
})

app.get("/About", (req, res) => {
  res.send("<h3>We are a premium skincare brand committed to bringing you dermatologist-approved, clean beauty products</h3>");
});

app.get("/Contact", (req, res) => {
  res.json({
    "email": "care@glowderma.com",
    "instagram": "http://instagram.com/glowderma",
    "consultation": "http://glowderma.com/book-appointment"
  })
})

let orders = [
  { id: 1, product: 'Anti-Aging Serum', quantity: 2 },
  { id: 2, product: 'Vitamin C Moisturizer', quantity: 1 },
  { id: 3, product: 'Hyaluronic Acid', quantity: 3 }
];

app.get("/orders/:orderID", (req, res) => {
  const orderID = parseInt(req.params.orderID);
  const order = orders.find(o => o.id === orderID);

  if (order) {
    return res.status(200).json(order);
  } else {
    return res.status(404).send("Order Not Found");
  }
});

let products = [
  { id: 11, name: "Retinol Serum", price: 1200, availableQty: 50 },
  { id: 12, name: "Niacinamide Solution", price: 800, availableQty: 30 },
  { id: 14, name: "Peptide Moisturizer", price: 1500, availableQty: 100 },
  { id: 15, name: "Glycolic Acid Toner", price: 900, availableQty: 20 }
];

app.get("/products", (req, res) => {
  const { name, maxPrice } = req.query;

  let filteredProducts = products;

  if (name) {
    filteredProducts = filteredProducts.filter(product => 
      product.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  if (maxPrice) {
    filteredProducts = filteredProducts.filter(product => 
      product.price <= parseInt(maxPrice)
    );
  }

  return res.json(filteredProducts);
});

let shoppingCart = [];

app.get("/cart", (req, res) => {
  res.json(shoppingCart);
});

app.post("/cart", (req, res) => {
  const { id, name, price, qty } = req.body;

  if (!id || !name || !price || !qty) {
    return res.status(400).json({ error: "All fields are required." });
  }

  let d = { id, name, price, qty }

  shoppingCart.push(d);
  
  res.status(201).json({"message":"Successfully added to cart", "data":d});
});

app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
