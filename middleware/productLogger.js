
export const logProductRequest = (req, res, next) => {
    console.log(`Request made to: ${req.method} ${req.originalUrl}`);
    next();
};

export const validateProductId = (req, res, next) => {
    const pid = parseInt(req.params.pid);

    if (pid > 0) {
        next();
    } else {
        res.status(400).send("Invalid product ID");
    }
};
