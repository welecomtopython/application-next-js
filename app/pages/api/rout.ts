// pages/api/users.ts

import { NextApiRequest, NextApiResponse } from "next";

interface User {
  id: number;
  name: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[]>
) {
  if (req.method === "GET") {
    // Logic to fetch all users from the database
    const users: User[] = [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
    ];
    await res.status(200).json(users);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
