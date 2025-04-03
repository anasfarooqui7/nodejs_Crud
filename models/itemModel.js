const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Item = sequelize.define("Item", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
});

// Sync Model with Database
sequelize.sync()
    .then(() => console.log("Item table created"))
    .catch(err => console.error("Error syncing table:", err));

module.exports = Item;
