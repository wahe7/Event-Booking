import jwt from "jsonwebtoken";
import prisma from "../prisma/prisma.js";

export const verifyToken = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;

        next();
    } catch (error) {
        return res.status(401).json({ message: "Admin can only create events" });
    }
}