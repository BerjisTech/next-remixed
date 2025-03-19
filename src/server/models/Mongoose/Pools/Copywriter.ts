import mongoose, { Schema, Model } from "mongoose";
import { IPoolProfile, PoolProfileSchema } from "./Common";

// Copywriter interface extends from the base PoolProfile interface
export interface ICopywriter extends IPoolProfile {}

const CopywriterSchema: Schema = new Schema(
  {
    ...PoolProfileSchema.obj,
  },
  { collection: "copywriters" }
);

// Check if the model already exists to prevent overwriting
const CopywriterModel: Model<ICopywriter> =
  mongoose.models.Copywriter || mongoose.model<ICopywriter>("Copywriter", CopywriterSchema);

export default CopywriterModel;
