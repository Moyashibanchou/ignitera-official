"use client";

import FadeIn from "@/components/shared/FadeIn";
import TextAnimatedHero from "@/components/shared/TextAnimatedHero";
import ShinyButton from "@/components/shared/ShinyButton";
import React from "react";
import IgnitingTorchIcon from "@/components/shared/IgnitingTorchIcon";
import RoadmapSection from "@/components/landing/RoadmapSection";
import { motion } from "framer-motion";
import Preloader from "@/components/shared/Preloader";
import { Link, Cpu, Sparkles } from "lucide-react";

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
        const timer = setTimeout(() => setShowPreloader(false), 3000);
        return () => clearTimeout(timer);
    }, []);

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

                    {/* Value Proposition Cards */}
                    <FadeIn delay={0.8} className="w-full mt-32 px-4 md:px-6">
                        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                {
                                    id: "01",
                                    title: "CONNECT",
                                    desc: "日常の行動ログをシームレスに同期。",
                                    icon: Link
                                },
                                {
                                    id: "02",
                                    title: "ANALYZE",
                                    desc: "独自のIGNITERAエンジンが多角的に解析。",
                                    icon: Cpu
                                },
                                {
                                    id: "03",
                                    title: "DISCOVER",
                                    desc: "学歴の裏に隠れた、真のポテンシャルを発見。",
                                    icon: Sparkles
                                }
                            ].map((item, i) => (
                                <div key={i} className="bg-white/[0.02] border border-white/5 backdrop-blur-md rounded-2xl p-8 hover:bg-white/[0.04] hover:border-white/10 transition-all group">
                                    <div className="flex justify-between items-start mb-12">
                                        <div className="w-12 h-12 rounded-full bg-ignitera-500/10 flex items-center justify-center border border-ignitera-500/20 group-hover:scale-110 transition-transform">
                                            <item.icon className="w-5 h-5 text-ignitera-500" />
                                        </div>
                                        <span className="text-zinc-600 font-mono text-sm tracking-widest">{item.id}</span>
                                    </div>
                                    <h3 className="text-xl font-medium tracking-wide text-white mb-3">{item.title}</h3>
                                    <p className="text-zinc-400 font-light text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </FadeIn>

                    {/* Blackbox Dashboard CTA */}
                    <FadeIn delay={1.0} className="w-full mt-12 px-4 md:px-6 mb-20">
                        <div className="max-w-6xl mx-auto relative group rounded-2xl md:rounded-[2rem] overflow-hidden">
                            {/* Abstract Ambient Glow Behind */}
                            <div className="absolute inset-0 bg-gradient-to-t from-ignitera-500/10 to-transparent opacity-50 blur-2xl pointer-events-none" />

                            {/* The Mockup Frame */}
                            <div className="relative w-full aspect-[4/5] md:aspect-[21/9] bg-[#030303] border border-white/5 rounded-2xl overflow-hidden flex flex-col pt-12 items-center">
                                {/* Abstract wireframes inside (to be blurred) */}
                                <div className="absolute top-10 w-[90%] flex flex-wrap gap-4 justify-between opacity-10 blur-sm pointer-events-none">
                                    <div className="w-[20%] h-32 border border-white/5 rounded-xl bg-white/5"></div>
                                    <div className="w-[75%] h-64 border border-white/5 rounded-xl bg-gradient-to-br from-white/5 to-transparent"></div>
                                    <div className="w-[45%] h-48 border border-white/5 rounded-xl bg-white/5"></div>
                                    <div className="w-[45%] h-48 border border-white/5 rounded-xl bg-white/5"></div>
                                </div>

                                {/* Heavy glass mask overlay */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black backdrop-blur-xl z-10 pointer-events-none" />

                                {/* Glowing Top Edge Line inside the mask */}
                                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-ignitera-500/50 to-transparent shadow-[0_0_15px_rgba(255,77,0,0.8)] z-10 pointer-events-none" />

                                {/* CTA Content Centered over the glass */}
                                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center">
                                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] glow-text">
                                        The Engine in Action.
                                    </h3>
                                    <button className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 sm:px-12 sm:py-5 rounded-full font-bold shadow-[0_0_40px_rgba(255,77,0,0.5)] hover:shadow-[0_0_60px_rgba(255,77,0,0.8)] transition-all duration-300 transform hover:-translate-y-1 tracking-wide uppercase text-sm md:text-base cursor-pointer">
                                        デモ画面をリクエスト (Request a Demo)
                                    </button>
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
                                    <ul className="space-y-6 text-zinc-400 font-light flex flex-col">
                                        <li className="flex flex-col md:flex-row items-center gap-3 opacity-60 grayscale"><IgnitingTorchIcon isLit={false} /> <span className="pt-0.5 text-center md:text-left">学歴（フィルタリング）</span></li>
                                        <li className="flex flex-col md:flex-row items-center gap-3 opacity-60 grayscale"><IgnitingTorchIcon isLit={false} /> <span className="pt-0.5 text-center md:text-left">ガクチカ（装飾された経験）</span></li>
                                        <li className="flex flex-col md:flex-row items-center gap-3 opacity-60 grayscale"><IgnitingTorchIcon isLit={false} /> <span className="pt-0.5 text-center md:text-left">面接（口頭ベースの印象）</span></li>
                                    </ul>
                                    <p className="mt-8 text-sm text-red-400 font-medium">結果：行動データが完全に欠如し、ミスマッチが多発。</p>
                                </GlassCard>

                                <GlassCard isPrimary={true}>
                                    <h3 className="text-sm font-medium text-ignitera-500 mb-6 uppercase tracking-wider border-b border-white/10 pb-2 drop-shadow-[0_0_8px_rgba(255,77,0,0.5)]">IGNITERA Model</h3>
                                    <motion.ul
                                        className="space-y-6 text-zinc-300 font-light flex flex-col"
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.1, margin: "50px" }}
                                        variants={{ visible: { transition: { staggerChildren: 1.2 } } }}
                                    >
                                        <motion.li
                                            className="flex flex-col md:flex-row items-center gap-3"
                                            variants={{ hidden: {}, visible: {} }}
                                        >
                                            <IgnitingTorchIcon isLit={true} /> <span className="pt-0.5 font-medium text-white text-center md:text-left">プロジェクト実行ログ</span>
                                        </motion.li>
                                        <motion.li
                                            className="flex flex-col md:flex-row items-center gap-3"
                                            variants={{ hidden: {}, visible: {} }}
                                        >
                                            <IgnitingTorchIcon isLit={true} /> <span className="pt-0.5 font-medium text-white text-center md:text-left">継続的なスキル成長曲線</span>
                                        </motion.li>
                                        <motion.li
                                            className="flex flex-col md:flex-row items-center gap-3"
                                            variants={{ hidden: {}, visible: {} }}
                                        >
                                            <IgnitingTorchIcon isLit={true} /> <span className="pt-0.5 font-medium text-white text-center md:text-left">組織との文化適合スコア</span>
                                        </motion.li>
                                    </motion.ul>
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
