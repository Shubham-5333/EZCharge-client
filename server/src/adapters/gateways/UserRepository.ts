import { IUserRepository } from "../../interfaces/repositories/IUserRepository";
import { IUserDocument, IUserCollection } from "../../interfaces/collections/IUsers.collection";
import { User } from "../../entities/User";
import UserModel from "../../frameworks/models/userModel";

export class UserRepository implements IUserRepository {
    constructor(){


    }
    async getDataByEmail(email: string): Promise<IUserDocument | null> {
        try {
            const userData: IUserDocument | null = await UserModel.findOne({ email }).exec();
            return userData;
        } catch (error) {
            console.error("Error finding user by email:", error);
            throw error;
        }
    }

    async creatseUser(user: User): Promise<IUserDocument> {
        try {
            const newUser = new UserModel(user);
            const savedUser: IUserDocument = await newUser.save();
            return savedUser;
        } catch (error) {
            console.error("Error creating new user:", error);
            throw error; 
        }
    }
    
}
