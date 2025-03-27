"use server";

import { revalidatePath } from "next/cache";
import connectToDB from "../database";
import Profile from "../models/profile";

// Define TypeScript types
interface ProfileData {
    userId: string;
    name?: string;
    email?: string;
    // Add other fields based on your schema
}

// Create profile action
export async function createProfileAction(formData, pathToRevalidate) {
    // await connectToDB();
    // await Profile.create(formData);
    // revalidatePath(pathToRevalidate);

    try {
        if (!formData || Object.keys(formData).length === 0) {
            throw new Error("❌ formData is missing or empty.");
        }

        await connectToDB();
        await Profile.create(formData);
        revalidatePath(pathToRevalidate);
        console.log("✅ Profile created successfully!");
    } catch (error) {
        console.error("❌ Error in createProfileAction:", error);
        throw new Error("Profile creation failed.");
    }
}

// Fetch profile action
export async function fetchProfileAction(id: string) {
    try {
        await connectToDB();
        const result = await Profile.findOne({ userId: id }); // Convert to plain object

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
