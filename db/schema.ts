"use server"

import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    shortCode: {
        type: String, 
        required: true,
        unique: true
    },
    originalUrl: {
        type: String,
        required: true,
    },
    visits: {
        type: Number,
        default: 0
    },
}, {timestamps: true})

export const URLs =  mongoose.models.URLs || mongoose.model("URLs", urlSchema)