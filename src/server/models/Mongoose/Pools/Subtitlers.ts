import mongoose, { Schema, Model } from "mongoose";
import { IPoolProfile, PoolProfileSchema } from "./Common";

// Subtitler interface extends from the base PoolProfile interface
export interface ISubtitler extends IPoolProfile {
  pool_tagline: string; // Define any additional fields for Subtitler here
}

const SubtitlerSchema: Schema = new Schema(
  {
    ...PoolProfileSchema.obj, // Inherit fields from PoolProfileSchema
  },
  { collection: "subtitlers" }
);

// Check if the model already exists to prevent overwriting
const SubtitlerModel: Model<ISubtitler> =
  mongoose.models.Subtitler || mongoose.model<ISubtitler>("Subtitler", SubtitlerSchema);

export default SubtitlerModel;
