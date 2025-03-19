import mongoose, { Schema, Model } from "mongoose";
import { IPoolProfile, PoolProfileSchema } from "./Common";

// LiteraryTranslator interface extends from the base PoolProfile interface
export interface ILiteraryTranslator extends IPoolProfile {}

const LiteraryTranslatorSchema: Schema = new Schema(
  {
    ...PoolProfileSchema.obj,
  },
  { collection: "literary-translators" }
);

// Check if the model already exists to prevent overwriting
const LiteraryTranslatorModel: Model<ILiteraryTranslator> =
  mongoose.models.LiteraryTranslator ||
  mongoose.model<ILiteraryTranslator>("LiteraryTranslator", LiteraryTranslatorSchema);

export default LiteraryTranslatorModel;
