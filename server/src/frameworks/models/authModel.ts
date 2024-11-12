import mongoose from "mongoose";
import { IAuth } from "../../entities/auth.entity";

const AuthSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique:true
    },
    fullName:{
        type: String,
        required: true,
        unique:true
    },
    password:{
        type: String,
        required: true
    },
 
    token:[{
        type:String,
    }],
  
    // isGoogleAuth:{
    //     type:Boolean,
    //     default:false
    // }
   
})

export const AuthModel = mongoose.model<IAuth>("Auth",AuthSchema)