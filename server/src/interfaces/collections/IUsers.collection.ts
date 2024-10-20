import { Document,Model,ObjectId } from "mongoose";

export interface IUserDocument extends Document {
    _id:String;
    email:String;
    password:String;
    fullName:String;
}


export interface IUserCollection extends Model<IUserDocument>{}