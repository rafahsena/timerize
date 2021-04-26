import { NextApiRequest, NextApiResponse } from "next";
import Todo from "../../../database/schemas/todo";
import { databaseConnection } from "../../../util/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  await databaseConnection();

  switch (method) {
    case "GET":
      try {
        const todos = await Todo.find({});
        res.status(200).json({ success: true, data: todos });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const todo = await Todo.create(req.body);
        res.status(201).json({ success: true, data: todo });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
