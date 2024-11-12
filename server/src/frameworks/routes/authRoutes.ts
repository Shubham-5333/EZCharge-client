import express,{NextFunction,Request,Response, Router} from 'express'

import { AuthController } from '../../adapters/controllers/AuthController'
// import { AuthUsecase } from '../../usecases/auth.usecase'
import { AuthRepository } from '../../adapters/repositories/auth.repository'


const router = express.Router();
const authRepository = new AuthRepository()
// const authUsecase = new AuthUsecase(authRepository)
const authController = new AuthController(authRepository)

export default router.post('/signUp',(req:Request,res:Response,next:NextFunction)=>{
    authController.signup(req,res,next)
    authController.signin(req,res,next)
})
// export default router.post('/signIn',(req:Request,res:Response,next:NextFunction)=>{
//     authController.signIn(req,res,next)
// })
