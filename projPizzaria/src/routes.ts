import { Router } from 'express';
import { CreateUserController } from './controlers/user/CreateUserController';
import { AuthUserController } from './controlers/user/AuthUserController';
import { DetailUserController } from './controlers/DetailUserController';
import {isAuthenticated} from './middlewares/isAuthenticated'
import { CreateCategoryController } from './controlers/category/CreateCategoryController';
import { ListCategoryController } from './controlers/category/ListCategoryController';
import {CreateProductController} from './controlers/product/CreateProductController'

const router = Router();

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
router.post('/product', isAuthenticated, new CreateProductController().handle)


export { router}
