import  {User}  from "../../entities/User";

export interface IUserRepository {
  createUser(email:string,password:string,fullName:string): Promise<User>;
    findUser(email: string,password:string): Promise<User[] | null>;
  }

 