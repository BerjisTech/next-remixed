import mongoose, { Schema, Model } from "mongoose";
import { IPoolProfile, PoolProfileSchema } from "./Common";

// Trainer interface extends from the base PoolProfile interface
export interface ITrainer extends IPoolProfile {
  // Define any additional fields for Trainer here
}

const TrainerSchema: Schema = new Schema(
  {
    ...PoolProfileSchema.obj, // Inherit fields from PoolProfileSchema
  },
  { collection: "trainers" }
);

// Check if the model already exists to prevent overwriting
const TrainerModel: Model<ITrainer> =
  mongoose.models.Trainer || mongoose.model<ITrainer>("Trainer", TrainerSchema);

export default TrainerModel;
