import express from "express";
import { PrismaClient } from "@prisma/client";
import router from "./routes/index.js";
import bodyParser from "body-parser";
import cors from "cors";

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  const allSports = await prisma.sport.findMany();
  console.log(allSports);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

const app = new express();
app.use(cors());

//accept the application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//router for the api
app.use("/api", router);

app.listen(4321, () => {
  console.log("app is listening to 4321");
});
