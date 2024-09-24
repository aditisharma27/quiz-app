import mongoose from "mongoose";

export async function connect(req,res){
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.ATLAS_URI)
    console.log("Database connected");
}