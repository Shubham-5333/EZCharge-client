// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import { Request, Response } from 'express';
// import { UserRepository } from '../repositories/UserRepository';
// // import User from '../../entities/User';
// import dotenv from 'dotenv';

// dotenv.config();

// const userRepository = new UserRepository();

// export const SignUp = async (req: Request, res: Response): Promise<void> => {
//     const { email, password, fullName } = req.body;
//     try {

//         const existingUser = await userRepository.getDataByEmail(email);
//         if (existingUser) {
//             res.status(400).json({ message: 'User already exists' });
//             return; // Stop further execution
//         }

//         // Hash the password
//         const hashedPassword = await bcrypt.hash(password, 10);
//         // Create a new user object
//         // const newUser: User = { _id: '', email, password: hashedPassword, fullName };
//         // Save the new user
//         // const createdUser = await userRepository.createUser(newUser);

//         // Send success response
//         // res.status(201).json({ message: 'User registered successfully', user: createdUser });
//     } catch (error) {
//         // Log the error and send a response
//         console.error('Error during sign-up:', error);
//         res.status(500).json({ message: 'Error registering user' });
//     }
// };

// export const SignIn = async (req: Request, res: Response): Promise<void> => {
//     const { email, password } = req.body;
//     try {
//         // Check if the user exists
//         const user = await userRepository.getDataByEmail(email);
//         if (!user) {
//             res.status(400).json({ message: 'User does not exist' });
//             return; // Stop further execution
//         }

//         // Verify the password
//         const isPasswordValid = await bcrypt.compare(password, user.password);
//         if (!isPasswordValid) {
//             res.status(400).json({ message: 'Invalid password' });
//             return; // Stop further execution
//         }

//         // Generate a JWT token
//         const token = jwt.sign(
//             { id: user._id, email: user.email },
//             process.env.JWT_SECRET as string,
//             { expiresIn: '1h' }
//         );

//         // Send success response with the token
//         res.status(200).json({ message: 'Login successful', token });
//     } catch (error) {
//         // Log the error and send a response
//         console.error('Error during sign-in:', error);
//         res.status(500).json({ message: 'Error logging in' });
//     }
// };


// authController.ts
import { Request, Response, NextFunction } from 'express';
import { IUserRepository } from '../../interfaces/repositories/IUserRepository';

export class AuthController {
  private repo: IUserRepository;

  constructor(repo: IUserRepository) {
    this.repo = repo;
  }

  // Define the method with correct signature
  public onCreateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { email, password, fullName } = req.body;
      const user = await this.repo.createUser(email, password, fullName);
      res.status(201).json({ user });
    } catch (error) {
      next(error);
    }
  };

  public onFindUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { email, password } = req.body;
      const user = await this.repo.findUser(email, password);
    //   if (!user) {
    //     return res.status(404).json({ message: 'User not found' });
    //   }
      res.status(200).json({ user });
    } catch (error) {
      next(error);
    }
  };
}
