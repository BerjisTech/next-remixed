import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI: string = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

// Global caching variable to prevent multiple connections in development
declare global {
  var mongoose: { conn: Mongoose | null; promise: Promise<Mongoose> | null };
}

// Initialize the global variable for caching in development
global.mongoose = global.mongoose || { conn: null, promise: null };

async function dbConnect(): Promise<Mongoose> {
  if (global.mongoose.conn) {
    return global.mongoose.conn;
  }

  if (!global.mongoose.promise) {
    const opts = {
      bufferCommands: false,
    };
    global.mongoose.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log("MongoDB connected");
      return mongoose;
    });
  }

  try {
    global.mongoose.conn = await global.mongoose.promise;
  } catch (error) {
    global.mongoose.promise = null;
    throw error;
  }

  return global.mongoose.conn;
}

export default dbConnect;
