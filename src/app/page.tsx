"use client";

import FadeIn from "@/components/shared/FadeIn";
import TextAnimatedHero from "@/components/shared/TextAnimatedHero";
import ShinyButton from "@/components/shared/ShinyButton";
import React from "react";
import IgnitingTorchIcon from "@/components/shared/IgnitingTorchIcon";
import RoadmapSection from "@/components/landing/RoadmapSection";
import { motion } from "framer-motion";
import Preloader from "@/components/shared/Preloader";

const AnimatedBackground = () => (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#050505]">
        {/* Glow Effects */}
        <motion.div
            className="absolute top-[-20%] left-[20%] w-[50vw] h-[50vw] rounded-full mix-blend-screen blur-[120px] opacity-[0.15] bg-ignitera-500"
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
            className="absolute bottom-[-10%] right-[10%] w-[40vw] h-[40vw] rounded-full mix-blend-screen blur-[150px] opacity-[0.1] bg-[#4285F4]"
            animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        {/* Grid dots */}
        <div className="absolute inset-0 opacity-[0.2]"
            style={{ backgroundImage: "radial-gradient(#3f3f46 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
    </div>
);

const GlassCard = ({ children, isPrimary = false }: { children: React.ReactNode, isPrimary?: boolean }) => {
    return (
        <div className={`group relative p-10 bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-[0_8px_40px_rgba(255,77,0,0.15)] ${isPrimary ? 'border-t-4 border-t-ignitera-500' : ''}`}>
            {/* Shimmer effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-ignitera-500 to-transparent -translate-x-full group-hover:animate-[trace_2s_linear_infinite]" />
                <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-transparent via-ignitera-500 to-transparent translate-x-full group-hover:animate-[trace-reverse_2s_linear_infinite]" />
                <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-transparent via-ignitera-500 to-transparent -translate-y-full group-hover:animate-[trace-y_2s_linear_infinite]" />
                <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-t from-transparent via-ignitera-500 to-transparent translate-y-full group-hover:animate-[trace-y-reverse_2s_linear_infinite]" />
            </div>

            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </div>
    );
};



import { useState, useEffect } from "react";

export default function Home() {
    const [showPreloader, setShowPreloader] = useState(true);

    useEffect(() => {
        // Only run on initial load
        const timer = setTimeout(() => setShowPreloader(false), 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {showPreloader && <Preloader />}
            <motion.main
                className="min-h-screen bg-transparent relative text-zinc-300 font-sans selection:bg-ignitera-500 selection:text-white"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 4.2 }}
            >
                <AnimatedBackground />
                <style>{`
                @keyframes trace { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
                @keyframes trace-reverse { 0% { transform: translateX(100%); } 100% { transform: translateX(-100%); } }
                @keyframes trace-y { 0% { transform: translateY(-100%); } 100% { transform: translateY(100%); } }
                @keyframes trace-y-reverse { 0% { transform: translateY(100%); } 100% { transform: translateY(-100%); } }
            `}</style>

                {/* Hero Section */}
                <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-6 max-w-5xl mx-auto">
                    <FadeIn>
                        <div className="flex items-center gap-3 mb-6 justify-center">
                            <div className="w-2 h-2 rounded-full bg-ignitera-500 animate-pulse shadow-[0_0_10px_#ff4d00]" />
                            <p className="text-ignitera-500 font-medium tracking-[0.2em] text-xs uppercase">Definition & Vision</p>
                        </div>
                    </FadeIn>

                    <div className="px-4 md:px-0">
                        <TextAnimatedHero />
                    </div>

                    <FadeIn delay={0.4}>
                        <p className="text-lg md:text-2xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed mt-4 px-4 md:px-0">
                            「学歴・ガクチカ・面接」から「データ・証明・信頼」へ。<br />
                            評価基準のパラダイムを変革する。
                        </p>
                    </FadeIn>

                    {/* Dual Entrance CTAs */}
                    <FadeIn delay={0.6} className="w-full px-4 md:px-0">
                        <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center mt-12 w-full max-w-md mx-auto md:max-w-none">
                            <a href="#" className="w-full md:w-auto px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-full font-medium transition-all duration-300 shadow-[0_0_20px_rgba(255,77,0,0.4)] hover:shadow-[0_0_30px_rgba(255,77,0,0.8)] text-center text-sm tracking-wide">
                                For Students / 学生の方へ
                            </a>
                            <a href="#" className="w-full md:w-auto px-8 py-4 bg-white/[0.03] backdrop-blur-md border border-white/20 hover:border-blue-400/80 hover:bg-blue-900/10 text-white rounded-full font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(96,165,250,0.4)] text-center text-sm tracking-wide shadow-lg">
                                For Companies / 企業の方へ
                            </a>
                        </div>
                    </FadeIn>

                    {/* Dashboard Wireframe Placeholder */}
                    <FadeIn delay={0.8} className="w-full mt-24 px-4 md:px-12">
                        <div className="w-full max-w-5xl mx-auto relative group">
                            {/* Background Ambient Glow */}
                            <div className="absolute inset-x-10 inset-y-0 bg-gradient-to-b from-ignitera-500/20 to-transparent blur-3xl opacity-40 transition-opacity duration-700 group-hover:opacity-60" />

                            <div className="relative w-full aspect-[4/3] md:aspect-[21/9] bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col hover:border-white/20 transition-colors duration-500">
                                {/* Window Header */}
                                <div className="h-10 border-b border-white/10 flex items-center px-4 gap-2 bg-black/40">
                                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-700/50" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-700/50" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-700/50" />
                                    <div className="ml-2 md:ml-4 text-[10px] text-zinc-500 font-mono flex-1 text-center pr-10 truncate">
                                        app.ignitera.io/dev_environment
                                    </div>
                                </div>
                                {/* Dashboard Wireframe Content */}
                                <div className="flex-1 p-6 relative flex flex-col items-center justify-center overflow-hidden">
                                    {/* Grid Background */}
                                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

                                    <div className="relative z-10 text-center">
                                        <h3 className="text-lg md:text-3xl font-medium text-white tracking-widest uppercase mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] glow-text">
                                            Dashboard UI in Development
                                        </h3>
                                        <p className="text-zinc-500 font-mono text-xs md:text-sm">Target Launch: 2026 Q3</p>
                                    </div>

                                    {/* Abstract blurred shapes mimicking charts */}
                                    <div className="absolute bottom-10 left-10 w-[40%] h-[30%] bg-[#4285F4]/10 blur-3xl rounded-full" />
                                    <div className="absolute top-10 right-10 w-[50%] h-[40%] bg-[#FF4D00]/10 blur-3xl rounded-full" />

                                    {/* Fake UI blocks */}
                                    <div className="absolute top-10 left-10 w-32 md:w-48 h-24 border border-white/5 bg-white/[0.01] rounded-lg hidden sm:block" />
                                    <div className="absolute bottom-10 right-10 w-48 md:w-64 h-32 border border-white/5 bg-white/[0.01] rounded-lg hidden sm:block" />
                                    <div className="absolute bottom-10 left-1/4 w-24 h-40 border border-white/5 bg-white/[0.01] rounded-lg hidden sm:block" />
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </section>

                {/* Problem Statement */}
                <section className="py-32 px-6 border-t border-white/5 relative bg-black/40 backdrop-blur-sm">
                    <div className="max-w-5xl mx-auto text-center">
                        <FadeIn>
                            <h2 className="text-3xl md:text-5xl font-medium mb-12 tracking-tight text-white glow-text">構造課題の指摘</h2>
                            <p className="text-xl text-zinc-400 font-light leading-relaxed mb-16 max-w-3xl mx-auto">
                                既存の評価モデルは、候補者の「過去の一点」と「面接でのアピール力」に依存しています。<br />
                                これは本質的な<strong className="font-medium text-white glow-text">「行動データ不在」</strong>の構造的バグです。
                            </p>
                        </FadeIn>

                        {/* Diagrams of Old vs New */}
                        <FadeIn delay={0.2}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                                <GlassCard>
                                    <h3 className="text-sm font-medium text-zinc-500 mb-6 uppercase tracking-wider border-b border-white/10 pb-2">The Old Model</h3>
                                    <ul className="space-y-4 text-zinc-400 font-light">
                                        <li className="flex items-center gap-3 opacity-60 grayscale"><IgnitingTorchIcon isLit={false} /> <span className="pt-0.5">学歴（フィルタリング）</span></li>
                                        <li className="flex items-center gap-3 opacity-60 grayscale"><IgnitingTorchIcon isLit={false} /> <span className="pt-0.5">ガクチカ（装飾された経験）</span></li>
                                        <li className="flex items-center gap-3 opacity-60 grayscale"><IgnitingTorchIcon isLit={false} /> <span className="pt-0.5">面接（口頭ベースの印象）</span></li>
                                    </ul>
                                    <p className="mt-8 text-sm text-red-400 font-medium">結果：行動データが完全に欠如し、ミスマッチが多発。</p>
                                </GlassCard>

                                <GlassCard isPrimary={true}>
                                    <h3 className="text-sm font-medium text-ignitera-500 mb-6 uppercase tracking-wider border-b border-white/10 pb-2 drop-shadow-[0_0_8px_rgba(255,77,0,0.5)]">IGNITERA Model</h3>
                                    <ul className="space-y-4 text-zinc-300 font-light">
                                        <li className="flex items-center gap-3"><IgnitingTorchIcon isLit={true} delay={0.5} /> <span className="pt-0.5 font-medium text-white">プロジェクト実行ログ</span></li>
                                        <li className="flex items-center gap-3"><IgnitingTorchIcon isLit={true} delay={1.5} /> <span className="pt-0.5 font-medium text-white">継続的なスキル成長曲線</span></li>
                                        <li className="flex items-center gap-3"><IgnitingTorchIcon isLit={true} delay={2.5} /> <span className="pt-0.5 font-medium text-white">組織との文化適合スコア</span></li>
                                    </ul>
                                    <p className="mt-8 text-sm text-green-400 font-medium">結果：事実とデータに基づく、透明で確実な評価。</p>
                                </GlassCard>
                            </div>
                        </FadeIn>
                    </div>
                </section>

                {/* Roadmap Section */}
                <RoadmapSection />

                {/* Solution Declaration */}
                <section className="py-40 px-6 backdrop-blur-sm relative border-t border-white/5 bg-[#050505]">
                    <div className="absolute inset-0 opacity-[0.2]" style={{ backgroundImage: "linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)", backgroundSize: "64px 64px" }} />

                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <FadeIn>
                            <h2 className="text-3xl md:text-5xl font-medium mb-10 tracking-tight text-white glow-text">
                                行動ログ基盤の文化適合型<br className="hidden md:block" />評価制度へのシフト
                            </h2>
                            <p className="text-xl text-zinc-400 font-light leading-relaxed mb-16">
                                私たちは、「人」を評価するのではなく、「行動の軌跡」を集積し、<br />
                                企業文化との親和性を算出する<strong className="font-medium text-white glow-text">『評価のインフラ』</strong>を提供します。
                            </p>
                            <ShinyButton href="/methodology" className="bg-ignitera-500 text-white rounded-full hover:bg-ignitera-400 shadow-[0_0_20px_0_rgba(255,77,0,0.4)] hover:shadow-[0_0_30px_rgba(255,77,0,0.6)]">
                                Explore Methodology
                            </ShinyButton>
                        </FadeIn>
                    </div>
                </section>
            </motion.main>
        </>
    );
}
