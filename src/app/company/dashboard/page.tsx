import { auth } from "@clerk/nextjs/server";
import { supabase } from "@/lib/supabase";
import CompanyDashboardUI, { CompanyProfile } from "./CompanyDashboardUI";

export default async function CompanyDashboardPage() {
    const authData = await auth();
    const userId = authData.userId;

    if (!userId) {
        return <CompanyDashboardUI profile={null} />;
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
