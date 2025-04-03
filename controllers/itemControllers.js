const Item = require("../models/itemModel");

// Create Item
exports.createItem = async (req, res) => {
    try {
        const { name, description } = req.body;
        await Item.create({ name, description });
        res.redirect("/");
    } catch (error) {
        console.error("Error creating item:", error);
        res.status(500).send("Error saving item");
    }
};

// Read All Items
exports.getAllItems = async (req, res) => {
    try {
        const items = await Item.findAll();
        res.render("index", { items });
    } catch (error) {
        console.error("Error fetching items:", error);
        res.status(500).send("Error fetching data");
    }
};

// Update Item
exports.updateItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description } = req.body;
        await Item.update({ name, description }, { where: { id } });
        res.redirect("/");
    } catch (error) {
        console.error("Error updating item:", error);
        res.status(500).send("Error updating item");
    }
};

// Delete Item
exports.deleteItem = async (req, res) => {
    try {
        const { id } = req.params;
        await Item.destroy({ where: { id } });
        res.redirect("/");
    } catch (error) {
        console.error("Error deleting item:", error);
        res.status(500).send("Error deleting item");
    }
};
