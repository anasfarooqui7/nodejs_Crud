const express = require("express");
const bodyParser = require("body-parser");
const itemRoutes = require("./routes/itemRoutes");
const path = require("path");

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// Use Routes
app.use("/", itemRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
