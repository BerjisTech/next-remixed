import mongoose, { Schema, Model } from "mongoose";
import { IPoolProfile, PoolProfileSchema } from "./Common";

// Interpreter interface extends from the base PoolProfile interface
export interface IInterpreter extends IPoolProfile {}

const InterpreterSchema: Schema = new Schema(
  {
    ...PoolProfileSchema.obj,
  },
  { collection: "interpreters" }
);

// Check if the model already exists to prevent overwriting
const InterpreterModel: Model<IInterpreter> =
  mongoose.models.Interpreter || mongoose.model<IInterpreter>("Interpreter", InterpreterSchema);

export default InterpreterModel;
