const Cart = require("../models/Cart");
const Product = require("../models/Product");


exports.getCart = async (req, res, next) => {
    try {

        const cart = await Cart.findOne({
            user: req.user._id
        })
        .populate("items.product");


        res.status(200).json({
            success: true,
            message: "Cart fetched successfully",
            data: cart || {
                items: []
            }
        });

    } catch(error) {
        next(error);
    }
};



exports.addToCart = async (req, res, next) => {

    try {

        const { productId, quantity } = req.body;


        const product = await Product.findById(productId);


        if (!product) {

            return res.status(404).json({
                success:false,
                message:"Product not found",
                data:null
            });

        }


        let cart = await Cart.findOne({
            user:req.user._id
        });


        if (!cart) {

            cart = await Cart.create({
                user:req.user._id,
                items:[
                    {
                        product:productId,
                        quantity:quantity || 1
                    }
                ]
            });

        } else {

            const existingItem = cart.items.find(
                item => item.product.toString() === productId
            );


            if(existingItem){

                existingItem.quantity += quantity || 1;

            } else {

                cart.items.push({
                    product:productId,
                    quantity:quantity || 1
                });

            }


            await cart.save();

        }


        await cart.populate("items.product");


        res.status(201).json({
            success:true,
            message:"Product added to cart",
            data:cart
        });


    } catch(error){
        next(error);
    }

};



exports.updateCartItem = async (req,res,next)=>{

    try{

        const { quantity } = req.body;


        const cart = await Cart.findOne({
            user:req.user._id
        });


        if(!cart){

            return res.status(404).json({
                success:false,
                message:"Cart not found",
                data:null
            });

        }


        const item = cart.items.id(req.params.id);


        if(!item){

            return res.status(404).json({
                success:false,
                message:"Cart item not found",
                data:null
            });

        }


        item.quantity = quantity;


        await cart.save();

        await cart.populate("items.product");


        res.status(200).json({
            success:true,
            message:"Cart updated successfully",
            data:cart
        });


    }catch(error){
        next(error);
    }

};



exports.removeCartItem = async(req,res,next)=>{

    try{

        const cart = await Cart.findOne({
            user:req.user._id
        });


        if(!cart){

            return res.status(404).json({
                success:false,
                message:"Cart not found",
                data:null
            });

        }


        cart.items = cart.items.filter(
            item => item._id.toString() !== req.params.id
        );


        await cart.save();

        await cart.populate("items.product");


        res.status(200).json({
            success:true,
            message:"Item removed from cart",
            data:cart
        });


    }catch(error){
        next(error);
    }

};
