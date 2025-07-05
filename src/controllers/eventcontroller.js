import prisma from "../prisma/prisma.js";


export const createEvent = async (req, res) => {
    try {
        const { title, description, slots } = req.body;
        if (!title || !description) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const userId = req.user.id;
        if (!userId) {
            return res.status(400).json({ message: "User not found in token" });
        }
        const event = await prisma.event.create({
            data: {
                title,
                description,
                userId,
                slots: {
                  create: slots.map(slot =>({
                    startTime: new Date(slot.startTime),
                    endTime: new Date(slot.endTime),
                  }))
                }
            },
        });
        return res.status(201).json({ message: "Event created successfully", event });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export const getEvents = async (req, res) => {
    try {
        const events = await prisma.event.findMany();
        return res.status(200).json({ events });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}
    