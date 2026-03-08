"use server";

import { clerkClient } from "@clerk/nextjs/server";
import { supabase } from "@/lib/supabase";

export async function submitStudentOnboarding(userId: string, data: any) {
    try {
        const { error } = await supabase.from("student_profiles").upsert({
            id: userId,
            ...data,
            updated_at: new Date().toISOString(),
        });

        if (error) {
            console.error("Supabase Error details:", error);
            throw new Error(error.message);
        }

        const client = await clerkClient();
        await client.users.updateUserMetadata(userId, {
            publicMetadata: {
                role: "student"
            }
        });

        return { success: true };
    } catch (err: any) {
        console.error("Student onboarding error:", err);
        return { success: false, error: err.message || "Failed to submit onboarding" };
    }
}

export async function submitCompanyOnboarding(userId: string, data: any) {
    try {
        const { error } = await supabase.from("company_profiles").upsert({
            id: userId,
            ...data,
            updated_at: new Date().toISOString(),
        });

        if (error) {
            console.error("Supabase Error details:", error);
            throw new Error(error.message);
        }

        const client = await clerkClient();
        await client.users.updateUserMetadata(userId, {
            publicMetadata: {
                role: "company"
            }
        });

        return { success: true };
    } catch (err: any) {
        console.error("Company onboarding error:", err);
        return { success: false, error: err.message || "Failed to submit onboarding" };
    }
}
