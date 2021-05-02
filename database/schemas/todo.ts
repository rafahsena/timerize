import mongoose, { Schema } from "mongoose";

const TodoSchema: Schema = new mongoose.Schema({
  title: String,
  description: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
  isDone: { type: Boolean, default: false },
  owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

export default mongoose.models.Todo || mongoose.model("Todo", TodoSchema);
