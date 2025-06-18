import { Schema, model, models } from "mongoose";

const userschema = new Schema({
    email:{
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email required!'],
    },
    username:{
        type: String,
        required: [true, 'Username required!'],
        match: [/^(?![_•])[a-zA-Z0-9._•]{8,20}(?<![_•])$/, 'Username invalid, it should contain 8-20 alphanumeric letters and be unique!']
    },
    image: {
        type: String,
    }
})

//Do not create User model agian if it already exists
const User = models.User || model("User", userschema);
export default User