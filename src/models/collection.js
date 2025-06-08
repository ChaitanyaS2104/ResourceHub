import { Schema, model, models } from "mongoose";

const collection = new Schema({
  collection_name: {
    type: String,
    unique: [true, "Resource book title should be unique"],
    required: [true, "Resource book title required"],
  },
  description: {
    type: String,
    required: [true, "Resource book description is required"],
  },
  resource_books: [
    {
      type: Schema.Types.ObjectId,
      ref: "ResourceBook",
    },
  ],
  fav_by: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
}, { timestamps: true });

//Do not create model agian if it already exists
const Collection = models.Collection || model("Collection", collection);
export default Collection;
