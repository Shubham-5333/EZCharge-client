// import { IUserRepository } from "../../interfaces/repositories/IUserRepository";
// import { IUserDocument, IUserCollection } from "../../interfaces/collections/IUsers.collection";
// import  User  from "../../entities/User";
// import UserModel from "../../frameworks/models/userModel";

import { User } from "../../entities/User";
import { IUserRepository } from "../../interfaces/repositories/IUserRepository";

// export class UserRepository implements IUserRepository {
//     constructor(){


//     }
//     findByEmail(email: string): Promise<User | null> {
//         throw new Error("Method not implemented.");
//     }
//     createUser(user: User): Promise<User> {
//         throw new Error("Method not implemented.");
//     }
//     async getDataByEmail(email: string): Promise<IUserDocument | null> {
//         try {
//             const userData: IUserDocument | null = await UserModel.findOne({ email }).exec();
//             return userData;
//         } catch (error) {
//             console.error("Error finding user by email:", error);
//             throw error;
//         }
//     }

//     async creatseUser(user: User): Promise<IUserDocument> {
//         try {
//             const newUser = new UserModel(user);
//             const savedUser: IUserDocument = await newUser.save();
//             return savedUser;
//         } catch (error) {
//             console.error("Error creating new user:", error);
//             throw error; 
//         }
//     }
    
// }

export class UserRepo implements UserRepost{

    private repo:IUserRepository;

    constructor(repo:IUserRepository){
        this.repo=repo
    }

    async createUser(email:string,password:string,fullName:string): Promise<User> {
        t
    }
    

    findUser(email: string, password: string): Promise<User | null> {
        throw new Error("Method not implemented.");
    }
}