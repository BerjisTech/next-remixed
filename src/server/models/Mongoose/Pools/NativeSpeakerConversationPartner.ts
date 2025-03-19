import mongoose, { Schema, Model } from "mongoose";
import { IPoolProfile, PoolProfileSchema } from "./Common";

// NativeSpeakerConversationPartner interface extends from the base PoolProfile interface
export interface INativeSpeakerConversationPartner extends IPoolProfile {
  // Define any additional fields for NativeSpeakerConversationPartner here if needed
}

const NativeSpeakerConversationPartnerSchema: Schema = new Schema(
  {
    ...PoolProfileSchema.obj,
  },
  { collection: "native-speaker-conversation-partners" }
);

// Check if the model already exists to prevent overwriting
const NativeSpeakerConversationPartnerModel: Model<INativeSpeakerConversationPartner> =
  mongoose.models.NativeSpeakerConversationPartner ||
  mongoose.model<INativeSpeakerConversationPartner>(
    "NativeSpeakerConversationPartner",
    NativeSpeakerConversationPartnerSchema
  );

export default NativeSpeakerConversationPartnerModel;
