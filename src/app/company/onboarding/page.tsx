import { auth, clerkClient } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import CompanyOnboardingUI from "./CompanyOnboardingUI";

export default async function CompanyOnboardingPage() {
    const { userId } = await auth();

    if (userId) {
        try {
            const client = await clerkClient();
            const user = await client.users.getUser(userId);
            const role = user.publicMetadata?.role;

            if (role !== "company") {
                await client.users.updateUserMetadata(userId, {
                    publicMetadata: { role: "company" }
                });
            }
        } catch (error) {
            console.error("Error setting company role on load:", error);
        }
    }

    return <CompanyOnboardingUI />;
}
