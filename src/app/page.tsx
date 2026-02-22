"use client";

import FadeIn from "@/components/shared/FadeIn";
import TextAnimatedHero from "@/components/shared/TextAnimatedHero";
import ShinyButton from "@/components/shared/ShinyButton";
import React from "react";
import IgnitingTorchIcon from "@/components/shared/IgnitingTorchIcon";
import RoadmapSection from "@/components/landing/RoadmapSection";
import { motion } from "framer-motion";

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

export default function Home() {
    return (
        <main className="min-h-screen bg-transparent relative text-zinc-300 font-sans selection:bg-ignitera-500 selection:text-white">
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

                <div>
                    <TextAnimatedHero />
                </div>

                <FadeIn delay={0.4}>
                    <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed mt-4">
                        「学歴・ガクチカ・面接」から「データ・証明・信頼」へ。<br />
                        評価基準のパラダイムを変革する。
                    </p>
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
                                    <li className="flex items-center gap-3"><IgnitingTorchIcon isLit={true} delay={0.2} /> <span className="pt-0.5 font-medium text-white">プロジェクト実行ログ</span></li>
                                    <li className="flex items-center gap-3"><IgnitingTorchIcon isLit={true} delay={0.5} /> <span className="pt-0.5 font-medium text-white">継続的なスキル成長曲線</span></li>
                                    <li className="flex items-center gap-3"><IgnitingTorchIcon isLit={true} delay={0.8} /> <span className="pt-0.5 font-medium text-white">組織との文化適合スコア</span></li>
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
        </main>
    );
}
