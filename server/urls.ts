"use server";

import { connectDB } from "@/db/db";
import { URLs } from "@/db/schema";
import { currentUser } from "@clerk/nextjs/server";
import { ObjectId } from "mongoose";
import { nanoid } from "nanoid";

export const createShortURL = async (originalUrl: string) => {
  try {
    const user = await currentUser()
    if(!user) return
    const userId = user.id
    await connectDB();
    await URLs.create({ originalUrl, shortCode: nanoid(8), userId });
    return { success: true, message: "URL generated" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Error occured while generating URL" };
  }
};

interface urlProps {
    _id: ObjectId,
    shortCode: string,
    originalUrl: string,
    visits: number
}

export const getUrls = async (userId: string) => {
  try {
    await connectDB();
    const urls: urlProps[] = await URLs.find({userId}).sort({createdAt: -1}).lean<urlProps[]>();
    return urls.map((url) => ({
      ...url,
      _id: url._id.toString(),
    }));
  } catch (error) {
    console.error(error);
    const e = error as Error
    throw new Error(e.message)
  }
};

export const deleteUrl = async (id: string) => {
    try {
        await connectDB()
        await URLs.findByIdAndDelete(id)
        return { success: true, message: "URL Deleted" };
    } catch (error) {
        console.error(error);
    return { success: false, message: "Error occured while deleting URL" };
    }
}

export const getSingleUrl = async (shortCode: string) => {
  try {
    await connectDB()
    const response = await URLs.findOne({shortCode})
    return response
  } catch (error) {
    console.error(error)
  }
}


export const updateVisits = async (url: urlProps) => {
  try {
    await connectDB()
    const {_id } = url
    await URLs.findByIdAndUpdate(_id, {
      $inc: {visits: 1}
    })
  } catch (error) {
    console.error(error)
  }
}