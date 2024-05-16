// import data from './db.json'


// export async function Data() {
//     const json=data

//     return await json
    
// }
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export async function Data() {
  // Find all users
  

  return await prisma.projectFO.create({
    data: {
      id:2,
      name:"app,js",
      item:"not",
      type:"action"
      
    },
  });
}
  



// Data()
