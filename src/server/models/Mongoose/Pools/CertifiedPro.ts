import mongoose, { Schema, Model } from "mongoose";
import { IPoolProfile, PoolProfileSchema } from "./Common";

// CertifiedPro interface extends from the base PoolProfile interface
export interface ICertifiedPro extends IPoolProfile {}

const CertifiedProSchema: Schema = new Schema(
  {
    ...PoolProfileSchema.obj,
  },
  { collection: "certifiedpros" }
);

// Check if the model already exists to prevent overwriting
const CertifiedProModel: Model<ICertifiedPro> =
  mongoose.models.CertifiedPro || mongoose.model<ICertifiedPro>("CertifiedPro", CertifiedProSchema);

export default CertifiedProModel;
