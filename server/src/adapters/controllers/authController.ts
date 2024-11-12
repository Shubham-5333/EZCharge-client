import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { AuthRepository } from '../repositories/auth.repository';

export class AuthController {
    private authRepository: AuthRepository;

    constructor(authRepository: AuthRepository) {
        this.authRepository = authRepository;
    }

    async signup(req: Request, res: Response, next: NextFunction) {
        try {
            const body = req.body;
            console.log("Received signup data:", body);

            const createdUser = await this.authRepository.create(body);
            console.log("User created:", createdUser);

            return res.status(201).json({ message: "User created successfully", user: createdUser });
        } catch (error) {
            console.log(error);
            return next(error);
        }
    }

    async signin(req: Request, res: Response, next: NextFunction) {
      try {
          const body = req.body;
          const user = await this.authRepository.login(body);
          if (!user) {
              return res.status(401).json({ message: "Invalid credentials" });
          }
  
          // Generate JWT token
          const token = jwt.sign(
              { email: user.email, id: user._id },
              process.env.JWT_SECRET || "your-secret-key",
              { expiresIn: "1h" }
          );
  
          // Set token as an HttpOnly cookie
          res.cookie('token', token, {
              httpOnly: true,
              secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
              maxAge: 3600000, // 1 hour in milliseconds
              sameSite: 'lax',
          });
  
          res.status(200).json({ message: "Login successful" });
      } catch (error) {
          next(error);
      }
  }
  
}
