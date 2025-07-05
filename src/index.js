import dotenv from "dotenv";
dotenv.config();

import express from "express";
import authRoutes from "./routes/authRoutes.js";
import eventRoutes from "./routes/eventRoute.js";
import slotRoutes from "./routes/slotRoute.js";
import bookingRoutes from "./routes/bookingRoute.js";

const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/event", eventRoutes);
app.use("/api/slot", slotRoutes);
app.use("/api/booking", bookingRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
