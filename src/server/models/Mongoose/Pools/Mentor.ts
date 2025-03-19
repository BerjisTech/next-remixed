import mongoose, { Schema, Model } from "mongoose";
import { IPoolProfile, PoolProfileSchema } from "./Common";

// Mentor interface extends from the base PoolProfile interface
export interface IMentor extends IPoolProfile {
  // Define any additional fields for Mentor here if needed
}

const MentorSchema: Schema = new Schema(
  {
    ...PoolProfileSchema.obj,
  },
  { collection: "mentors" }
);

// Check if the model already exists to prevent overwriting
const MentorModel: Model<IMentor> =
  mongoose.models.Mentor || mongoose.model<IMentor>("Mentor", MentorSchema);

export default MentorModel;
