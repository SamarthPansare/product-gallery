import Product from "../models/Product.js";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
        
    }
}

export const getProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({message: "Product not found"});
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const createProduct = async (req, res) => {
    const product = req.body;
    
    if (!product.name || !product.price || !product.img_url) {
        return res.status(400).json({message: "All fields are required"});
    }

    try {
        const newProduct = await Product.create(product);
        res.status(200).json(newProduct);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const deleteProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message: "Product not found"});
        }
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const updateProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const product = await Product.findByIdAndUpdate(id, req.body, {new: true,});
        if(!product){
            return res.status(404).json({message: "Product not found"});
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
