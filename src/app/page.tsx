import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import HomeUI from "./HomeUI";

export default async function Home() {
    const { sessionClaims } = await auth();

    // Verify role in session claims (Clerk publicMetadata)
    const role = (sessionClaims?.metadata as any)?.role || (sessionClaims?.publicMetadata as any)?.role;

    if (role === "company") {
        redirect("/company/dashboard");
    } else if (role === "student") {
        redirect("/dashboard");
    }

    // Role is not set, meaning they haven't completed onboarding.
    // Render the original top page UI
    return <HomeUI />;
}
