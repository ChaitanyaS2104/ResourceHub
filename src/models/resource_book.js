import { Schema, model, models } from "mongoose";
import Resource from "@models/resource";

const resource_book = new Schema({
  title: {
    type: String,
    unique: [true, "Resource book title should be unique"],
    required: [true, "Resource book title required"],
  },
  description: {
    type: String,
    required: [true, "Resource book description is required"],
  },
  category: {
    type: [String],
    default: [],
  },
  resources: [
    {
      type: Schema.Types.ObjectId,
      ref: "Resource", //From resource model
    },
  ],
}, { timestamps: true });

//Do not create model agian if it already exists
const ResourceBook =
  models.ResourceBook || model("ResourceBook", resource_book);
export default ResourceBook;
