const express = require("express");

const app = express();
const PORT = 3000;
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
const posts = [
    {
        title: "Post Title",
        name: "Author",
        date: new Date(),
        category: "Technology",
        content: "Content..."
    }
];
app.get("/", (req, res) => {
    res.render("index", { posts });
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
