"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser, SignInButton } from "@clerk/nextjs";
import { supabase } from "@/lib/supabase";
import { updateUserRole } from "@/app/actions/user";
import { motion } from "framer-motion";
import { ArrowRight, Building, Globe, User, Briefcase, AlertCircle, Phone, ChevronDown } from "lucide-react";
import Preloader from "@/components/shared/Preloader";

export default function CompanyOnboardingPage() {
    const { user, isLoaded, isSignedIn } = useUser();
    const router = useRouter();

    const [formData, setFormData] = useState({
        company_name: "",
        phone_number: "",
        industry: "",
        contact_person: "",
        website_url: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // To prevent flashing while clerk loads
    if (!isLoaded) {
        return <Preloader />;
    }

    if (!isSignedIn) {
        return (
            <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 text-zinc-300 font-sans">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10 max-w-md w-full text-center shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                    <AlertCircle className="w-16 h-16 text-orange-500 mx-auto mb-6 opacity-80" />
                    <h2 className="text-2xl font-bold text-white mb-4">企業アカウント登録</h2>
                    <p className="text-gray-400 mb-8 leading-relaxed">先にログインするか、企業アカウントを作成してください。</p>
                    <SignInButton mode="modal">
                        <span className="block w-full py-4 bg-orange-600 text-white font-bold text-center rounded-full shadow-[0_0_20px_rgba(249,115,22,0.6)] hover:bg-orange-500 hover:-translate-y-1 transition-all cursor-pointer">
                            ログインする
                        </span>
                    </SignInButton>
                </div>
            </div>
        );
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user) return;

        setIsSubmitting(true);
        setError(null);

        try {
            const { error: insertError } = await supabase
                .from("company_profiles")
                .insert({
                    id: user.id,
                    company_name: formData.company_name,
                    phone_number: formData.phone_number,
                    industry: formData.industry,
                    contact_person: formData.contact_person,
                    website_url: formData.website_url,
                });

            if (insertError) {
                console.error("Supabase insert error:", insertError);
                throw insertError;
            }

            // Update role in Clerk
            const roleResult = await updateUserRole(user.id, "company");
            if (!roleResult.success) {
                throw new Error(roleResult.error || "Failed to update role");
            }

            // Successfully inserted and role updated, redirect to company dashboard
            router.push("/company/dashboard");
        } catch (err: any) {
            console.error("Submission failed:", err);
            setError("登録中にエラーが発生しました。時間を置いて再度お試しください。");
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#050505] relative text-zinc-300 font-sans selection:bg-orange-500 selection:text-white pt-32 pb-24 overflow-hidden flex items-center justify-center">
            {/* Background effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[10%] w-[50vw] h-[50vw] rounded-full mix-blend-screen blur-[120px] opacity-[0.15] bg-orange-600" />
                <div className="absolute bottom-[20%] left-[5%] w-[40vw] h-[40vw] rounded-full mix-blend-screen blur-[150px] opacity-[0.1] bg-[#4285F4]" />
                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(#f97316 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
            </div>

            <div className="w-full max-w-2xl px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-black/40 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                >
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/30 mb-6 shadow-[0_0_20px_rgba(249,115,22,0.2)]">
                            <Building className="w-8 h-8 text-orange-500" />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 tracking-tight mb-4 drop-shadow-[0_0_15px_rgba(255,77,0,0.3)]">
                            Enterprise Setup
                        </h1>
                        <p className="text-zinc-400 leading-relaxed max-w-md mx-auto">
                            IGNITERAによる次世代の採用データにアクセスするため、企業情報を登録してください。
                        </p>
                    </div>

                    {error && (
                        <div className="mb-8 p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-3 text-red-400">
                            <AlertCircle className="w-5 h-5 shrink-0" />
                            <p className="text-sm font-medium">{error}</p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest pl-1">Company Name</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-500">
                                        <Building className="w-5 h-5" />
                                    </div>
                                    <input
                                        type="text"
                                        name="company_name"
                                        required
                                        value={formData.company_name}
                                        onChange={handleChange}
                                        className="w-full bg-black/50 border border-white/10 rounded-xl pl-12 pr-5 py-4 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all font-medium"
                                        placeholder="株式会社IGNITERA"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest pl-1">Phone Number</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-500">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <input
                                        type="tel"
                                        name="phone_number"
                                        required
                                        value={formData.phone_number}
                                        onChange={handleChange}
                                        className="w-full bg-black/50 border border-white/10 rounded-xl pl-12 pr-5 py-4 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all font-medium"
                                        placeholder="03-1234-5678"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2 md:col-span-2">
                                <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest pl-1">Industry</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-500">
                                        <Briefcase className="w-5 h-5" />
                                    </div>
                                    <select
                                        name="industry"
                                        required
                                        value={formData.industry}
                                        onChange={handleChange}
                                        className="w-full bg-black/50 border border-white/10 rounded-xl pl-12 pr-10 py-4 text-white focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all font-medium appearance-none"
                                    >
                                        <option value="" disabled className="text-zinc-500 bg-black">業界を選択してください</option>
                                        <option value="IT・通信・Web" className="bg-black">IT・通信・Web</option>
                                        <option value="メーカー・製造" className="bg-black">メーカー・製造</option>
                                        <option value="商社・小売・流通" className="bg-black">商社・小売・流通</option>
                                        <option value="金融・保険" className="bg-black">金融・保険</option>
                                        <option value="コンサルティング・士業" className="bg-black">コンサルティング・士業</option>
                                        <option value="人材・教育" className="bg-black">人材・教育</option>
                                        <option value="広告・マスコミ・エンタメ" className="bg-black">広告・マスコミ・エンタメ</option>
                                        <option value="不動産・建設" className="bg-black">不動産・建設</option>
                                        <option value="医療・福祉" className="bg-black">医療・福祉</option>
                                        <option value="その他" className="bg-black">その他</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-zinc-500">
                                        <ChevronDown className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest pl-1">Contact Person</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-500">
                                    <User className="w-5 h-5" />
                                </div>
                                <input
                                    type="text"
                                    name="contact_person"
                                    required
                                    value={formData.contact_person}
                                    onChange={handleChange}
                                    className="w-full bg-black/50 border border-white/10 rounded-xl pl-12 pr-5 py-4 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all font-medium"
                                    placeholder="採用 太郎"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-mono text-zinc-500 uppercase tracking-widest pl-1">Website URL</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-500">
                                    <Globe className="w-5 h-5" />
                                </div>
                                <input
                                    type="url"
                                    name="website_url"
                                    required
                                    value={formData.website_url}
                                    onChange={handleChange}
                                    className="w-full bg-black/50 border border-white/10 rounded-xl pl-12 pr-5 py-4 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all font-medium"
                                    placeholder="https://example.com"
                                />
                            </div>
                        </div>

                        <div className="pt-6">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-orange-600 text-white rounded-full font-bold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.6)] border border-orange-400 hover:bg-orange-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.8)] hover:-translate-y-1 disabled:opacity-50 disabled:hover:translate-y-0 disabled:cursor-not-allowed group"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        登録処理中...
                                    </>
                                ) : (
                                    <>
                                        企業情報を登録して開始する
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
