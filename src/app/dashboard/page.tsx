import { auth, clerkClient } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import DashboardUI from "./DashboardUI";

export default async function DashboardPage() {
    const { userId } = await auth();

    if (!userId) {
        redirect("/");
    }

    try {
        const client = await clerkClient();
        const user = await client.users.getUser(userId);
        const role = user.publicMetadata?.role;

        if (role === "company") {
            redirect("/company/dashboard");
        } else if (role !== "student") {
            redirect("/");
        }
    } catch (e) {
        console.error("Clerk fetch error:", e);
    }

    return <DashboardUI />;
}
