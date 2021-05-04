import mongoose, { Schema } from "mongoose";

const UserSchema: Schema = new mongoose.Schema({
  username: { type: String, unique: true },
  description: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
