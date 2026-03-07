"use client";

import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { supabase } from "@/lib/supabase";
import { motion } from "framer-motion";
import { AlertCircle, Phone, Building2, User, Globe, Briefcase, ChevronRight, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import Preloader from "@/components/shared/Preloader";

// DBデータのインタフェース
interface CompanyProfile {
    id: string;
    company_name: string;
    industry: string;
    contact_person: string;
    phone_number: string;
    website_url: string;
}

export default function CompanyDashboardPage() {
    const { user, isLoaded } = useUser();
    const [profile, setProfile] = useState<CompanyProfile | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!isLoaded) return;
        if (!user) {
            setLoading(false);
            return;
        }

        const fetchProfile = async () => {
            try {
                const { data, error } = await supabase
                    .from("company_profiles")
                    .select("*")
                    .eq("id", user.id)
                    .single();

                if (error) {
                    // PGRST116 comes from single() when 0 rows match
                    if (error.code === 'PGRST116') {
                        setProfile(null);
                    } else {
                        throw error;
                    }
                } else {
                    setProfile(data as CompanyProfile);
                }
            } catch (err: any) {
                console.error("Profile fetch error:", err);
                setError(err.message || "企業情報の取得に失敗しました。");
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [user, isLoaded]);

    if (!isLoaded || loading) {
        return <Preloader />;
    }

    return (
        <div className="min-h-screen bg-[#050505] relative text-zinc-300 font-sans selection:bg-orange-500 selection:text-white pt-32 pb-24 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[10%] w-[50vw] h-[50vw] rounded-full mix-blend-screen blur-[120px] opacity-[0.1] bg-orange-600" />
                <div className="absolute bottom-[10%] right-[5%] w-[40vw] h-[40vw] rounded-full mix-blend-screen blur-[150px] opacity-[0.05] bg-red-600" />
                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(#f97316 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 flex items-center gap-4"
                >
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                        <LayoutDashboard className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">Enterprise Portal</h1>
                        <p className="text-sm font-mono text-orange-400 tracking-widest mt-1 uppercase">Corporate Dashboard</p>
                    </div>
                </motion.div>

                {error ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8 backdrop-blur-md flex flex-col items-center justify-center text-center shadow-[0_0_30px_rgba(239,68,68,0.15)]"
                    >
                        <AlertCircle className="w-12 h-12 text-red-500 mb-4 drop-shadow-[0_0_10px_rgba(239,68,68,0.6)]" />
                        <h2 className="text-xl font-bold text-white mb-2">エラーが発生しました</h2>
                        <p className="text-red-400/80">{error}</p>
                    </motion.div>
                ) : !profile ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-16 flex flex-col items-center justify-center text-center shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        <div className="w-20 h-20 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(249,115,22,0.2)]">
                            <AlertCircle className="w-10 h-10 text-orange-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-4 tracking-wide">企業情報が未登録です</h2>
                        <p className="text-zinc-400 mb-10 max-w-md leading-relaxed">
                            IGNITERAの採用プラットフォームを利用開始するために、まずは企業プロフィール情報の登録を完了させてください。
                        </p>

                        <Link href="/company/onboarding" className="w-full sm:w-auto overflow-hidden">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-orange-600 text-white rounded-full font-bold transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.6)] border border-orange-400 hover:bg-orange-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.8)] relative group/btn cursor-pointer"
                            >
                                <span className="relative z-10 text-lg tracking-wide">登録画面へ進む</span>
                                <ChevronRight className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                            </motion.div>
                        </Link>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(0,0,0,0.4)] relative"
                    >
                        {/* Decorative neon lines */}
                        <div className="absolute top-0 right-10 w-32 h-1 bg-gradient-to-l from-orange-600 to-transparent opacity-70" />
                        <div className="absolute bottom-10 left-0 w-1 h-32 bg-gradient-to-b from-red-600 to-transparent opacity-50" />

                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 pb-8 border-b border-white/5 gap-6 relative z-10">
                            <div>
                                <h2 className="text-orange-500 font-mono tracking-widest text-sm mb-2 uppercase drop-shadow-[0_0_5px_rgba(249,115,22,0.8)]">Registered Company</h2>
                                <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight">{profile.company_name}</h3>
                            </div>
                            <div className="px-5 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 font-bold text-sm tracking-widest shadow-[0_0_15px_rgba(34,197,94,0.2)] flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                VERIFIED
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4 relative z-10">
                            <ProfileItem icon={<Briefcase className="w-5 h-5" />} label="Industry" value={profile.industry || "未登録"} />
                            <ProfileItem icon={<User className="w-5 h-5" />} label="Contact Person" value={profile.contact_person || "未登録"} />
                            <ProfileItem icon={<Phone className="w-5 h-5" />} label="Phone Number" value={profile.phone_number || "未登録"} />
                            <ProfileItem icon={<Globe className="w-5 h-5" />} label="Website URL" value={profile.website_url ? <a href={profile.website_url} target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 hover:underline transition-colors">{profile.website_url}</a> : "未登録"} />
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
}

function ProfileItem({ icon, label, value }: { icon: React.ReactNode, label: string, value: string | React.ReactNode }) {
    return (
        <div className="flex gap-5 items-start">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 shrink-0 shadow-[0_0_10px_rgba(255,255,255,0.02)]">
                {icon}
            </div>
            <div>
                <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-1">{label}</div>
                <div className="text-lg font-bold text-white/90 drop-shadow-sm">{value}</div>
            </div>
        </div>
    );
}
