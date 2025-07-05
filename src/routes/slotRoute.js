import express from "express";
import { updateSlot } from "../controllers/slotcontroller.js";
import { verifyToken } from "../middleware/authMiddleware.js";
import { verifyAdmin } from "../middleware/adminMiddleware.js";

const router = express.Router();

router.put("/update", verifyToken, verifyAdmin, updateSlot);

export default router;