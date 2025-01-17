import { Router } from 'express';
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../controllers/productController.js';

const productRoutes = Router();

productRoutes.get('/', getProducts);
productRoutes.get('/:id', getProduct);
productRoutes.post('/', createProduct);
productRoutes.delete('/:id', deleteProduct);
productRoutes.put('/:id', updateProduct);

export default productRoutes;
