import mongoose,{Schema} from 'mongoose'
import { IUserDocument,IUserCollection } from '../../interfaces/collections/IUsers.collection'


const userSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
    },
    fullName:{
        type:String,
        required:true
    }
})

const UserModel : IUserCollection = mongoose.model<IUserDocument>('Users',userSchema)
export default UserModel