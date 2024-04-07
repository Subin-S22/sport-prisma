import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const create = async (req, res) => {
  try {
    let { name, description, image, pitches, price, location, availability } =
      req.body;
    //check if all the field are provided.
    if (
      !name ||
      !description ||
      !image ||
      !pitches ||
      !price ||
      !location ||
      !availability
    ) {
      return res.status(400).json({
        success: false,
        result: [],
        message: "Please provide all the information!",
      });
    }

    //create a sport with the given details
    const sports = await prisma.sport.create({
      data: {
        name,
        description,
        image,
        pitches,
        location,
        availability,
        price,
      },
    });

    //response
    return res.status(201).json({
      data: sports,
      success: true,
      message: "Sport created successfully",
    });
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, result: [], message: "Error received!", err });
  }
};

const find = async (req, res) => {
  try {
    //find all the sports
    const sports = await prisma.sport.findMany();

    //response
    return res.status(200).json({
      data: sports,
      success: true,
      message: "Sports fetched successfully",
    });
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, result: [], message: "Error received!" });
  }
};

const findOne = async (req, res) => {
  try {
    //param id
    const id = req.params.id;
    console.log(id);
    //find all the sports
    const sports = await prisma.sport.findUnique({ where: { id: Number(id) } });

    //response
    return res.status(200).json({
      data: sports,
      success: true,
      message: "Sports fetched successfully",
    });
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, result: [], message: "Error received!" });
  }
};
const update = async (req, res) => {
  try {
    let {
      id,
      name,
      description,
      image,
      pitches,
      price,
      location,
      availability,
    } = req.body;
    //check if all the field are provided.
    if (
      !name ||
      !description ||
      !image ||
      !pitches ||
      !price ||
      !location ||
      !availability
    ) {
      return res.status(400).json({
        success: false,
        result: [],
        message: "Please provide all the information!",
      });
    }

    //update a sport with the given details
    const sports = await prisma.sport.update({
      where: {
        id,
      },
      data: {
        name,
        description,
        image,
        pitches,
        price,
        location,
        availability,
      },
    });

    //response
    return res.status(200).json({
      success: true,
      message: "Sport updated successfully",
      data: sports,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, result: [], message: "Error received!" });
  }
};
const remove = async (req, res) => {
  try {
    let id = req.params.id;

    //create a sport with the given details
    const sports = await prisma.sport.delete({ where: { id: parseInt(id) } });
    //response
    return res
      .status(200)
      .json({ success: true, result: sports, message: "Deleted successfully" });
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, result: [], message: "Error received!" });
  }
};
export { create, find, findOne, update, remove };
