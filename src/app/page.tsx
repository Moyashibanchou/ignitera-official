"use client";

import FadeIn from "@/components/shared/FadeIn";
import TextAnimatedHero from "@/components/shared/TextAnimatedHero";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Preloader from "@/components/shared/Preloader";
import NextLink from "next/link";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

const AnimatedBackground = () => (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#050505]">
        {/* Glow Effects */}
        <div
            className="absolute top-[-20%] left-[20%] w-[50vw] h-[50vw] rounded-full mix-blend-screen blur-[120px] opacity-[0.15] bg-ignitera-500 will-change-transform"
        />
        <div
            className="absolute bottom-[-10%] right-[10%] w-[40vw] h-[40vw] rounded-full mix-blend-screen blur-[150px] opacity-[0.1] bg-[#4285F4] will-change-transform"
        />
        {/* Grid dots */}
        <div className="absolute inset-0 opacity-[0.2]"
            style={{ backgroundImage: "radial-gradient(#3f3f46 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
    </div>
);

export default function Home() {
    const [showPreloader, setShowPreloader] = useState(true);
    const { user, isLoaded } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (!isLoaded) return;

        if (!user) {
            setShowPreloader(false);
            return;
        }

        const checkRoleAndRedirect = async () => {
            try {
                // 1. Check if user is a company
                const { data: companyData, error: companyError } = await supabase
                    .from("company_profiles")
                    .select("id")
                    .eq("id", user.id)
                    .maybeSingle();

                if (companyError) throw companyError;

                if (companyData) {
                    router.push("/company/dashboard");
                    return;
                }

                // 2. Check if user is a student
                const { data: studentData, error: studentError } = await supabase
                    .from("student_profiles")
                    .select("id")
                    .eq("id", user.id)
                    .maybeSingle();

                if (studentError) throw studentError;

                if (studentData) {
                    router.push("/dashboard");
                    return;
                }

                // 3. User is neither (needs onboarding), just show home page
                setShowPreloader(false);
            } catch (err) {
                console.error("Error during role check:", err);
                setShowPreloader(false);
            }
        };

        checkRoleAndRedirect();
    }, [isLoaded, user, router]);

    return (
        <>
            {showPreloader && <Preloader />}
            <motion.main
                className="min-h-screen bg-transparent relative text-zinc-300 font-sans selection:bg-ignitera-500 selection:text-white"
                initial={{ opacity: 0, scale: 1.02, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 2.2 }}
            >
                <AnimatedBackground />
                {/* Hero Section */}
                <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 md:px-6 w-full max-w-full md:max-w-7xl mx-auto py-20 pb-32 overflow-hidden">
                    <FadeIn>
                        <div className="flex items-center gap-3 mb-6 justify-center mt-20 md:mt-0">
                            <div className="w-2 h-2 rounded-full bg-ignitera-500 animate-pulse shadow-[0_0_10px_#ff4d00]" />
                            <p className="text-ignitera-500 font-medium tracking-[0.2em] text-xs uppercase">The Portal</p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2} className="w-full">
                        <span className="inline-block py-1 px-3 mb-6 text-sm font-bold text-orange-500 bg-orange-500/10 border border-orange-500/30 rounded-full tracking-wider shadow-[0_0_10px_rgba(249,115,22,0.3)]">
                            次世代の採用プラットフォーム
                        </span>
                    </FadeIn>

                    <div className="w-full">
                        <TextAnimatedHero />
                    </div>

                    <FadeIn delay={0.4}>
                        <p className="text-lg md:text-2xl text-gray-400 font-light max-w-2xl mx-auto leading-loose mt-4 break-words whitespace-normal">
                            「学歴・ガクチカ・面接」から「データ・証明・信頼」へ。<br className="hidden md:block" />
                            評価基準のパラダイムを変革する。
                        </p>
                    </FadeIn>

                    {/* Dual Entrance CTAs */}
                    <FadeIn delay={0.6} className="w-full mt-16 md:mt-24 mb-10 z-10">
                        <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-stretch w-full max-w-6xl mx-auto">

                            {/* Students Entrance */}
                            <NextLink href="/students" className="group flex-1 flex">
                                <div className="w-full relative p-8 md:p-14 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:shadow-[0_20px_40px_rgba(255,255,255,0.1)] flex flex-col items-center justify-center text-center">
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight drop-shadow-md">
                                        For Students
                                    </h2>
                                    <p className="text-zinc-300 font-light text-base md:text-lg lg:text-xl leading-relaxed">
                                        学歴フィルターを壊せ。<br className="hidden md:block" />行動で証明する、君の真の価値。
                                    </p>
                                    <div className="mt-10 px-8 py-3 rounded-full border border-white text-black bg-white transition-all duration-300 text-sm md:text-base font-bold tracking-wide shadow-[0_0_20px_rgba(255,255,255,0.4)] group-hover:scale-105">
                                        学生向けエントランスへ
                                    </div>
                                </div>
                            </NextLink>

                            {/* Enterprise Entrance */}
                            <NextLink href="/enterprise" className="group flex-1 flex">
                                <div className="w-full relative p-8 md:p-14 bg-black/40 backdrop-blur-xl border border-ignitera-500/20 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:bg-black/60 hover:shadow-[0_20px_40px_rgba(255,77,0,0.2)] hover:border-ignitera-500/50 flex flex-col items-center justify-center text-center">
                                    {/* Neon ambient glow */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-ignitera-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-ignitera-400 to-orange-600 mb-6 tracking-tight drop-shadow-[0_0_15px_rgba(255,77,0,0.3)] group-hover:drop-shadow-[0_0_25px_rgba(255,77,0,0.6)] transition-all duration-500 relative z-10">
                                        For Enterprise
                                    </h2>
                                    <p className="text-zinc-400 group-hover:text-zinc-300 font-light text-base md:text-lg lg:text-xl leading-relaxed relative z-10 transition-colors">
                                        見落とされた『隠れた天才』を。<br className="hidden md:block" />行動ログが導く次世代の採用基盤。
                                    </p>
                                    <div className="mt-10 px-8 py-3 rounded-full border border-orange-400 text-white bg-orange-600 transition-all duration-300 text-sm md:text-base font-bold tracking-wide shadow-[0_0_20px_rgba(249,115,22,0.6)] group-hover:scale-105 relative z-10">
                                        企業向けエントランスへ
                                    </div>
                                </div>
                            </NextLink>

                        </div>
                    </FadeIn>
                </section>
            </motion.main>
        </>
    );
}
