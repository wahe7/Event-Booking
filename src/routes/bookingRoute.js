import express from "express";
import { createBooking } from "../controllers/bookingcontroller.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/create", verifyToken, createBooking);

export default router;