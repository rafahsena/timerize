import { NextApiRequest, NextApiResponse } from "next";
import User from "../../../database/schemas/user";
import { databaseConnection } from "../../../util/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    method,
    body: { email: username },
  } = req;

  await databaseConnection();

  switch (method) {
    case "POST":
      try {
        const user = await User.create({username});
        res.status(201).json({ success: true, data: user });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
