import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const create = async (req, res) => {
  try {
    const { datetime, sportId, userId } = req.body;

    const booking = await prisma.booking.create({
      data: { datetime, sportId: sportId, userId: userId },
    });
    return res
      .status(201)
      .json({ data: booking, success: true, message: "Booking successfully" });
  } catch (err) {
    if (typeof err === "string") {
      return res.status(400).json({ data: [], success: false, message: err });
    }
    if (err instanceof Error) {
      return res
        .status(400)
        .json({ data: [], success: false, message: err.message });
    }
    return res
      .status(500)
      .json({ data: [], success: false, message: "Booking failed" });
  }
};

export const get = async (_, res) => {
  try {
    //get all the booking data
    const sports = await prisma.booking.findMany({
      include: { sport: true },
      where: {
        datetime: {
          gte: new Date(),
        },
      },
    });

    return res
      .status(200)
      .json({ data: sports, success: true, message: "data fetched!" });
  } catch (err) {
    return res
      .status(400)
      .json({ data: [], success: false, message: "fetching failed!" });
  }
};
