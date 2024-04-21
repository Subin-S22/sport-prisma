import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const create = async (req, res) => {
  try {
    const { datetime, sportId } = req.body;

    const booking = await prisma.booking.create({
      data: { datetime, sportId: sportId },
    });
    res
      .status(201)
      .json({ data: booking, success: true, message: "Booking successful" });
  } catch (err) {
    if (typeof err === "string") {
      res.status(400).json({ data: [], success: false, message: err });
    }
    if (err instanceof Error) {
      res.status(400).json({ data: [], success: false, message: err.message });
    }
    res
      .status(500)
      .json({ data: [], success: false, message: "Booking failed" });
  }
};

export const get = async () => {
  try {
    //get all the booking data
    const sports = await prisma.booking.findMany();
    res
      .status(200)
      .json({ data: sports, success: true, message: "data fetched!" });
  } catch (err) {
    res
      .status(400)
      .json({ data: [], success: false, message: "fetching failed!" });
  }
};
