import { auth, clerkClient } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import HomeUI from "./HomeUI";

export default async function Home() {
    const { userId } = await auth();

    if (userId) {
        try {
            const client = await clerkClient();
            const user = await client.users.getUser(userId);
            const role = user.publicMetadata?.role;

            if (role === "company") {
                redirect("/company/dashboard");
            } else if (role === "student") {
                redirect("/dashboard");
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    }

    // Role is not set, meaning they haven't completed onboarding, or they are not logged in.
    // Render the original top page UI
    return <HomeUI />;
}
