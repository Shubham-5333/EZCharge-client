import IUser from "../../entities/user.entity";
import { IAuth } from "../../entities/auth.entity";

export interface IAuthRepository {
    login(data: IAuth): Promise<string>;
    create(data: IUser): Promise<IUser>;
}
