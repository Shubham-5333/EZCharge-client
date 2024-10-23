import { Document, Model } from "mongoose";


export interface IUserDocument extends Document {
    _id: string; 
    email: string;
    password: string;
    fullName: string; 
}

export interface IUserCollection extends Model<IUserDocument> {}
