import { auth } from "@clerk/nextjs/server";
import { supabase } from "@/lib/supabase";
import CompanyDashboardUI, { CompanyProfile } from "./CompanyDashboardUI";

export default async function CompanyDashboardPage() {
    const authData = await auth();
    const userId = authData.userId;

    if (!userId) {
        return <CompanyDashboardUI profile={null} />;
    }

    const { data } = await supabase
        .from("company_profiles")
        .select("*")
        .eq("id", userId)
        .single();

    return <CompanyDashboardUI profile={data as CompanyProfile} />;
}
