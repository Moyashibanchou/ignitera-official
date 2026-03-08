import { auth, clerkClient } from "@clerk/nextjs/server";
import { supabase } from "@/lib/supabase";
import { redirect } from "next/navigation";
import CompanyDashboardUI, { CompanyProfile } from "./CompanyDashboardUI";

export default async function CompanyDashboardPage() {
    const authData = await auth();
    const userId = authData.userId;

    if (!userId) {
        return <CompanyDashboardUI profile={null} />;
    }

    try {
        const client = await clerkClient();
        const user = await client.users.getUser(userId);
        const role = user.publicMetadata?.role;

        if (role === "student") {
            redirect("/dashboard");
        } else if (role !== "company") {
            redirect("/");
        }
    } catch (e) {
        console.error("Clerk fetch error:", e);
    }

    const { data, error } = await supabase
        .from("company_profiles")
        .select("*")
        .eq("id", userId)
        .maybeSingle();

    if (error) {
        console.error("Error fetching company profile:", error);
    }

    return <CompanyDashboardUI profile={data as CompanyProfile | null} />;
}
