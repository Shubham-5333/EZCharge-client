interface IUserDocument extends Document {
    _id: string;
    email: string;
    password: string;
    fullName:string;
}
export default IUserDocument