import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if (!token) {
        res.status(401).json({ message: "Unauthorized: No token provided" });
        return; // Make sure to return after sending a response
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || "your-secret-key");
        req.user = decoded; // Attach user info to the request
        next();
    } catch (error) {
        res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
};
