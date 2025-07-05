import express from "express";
import { createEvent, getEvents } from "../controllers/eventcontroller.js";
import { verifyToken } from "../middleware/authMiddleware.js";
import { verifyAdmin } from "../middleware/adminMiddleware.js";

const router = express.Router();

router.post("/create", verifyToken, verifyAdmin, createEvent);
router.get("/", verifyToken, getEvents);

export default router;