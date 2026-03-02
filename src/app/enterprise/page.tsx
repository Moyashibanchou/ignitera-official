"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FadeIn from "@/components/shared/FadeIn";
import IntegrationsMarquee from "@/components/methodology/IntegrationsMarquee";
import ProprietaryEngineCore from "@/components/methodology/ProprietaryEngineCore";
import AdvancedStatusBoard from "@/components/methodology/AdvancedStatusBoard";
import Preloader from "@/components/shared/Preloader";
import EnterpriseRegistrationForm from "@/components/forms/EnterpriseRegistrationForm";

const AnimatedBackground = () => (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-black">
        {/* Glow Effects */}
        <div
            className="absolute top-[-10%] left-[10%] w-[60vw] h-[60vw] rounded-full mix-blend-screen blur-[150px] opacity-[0.2] bg-ignitera-500 will-change-transform"
        />
        <div
            className="absolute bottom-[-20%] right-[20%] w-[50vw] h-[50vw] rounded-full mix-blend-screen blur-[150px] opacity-[0.1] bg-[#ff4d00] will-change-transform"
        />
        {/* Grid dots */}
        <div className="absolute inset-0 opacity-[0.15]"
            style={{ backgroundImage: "radial-gradient(#3f3f46 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
    </div>
);

export default function EnterprisePage() {
    const [showPreloader, setShowPreloader] = useState(true);

    useEffect(() => {
        // Only run on initial load
        const timer = setTimeout(() => setShowPreloader(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {showPreloader && <Preloader />}
            <motion.main
                className="min-h-screen bg-transparent relative text-zinc-300 font-sans selection:bg-ignitera-500 selection:text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 1.5 }}
            >
                <AnimatedBackground />

                {/* Hero Section */}
                <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4 md:px-6 w-full max-w-7xl mx-auto pt-32 pb-24 relative z-10">
                    <FadeIn>
                        <div className="flex items-center gap-3 mb-8 justify-center">
                            <div className="w-2 h-2 rounded-full bg-ignitera-500 animate-pulse shadow-[0_0_15px_#ff4d00]" />
                            <p className="text-ignitera-500 font-mono tracking-[0.2em] text-sm uppercase drop-shadow-[0_0_8px_rgba(255,77,0,0.8)]">
                                For Enterprise
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2} className="w-full">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                            面接上手なだけの候補者に、<br className="md:hidden" />もう騙されない。
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <p className="text-lg md:text-2xl text-zinc-400 font-light max-w-4xl mx-auto leading-relaxed mt-6 mb-16">
                            たった数回の面接や履歴書では、候補者の真のポテンシャルは見抜けない。<br className="hidden md:block" />
                            IGNITERAは、学生の日常的な行動データから『本物の才能』を可視化し、<br className="hidden md:block" />
                            ミスマッチのない圧倒的な採用ROIを実現します。
                        </p>
                    </FadeIn>

                    {/* CTAs */}
                    <FadeIn delay={0.6} className="w-full">
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full max-w-xl mx-auto">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto px-10 py-5 bg-ignitera-500 hover:bg-ignitera-400 text-white rounded-full font-bold transition-all duration-300 shadow-[0_0_30px_rgba(255,77,0,0.4)] hover:shadow-[0_0_50px_rgba(255,77,0,0.8)] text-center text-base tracking-wide"
                            >
                                デモをリクエスト
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto px-10 py-5 bg-white/[0.05] backdrop-blur-md border border-white/10 hover:border-white/30 hover:bg-white/10 text-white rounded-full font-bold transition-all duration-300 text-center text-base tracking-wide"
                            >
                                資料ダウンロード
                            </motion.button>
                        </div>
                    </FadeIn>
                </section>

                {/* Integrations Section */}
                <section className="py-24 relative z-10 border-t border-white/5 bg-black/40 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                        <FadeIn>
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight glow-text">Seamless Integrations</h2>
                            <p className="text-zinc-400 font-light">日常のワークフローを妨げずに、多角的な行動データを収集。</p>
                        </FadeIn>
                    </div>
                    <FadeIn delay={0.2}>
                        <IntegrationsMarquee />
                    </FadeIn>
                </section>

                {/* The Core Engine UI Section */}
                <section className="py-32 relative z-10 border-t border-white/5 bg-black/60">
                    <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                        <FadeIn>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">他社が見落とす原石を発掘</h2>
                            <p className="text-zinc-400 font-light text-lg">学歴や面接スキルに隠れた、真の課題解決能力や熱量を持つ人材に直接アプローチ。</p>
                        </FadeIn>
                    </div>
                    <FadeIn delay={0.3}>
                        <ProprietaryEngineCore />
                    </FadeIn>
                </section>

                {/* Methodology / 16 Metrics Section */}
                <section className="py-32 relative z-10 border-t border-white/5 bg-[#030303]">
                    <div className="max-w-5xl mx-auto px-6">
                        <FadeIn>
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight glow-text">採用ミスマッチの劇的削減</h2>
                                <p className="text-zinc-400 font-light text-lg mb-8">
                                    行動ログに基づく客観的なステータス評価により、入社後の「こんなはずじゃなかった」をゼロへ。
                                </p>
                            </div>

                            <AdvancedStatusBoard />
                        </FadeIn>
                    </div>
                </section>

                <section className="py-24 relative z-10 border-t border-white/5 bg-[#050505]">
                    <div className="max-w-7xl mx-auto px-6">
                        <EnterpriseRegistrationForm />
                    </div>
                </section>

            </motion.main>
        </>
    );
}
