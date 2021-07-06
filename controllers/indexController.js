exports.getIndexPage = (req, res, next) => {
    res.render("index.ejs", { path: "/", pageTitle: "Home" });
};