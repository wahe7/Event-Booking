import prisma from "../prisma/prisma.js";

export const createBooking = async (req, res) => {
    try {
        const { userId, slotId, eventId } = req.body;
        if (!userId || !slotId || !eventId) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if booking already exists for this user and slot
        const existingBooking = await prisma.booking.findFirst({
            where: {
                userId,
                slotId
            }
        });
        
        if (existingBooking) {
            return res.status(400).json({ message: "User already booked this slot" });
        }

        const booking = await prisma.booking.create({
            data: {
                userId,
                slotId,
                eventId,
            },
        });
        return res.status(201).json({ message: "Booking created successfully", booking });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}