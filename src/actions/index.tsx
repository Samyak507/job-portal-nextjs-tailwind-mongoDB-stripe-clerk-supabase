"use server"

import { revalidatePath } from "next/cache";
import connectToDB from "../database"
import Profile from "../models/profile";

//create profile action 

export async function createProfile(formData, pathToRevalidate) {
    await connectToDB();
    await Profile.create(formData);
    revalidatePath(pathToRevalidate);
} 

export async function fetchProfileAction (id:string){
    await connectToDB();
    const result = await Profile.findOne({userId : id});

    return JSON.parse(JSON.stringify(result));
}