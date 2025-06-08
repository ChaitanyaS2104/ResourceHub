import { Schema, model, models } from "mongoose";
//Id is given by default 

const resource = new Schema({
  res_name: {
    type: String,
    required: [true, "Resource name title required"],
  },
  res_link: {
    type: String,
    required: [true, "Resource link is required"],
  },
  description: {
    type: String,
  },
  res_owner: {
    type: String,
    required: [true, "Resource owner is required"],
  },
  res_type: {
    type: String,
    required: [true, "Resource type is required"],
  },
}, { timestamps: true });

//Do not create model agian if it already exists
const Resource = models.Resource || model("Resource", resource);
export default Resource;
