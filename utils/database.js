import mongoose from "mongoose"

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);
    //Return if already connected to db
    if(isConnected){
        console.log("Already connected to mongo DB");
        return
    }
    try {
        //Connect to mongodb if not already
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "ResourceHub",
        })
        isConnected = true;
        console.log("MongoDB connected")
    } catch (error) {
        console.log(error)
    }
}