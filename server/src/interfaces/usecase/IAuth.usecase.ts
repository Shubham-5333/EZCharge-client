import { IAuth } from "../../entities/auth.entity";
import IUser from "../../entities/user.entity";

export interface IAuthUsecase{
    userSignin(data:IAuth):Promise<string>
    userSignup(data:IUser):Promise<IUser>
}

export interface IRegister {
    fullName :string;
    email:string;
    password:string;
}