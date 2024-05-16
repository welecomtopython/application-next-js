// import data from './db.json'

// export async function Data() {
//     const json=data

//     return await json

// }
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function Data() {
  // Find all users

  async function createUser() {
    return await prisma.projectFO.create({
      data: {
        name: "app,js",
        item: "not",
        type: "action",
      },
    });
  }

  console.log("All users:", createUser);
  const findNullOrMissing = await prisma.projectFO.findMany({
    where: {},
  });
  console.log(findNullOrMissing);
  return await findNullOrMissing;
}
Data();
