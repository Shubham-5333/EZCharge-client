import { IAuth } from "../../entities/auth.entity";
import { AuthModel } from "../../frameworks/models/authModel";
import bcrypt from 'bcrypt';

export class AuthRepository {
    async create(data: IAuth): Promise<IAuth> {
        const user = new AuthModel({
            email: data.email,
            fullName: data.fullName,
            password: await bcrypt.hash(data.password, 10),
        });
        await user.save();
        return user.toObject();
    }

    async login(data: IAuth): Promise<IAuth | null> {
        // Find user by email
        const user = await AuthModel.findOne({ email: data.email });
        
        if (!user) {
            return null; // User not found
        }

        // Check if password matches
        const isPasswordValid = await bcrypt.compare(data.password, user.password);
        if (!isPasswordValid) {
            return null; // Password does not match
        }

        return user.toObject() as IAuth; // Return user data (no token here)
    }
}
