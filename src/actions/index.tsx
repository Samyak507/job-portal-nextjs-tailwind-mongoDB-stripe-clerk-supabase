"use server"

import { revalidatePath } from "next/cache";
import connectToDB from "../database"
import Profile from "../models/profile";

//create profile action 

export async function createProfileAction(formData, pathToRevalidate) {
    await connectToDB();
    await Profile.create(formData);
    revalidatePath(pathToRevalidate);
} 

// export async function fetchProfileAction (id){
//     await connectToDB();
//     const result = await Profile.findOne({userId : id});

//     return JSON.parse(JSON.stringify(result));
// }

export async function fetchProfileAction(id) {
    try {
        await connectToDB();
        const result = await Profile.findOne({ userId: id });

        if (!result) {
            console.log("❌ No profile found for user ID:", id);
            return null;
        }

        return JSON.parse(JSON.stringify(result));
    } catch (error) {
        console.error("❌ Error fetching profile:", error);
        return null;
    }
}
