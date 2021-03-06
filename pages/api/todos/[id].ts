import { NextApiRequest, NextApiResponse } from "next";
import Todo from "../../../database/schemas/todo";
import { databaseConnection } from "../../../util/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    method,
    query: { id },
  } = req;

  await databaseConnection();

  switch (method) {
    case "GET":
      try {
        const todo = await Todo.findById(id);
        if (!todo) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: todo });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT":
      try {
        const todo = await Todo.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!todo) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: todo });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE":
      try {
        const deletedTodo = await Todo.deleteOne({ _id: id });
        if (!deletedTodo) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(500).json({ success: false });
      break;
  }
}
