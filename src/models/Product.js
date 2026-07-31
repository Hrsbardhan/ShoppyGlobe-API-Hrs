const mongoose = require("mongoose");

const mongoosePaginate =
    require("mongoose-paginate-v2");


const productSchema = new mongoose.Schema(

    {

        title: {

            type: String,

            required: true,

            trim: true

        },


        description: {

            type: String,

            required: true,

            trim: true

        },


        price: {

            type: Number,

            required: true,

            min: 0

        },


        image: {

            type: String,

            default: ""

        },


        category: {

            type: String,

            required: true,

            lowercase: true,

            trim: true

        },


        stock: {

            type: Number,

            required: true,

            default: 0,

            min: 0

        },


        reviews: [

            {

                user: {

                    type: mongoose.Schema.Types.ObjectId,

                    ref: "User"

                },

                rating: Number,

                comment: String

            }

        ],


        averageRating: {

            type: Number,

            default: 0

        }

    },

    {

        timestamps: true

    }

);


productSchema.plugin(
    mongoosePaginate
);


module.exports =
    mongoose.model(
        "Product",
        productSchema
    );
