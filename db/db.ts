"use server"

import mongoose from "mongoose";

export async function connectDB(){
    try {
        await mongoose.connect(process.env.DATABASE_URI!)
        console.log("MongoDB connected")
    } catch (error) {
        console.error(error)
    }

}