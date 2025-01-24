import express from "express";
import mainRouter from "./routes/mainRouter.js";
import productRouter from "./routes/productRouter.js";
import cartRouter from "./routes/cartRouter.js";

const app = express();
let PORT = 5002;

app.use("/", mainRouter);
app.use("/products", productRouter);
app.use("/products/:pid", productRouter);
app.use("/cart", cartRouter);





app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
