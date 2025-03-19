import mongoose, { Schema, Model } from "mongoose";
import { IPoolProfile, PoolProfileSchema } from "./Common";

// GameLocalizer interface extends from the base PoolProfile interface
export interface IGameLocalizer extends IPoolProfile {}

const GameLocalizerSchema: Schema = new Schema(
  {
    ...PoolProfileSchema.obj,
  },
  { collection: "gamelocalizers" }
);

// Check if the model already exists to prevent overwriting
const GameLocalizerModel: Model<IGameLocalizer> =
  mongoose.models.GameLocalizer ||
  mongoose.model<IGameLocalizer>("GameLocalizer", GameLocalizerSchema);

export default GameLocalizerModel;
