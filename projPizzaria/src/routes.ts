import { Router } from 'express';
import multer from 'multer';
import { CreateUserController } from './controlers/user/CreateUserController';
import { AuthUserController } from './controlers/user/AuthUserController';
import { DetailUserController } from './controlers/DetailUserController';
import {isAuthenticated} from './middlewares/isAuthenticated'
import { CreateCategoryController } from './controlers/category/CreateCategoryController';
import { ListCategoryController } from './controlers/category/ListCategoryController';
import {CreateProductController} from './controlers/product/CreateProductController'
import {listByCategoryController} from './controlers/product/listByCategoryController'
import { CreateOrderController } from './controlers/order/CreateOrderController'
import { AddItemController } from './controlers/order/AddItemController';
import uploadConfig from './config/multer';
const router = Router();
const upload = multer(uploadConfig.upload("./tmp"))
//router.get('/teste', (req: Request, res: Response)=>{
    // return res.json({ok: true})


    // -- ROTAS USER --
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)

//Pegar dados do usuario, usamos o método GET
router.get('/me', isAuthenticated, new DetailUserController().handle)


/*----ROTAS DE CATEGORIAS---------------------------------------------*/

router.post('/category', isAuthenticated, new CreateCategoryController().handle)

// Listando categorias
router.get('/category', isAuthenticated, new ListCategoryController().handle)

/*----ROTAS DE PRODUTOS---------------------------------------------*/
router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle)
router.get('/category/product', isAuthenticated, new listByCategoryController().handle)

/*----ROTAS DE PEDIDOS---------------------------------------------*/
router.post('/order', isAuthenticated, new CreateOrderController().handle)

router.post('/order/add', isAuthenticated, new AddItemController().handle)


export { router}
