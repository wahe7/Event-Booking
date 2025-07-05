import prisma from "../prisma/prisma.js";

export const updateSlot = async (req, res) => {
    try {
        const { id, eventId, startTime, endTime } = req.body;
        console.log(id, eventId, startTime, endTime);
        if (!id || !eventId || !startTime || !endTime) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const slot = await prisma.slot.update({
            where: {
                id,
            },
            data: {
                eventId,
                startTime,
                endTime,
            },
        });
        return res.status(201).json({ message: "Slot updated successfully", slot });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}
    
    