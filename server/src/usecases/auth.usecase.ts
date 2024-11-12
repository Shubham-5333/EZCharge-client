import { IAuth } from "../entities/auth.entity";
import IUser from "../entities/user.entity";
import { IAuthRepository } from "../interfaces/repositories/auth.repository";
import { IAuthUsecase } from "../interfaces/usecase/IAuth.usecase";


export class AuthUsecase implements IAuthUsecase {
  private authRepository : IAuthRepository;
  constructor(authRepository:IAuthRepository){
    this.authRepository=authRepository;
  }
  userSignin(data: IAuth): Promise<string> {
    throw new Error("Method not implemented.");
  }
  userSignup(data: IUser): Promise<IUser> {
    throw new Error("Method not implemented.");
  }
  
}