import { auth, clerkClient } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import StudentOnboardingUI from "./StudentOnboardingUI";

export default async function OnboardingPage() {
    const { userId } = await auth();

    if (userId) {
        try {
            const client = await clerkClient();
            const user = await client.users.getUser(userId);
            const role = user.publicMetadata?.role;

            if (role !== "student") {
                await client.users.updateUserMetadata(userId, {
                    publicMetadata: { role: "student" }
                });
            }
        } catch (error) {
            console.error("Error setting student role on load:", error);
        }
    }

    return <StudentOnboardingUI />;
}
