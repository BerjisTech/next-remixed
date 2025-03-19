import mongoose, { Schema, Model } from "mongoose";
import { IPoolProfile, PoolProfileSchema } from "./Common";

// Student interface extends from the base PoolProfile interface
export interface IStudent extends IPoolProfile {
  // Define any additional fields for Student here if needed
}

const StudentSchema: Schema = new Schema(
  {
    ...PoolProfileSchema.obj,
  },
  { collection: "students" }
);

// Check if the model already exists to prevent overwriting
const StudentModel: Model<IStudent> =
  mongoose.models.Student || mongoose.model<IStudent>("Student", StudentSchema);

export default StudentModel;
