import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function signup(req, res) {
  try {
    const body = req.body;
    //create a user in the signup page
    const user = await prisma.user.create({
      data: {
        age: body.age,
        dob: body.dob,
        email: body.email,
        gender: body.gender,
        name: body.name,
        password: body.password,
        studentId: body.studentId,
        type: "user",
      },
    });
    return res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user,
    });
  } catch (err) {
    if (typeof err === "string") {
      return res.status(400).json({ success: false, message: err, data: [] });
    } else if (err instanceof Error) {
      return res
        .status(400)
        .json({ success: false, message: err.message, data: [] });
    }
    return res
      .status(400)
      .json({ success: false, message: "Server error", data: [] });
  }
}

export async function getUser(req, res) {
  try {
    //params from the url
    const id = req.params.id;
    //get user
    const user = await prisma.user.findUnique({ where: { id: id } });
    return res
      .status(200)
      .json({ success: true, message: "User found", data: user });
  } catch (err) {
    if (typeof err === "string") {
      return res.status(400).json({ success: false, message: err, data: [] });
    } else if (err instanceof Error) {
      return res
        .status(400)
        .json({ success: false, message: err.message, data: [] });
    }
    return res
      .status(400)
      .json({ success: false, message: "Server error", data: [] });
  }
}

export async function login(req, res) {
  try {
    const body = req.body;
    const user = await prisma.user.findUnique({
      where: { email: body.email, password: body.password },
    });
    return res
      .status(200)
      .json({ success: true, message: "Login successful", data: user });
  } catch (err) {
    if (typeof err === "string") {
      return res.status(400).json({ success: false, message: err, data: [] });
    } else if (err instanceof Error) {
      return res
        .status(400)
        .json({ success: false, message: err.message, data: [] });
    }
    return res
      .status(400)
      .json({ success: false, message: "Server error", data: [] });
  }
}
