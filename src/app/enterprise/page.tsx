"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    const [isMainCtaVisible, setIsMainCtaVisible] = useState(false);
    const mainCtaRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => setShowPreloader(false), 2000);

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsMainCtaVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );
        if (mainCtaRef.current) {
            observer.observe(mainCtaRef.current);
        }

        return () => {
            clearTimeout(timer);
            if (mainCtaRef.current) observer.unobserve(mainCtaRef.current);
        };
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
                <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-4 md:px-6 w-full max-w-full md:max-w-7xl mx-auto pt-32 pb-24 relative z-10 overflow-hidden">
                    <FadeIn>
                        <div className="flex items-center gap-3 mb-8 justify-center">
                            <div className="w-2 h-2 rounded-full bg-ignitera-500 animate-pulse shadow-[0_0_15px_#ff4d00]" />
                            <p className="text-ignitera-500 font-mono tracking-[0.2em] text-sm uppercase drop-shadow-[0_0_8px_rgba(255,77,0,0.8)]">
                                For Enterprise
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2} className="w-full">
                        <span className="inline-block py-1 px-3 mb-8 text-sm font-bold text-orange-500 bg-orange-500/10 border border-orange-500/30 rounded-full tracking-wider shadow-[0_0_10px_rgba(249,115,22,0.3)]">
                            法人向け・初期費用無料
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-8 tracking-tight leading-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.1)] break-words whitespace-normal">
                            面接上手なだけの候補者に<br className="block md:hidden" />
                            もう騙されない。
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <p className="text-lg md:text-2xl text-gray-400 font-light max-w-4xl mx-auto leading-loose mt-6 mb-16 break-words whitespace-normal">
                            たった数回の面接や履歴書では、候補者の真のポテンシャルは見抜けない。
                            IGNITERAは、学生の日常的な行動データから『本物の才能』を可視化し、
                            ミスマッチのない圧倒的な採用ROIを実現します。
                        </p>
                    </FadeIn>

                    {/* CTAs */}
                    <FadeIn delay={0.6} className="w-full">
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full max-w-xl mx-auto">
                            <a
                                href="https://forms.gle/Lej96gQzpg1WQEUVA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto px-10 py-5 bg-orange-600 hover:bg-orange-500 text-white rounded-full font-bold transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.6)] border border-orange-400 text-center text-base tracking-wide inline-block hover:-translate-y-1"
                            >
                                デモをリクエスト
                            </a>

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

                <section ref={mainCtaRef} className="py-24 relative z-10 border-t border-white/5 bg-[#050505]">
                    <div className="max-w-7xl mx-auto px-6">
                        <EnterpriseRegistrationForm />
                    </div>
                </section>

                {/* Floating CTA for Mobile */}
                <AnimatePresence>
                    {!isMainCtaVisible && (
                        <motion.div
                            initial={{ opacity: 0, y: 50, x: "-50%", scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
                            exit={{ opacity: 0, y: 30, x: "-50%", scale: 0.8, filter: "blur(4px)" }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="fixed bottom-4 left-1/2 w-[90%] z-50 md:hidden flex justify-center pb-safe"
                        >
                            <a
                                href="https://forms.gle/Lej96gQzpg1WQEUVA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-4 bg-orange-600 text-white font-bold text-center rounded-full shadow-[0_0_20px_rgba(249,115,22,0.6)] border border-orange-400 tracking-wide"
                            >
                                企業向け登録へ進む
                            </a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.main>
        </>
    );
}
