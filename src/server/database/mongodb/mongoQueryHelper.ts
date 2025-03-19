import { Document, FilterQuery, Model, UpdateQuery } from "mongoose";
import dbConnect from "./dbConnect";

export async function findDocuments<T extends Document>(
  model: Model<T>,
  query: FilterQuery<T> = {},
  projection: string | object = ""
): Promise<T[]> {
  await dbConnect();
  return await model.find(query, projection).exec(); // Pass projection to the find query
}

export async function insertDocument<T extends Document>(
  model: Model<T>,
  documentData: Partial<T>
): Promise<T> {
  await dbConnect(); // Ensure the DB is connected
  const document = new model(documentData);
  return await document.save(); // Save and return the document
}

// Update a document
export async function updateDocument<T extends Document>(
  model: Model<T>,
  filter: FilterQuery<T>,
  update: UpdateQuery<T>
): Promise<{ matchedCount: number; modifiedCount: number }> {
  await dbConnect(); // Ensure the DB is connected
  const result = await model.updateOne(filter, update).exec(); // Perform the update query
  return {
    matchedCount: result.matchedCount,
    modifiedCount: result.modifiedCount,
  };
}

// Delete a document
export async function deleteDocument<T extends Document>(
  model: Model<T>,
  filter: FilterQuery<T>
): Promise<{ deletedCount?: number }> {
  await dbConnect(); // Ensure the DB is connected
  const result = await model.deleteOne(filter).exec(); // Perform the delete query
  return {
    deletedCount: result.deletedCount, // Return the count of deleted documents
  };
}
