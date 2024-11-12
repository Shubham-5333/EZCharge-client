import { Document, Model,ObjectId } from "mongoose";


export interface IUserDocument extends Document {
    _id: ObjectId; 
    fullName: string; 
    email: string;
    password: string;
    OTPVerfication:boolean;
    isBlocked:boolean;
}

export interface IUserCollection extends Model<IUserDocument> {}
