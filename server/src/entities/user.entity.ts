import { Document } from "mongoose";


export default interface IUser extends Document{
    _id: string
    fullName: string;
    email: string;
    password?: string;
    profileimg?: string;
    // isBlocked: boolean
    // isPremium: boolean
}