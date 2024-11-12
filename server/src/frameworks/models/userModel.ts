import mongoose,{Schema} from 'mongoose'
// import { IUserDocument,IUserCollection } from '../../interfaces/collections/IUsers.collection'
import IUser from '../../entities/user.entity'

const UserSchema = new Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    OTPVerification:{
        type:Boolean,
        required:true,
        default:false
    },
    isBlocked: {
        type:Boolean,
        required:true,
        default:false
    }

})

// const UserModel : IUserCollection = mongoose.model<IUserDocument>('Users',userSchema)
export const  UserModel = mongoose.model<IUser>("Users",UserSchema)