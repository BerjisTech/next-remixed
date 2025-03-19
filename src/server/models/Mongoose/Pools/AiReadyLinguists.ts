import mongoose, { Schema, Model } from "mongoose";
import { IPoolProfile, PoolProfileSchema } from "./Common"; // Assuming the Common file has your base schema

export interface IAiReadyLinguist extends IPoolProfile {
  // Add other fields specific to AiReadyLinguist here if required
}

const AiReadyLinguistsSchema: Schema = new Schema(
  {
    ...PoolProfileSchema.obj,
    // Define the schema fields for AiReadyLinguists here
  },
  { collection: "ai-ready-linguists" }
);

// Check if the model already exists to prevent overwriting
const AiReadyLinguistsModel: Model<IAiReadyLinguist> =
  mongoose.models.AiReadyLinguists ||
  mongoose.model<IAiReadyLinguist>("AiReadyLinguists", AiReadyLinguistsSchema);

export default AiReadyLinguistsModel;
