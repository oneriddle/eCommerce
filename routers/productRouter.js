import { Router } from 'express';
import {
    getPostProductViewController, getProductController, getProductsListController, postProductController, putProductController, deleteProductController
} from '../controllers/productController.js';
import { checkAuthentication } from '../middleware/passportAuth.js';

const router = new Router();

router.get('/post', checkAuthentication, getPostProductViewController);
router.post('/post', checkAuthentication, postProductController);
router.get('/stock', checkAuthentication, getProductController);
router.get('/list', checkAuthentication, getProductsListController);
router.put('/put', checkAuthentication, putProductController);
router.delete('/delete/:id', checkAuthentication, deleteProductController);

export { router as productRouter };