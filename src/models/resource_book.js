import { Schema, model, models } from "mongoose";

const resource_book = new Schema(
  {
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
        default: [],
      },
    ],
    fromCollection: {
      type: [String],
      default: [],
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User", //From user model
    },
  },
  { timestamps: true }
);

//Do not create model agian if it already exists
const ResourceBook =
  models.ResourceBook || model("ResourceBook", resource_book);
export default ResourceBook;
