export const homePage = (req, res) => {
    res.send("<h1>Welcome to Glowgenic</h1>");
};

export const aboutPage = (req, res) => {
    res.send("<h1>We sell the best quality skincare products.</h1>");
};

export const contactPage = (req, res) => {
    res.send("Contact us at glowgenic@gmail.com.");
};
