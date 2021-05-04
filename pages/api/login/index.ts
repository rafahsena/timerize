import { NextApiRequest, NextApiResponse } from "next";
import User from "../../../database/schemas/user";
import { databaseConnection } from "../../../util/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    method,
    body: { email },
  } = req;

  await databaseConnection();

  switch (method) {
    case "POST":
      try {
        const user = await User.findOne({ username: email }, (err, obj) => {});
        if (!user) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: user });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
  }
}
