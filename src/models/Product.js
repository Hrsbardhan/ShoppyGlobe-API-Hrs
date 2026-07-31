const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true,
        trim: true
    },

    price: {
        type: Number,
        required: true,
        min: 0
    },

    description: {
        type: String,
        required: true,
        trim: true
    },

    stock: {
        type: Number,
        required: true,
        default: 0,
        min: 0
    },

    category: {
        type: String,
        default: "General"
    },

    image: {
        type: String,
        default: ""
    }

},
{
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model("Product", productSchema);
