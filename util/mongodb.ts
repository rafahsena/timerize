import mongoose from "mongoose";

const { MONGODB_URI, MONGODB_DB } = process.env;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

if (!MONGODB_DB) {
  throw new Error(
    "Please define the MONGODB_DB environment variable inside .env.local"
  );
}

export async function databaseConnection(): Promise<typeof mongoose> {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  };

  return mongoose.connect(MONGODB_URI, opts);
}

export const isConnected = mongoose.connection.readyState === 1;
