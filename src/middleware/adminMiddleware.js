import prisma from "../prisma/prisma.js";

export const verifyAdmin = async (req, res, next) => {
    try {
        const user = await prisma.user.findUnique({ 
            where: { id: req.user.id },
            select: { role: true }
        });

        if (!user || user.role !== "ADMIN") {
            return res.status(403).json({ message: "Access denied. Admin privileges required." });
        }
        
        next();
    } catch (error) {
        console.error("Admin verification error:", error);
        return res.status(500).json({ message: "Internal server error during admin verification" });
    }
}