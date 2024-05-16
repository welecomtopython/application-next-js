import { NextRequest, NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";


export async function GET(request:NextRequest) {

      // const prisma = new PrismaClient()
      // await prisma.projectFO.create({
      //   data: {
  
      //     name:"asppdg,js",
      //     type:"dedddgddddd",
      //     item:"ff",
          
      //     },
      //     });


  
      // const db= await prisma.projectFO.findMany()
      
    
      return await NextResponse.json( 'db',{status:200});
      

  }
  
  

  
export async function POST(request:NextRequest) {
  const prisma = new PrismaClient();
  // await prisma.projectFO.create({
  //   data: {

  //     name:"asppdg,js",
  //     type:"dedddgddddd",
  //     item:"ff",

  //     },
  //     });

  const db= await prisma.projectFO.findMany()

  return await NextResponse.json(db, { status: 200 });
}
