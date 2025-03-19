import mongoose, { Schema, Model } from "mongoose";
import { IPoolProfile, PoolProfileSchema } from "./Common";

// ProjectManager interface extends from the base PoolProfile interface
export interface IProjectManager extends IPoolProfile {
  // Define any additional fields for ProjectManager here if needed
}

const ProjectManagerSchema: Schema = new Schema(
  {
    ...PoolProfileSchema.obj,
  },
  { collection: "project-managers" }
);

// Check if the model already exists to prevent overwriting
const ProjectManagerModel: Model<IProjectManager> =
  mongoose.models.ProjectManager ||
  mongoose.model<IProjectManager>("ProjectManager", ProjectManagerSchema);

export default ProjectManagerModel;
