"use server";

import { clerkClient } from "@clerk/nextjs/server";

export async function updateUserRole(userId: string, role: "student" | "company") {
    try {
        const client = await clerkClient();
        await client.users.updateUserMetadata(userId, {
            publicMetadata: {
                role: role
            }
        });
        return { success: true };
    } catch (e: any) {
        console.error("Failed to update user role:", e);
        return { success: false, error: e.message };
    }
}
