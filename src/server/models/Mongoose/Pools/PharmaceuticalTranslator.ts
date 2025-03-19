import mongoose, { Schema, Model } from "mongoose";
import { IPoolProfile, PoolProfileSchema } from "./Common";

// PharmaceuticalTranslator interface extends from the base PoolProfile interface
export interface IPharmaceuticalTranslator extends IPoolProfile {
  // Define any additional fields for PharmaceuticalTranslator here if needed
}

const PharmaceuticalTranslatorSchema: Schema = new Schema(
  {
    ...PoolProfileSchema.obj,
  },
  { collection: "pharmaceutical-translators" }
);

// Check if the model already exists to prevent overwriting
const PharmaceuticalTranslatorModel: Model<IPharmaceuticalTranslator> =
  mongoose.models.PharmaceuticalTranslator ||
  mongoose.model<IPharmaceuticalTranslator>(
    "PharmaceuticalTranslator",
    PharmaceuticalTranslatorSchema
  );

export default PharmaceuticalTranslatorModel;
