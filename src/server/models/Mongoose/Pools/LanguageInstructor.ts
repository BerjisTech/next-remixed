import mongoose, { Schema, Model } from "mongoose";
import { IPoolProfile, PoolProfileSchema } from "./Common";

// LanguageInstructor interface extends from the base PoolProfile interface
export interface ILanguageInstructor extends IPoolProfile {}

const LanguageInstructorSchema: Schema = new Schema(
  {
    ...PoolProfileSchema.obj,
  },
  { collection: "language-instructors" }
);

// Check if the model already exists to prevent overwriting
const LanguageInstructorModel: Model<ILanguageInstructor> =
  mongoose.models.LanguageInstructor ||
  mongoose.model<ILanguageInstructor>("LanguageInstructor", LanguageInstructorSchema);

export default LanguageInstructorModel;
