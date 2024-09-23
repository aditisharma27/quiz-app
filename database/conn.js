import mongoose from "mongoose";

export async function connect(req,res){
    await mongoose.connect(process.env.ATLAS_URI)
    console.log("Database connected");
}