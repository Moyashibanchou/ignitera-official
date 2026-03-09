"use client";

import React from "react";
import { motion } from "framer-motion";
import { SignUpButton } from "@clerk/nextjs";
import { ChevronRight, Search, Zap, ShieldCheck } from "lucide-react";
import EvaluationCharts from "@/components/EvaluationCharts";

export default function CompanyLandingPage() {
    return (
        <div className="min-h-screen bg-[#050505] relative text-zinc-300 font-sans selection:bg-orange-500 selection:text-white pt-32 pb-24 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[10%] w-[50vw] h-[50vw] rounded-full mix-blend-screen blur-[150px] opacity-[0.1] bg-cyan-600" />
                <div className="absolute top-[40%] left-[-10%] w-[40vw] h-[40vw] rounded-full mix-blend-screen blur-[150px] opacity-[0.15] bg-blue-600" />
                <div className="absolute bottom-[-10%] right-[20%] w-[60vw] h-[60vw] rounded-full mix-blend-screen blur-[150px] opacity-[0.1] bg-indigo-600" />
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* 1. Hero Section */}
                <section className="text-center mb-32 pt-10 md:pt-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-tight mb-8">
                            <span className="block mb-2 text-zinc-400 text-2xl md:text-3xl font-bold tracking-widest drop-shadow-md">面接の嘘を見抜け。</span>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 drop-shadow-[0_0_25px_rgba(6,182,212,0.8)]">
                                実務データで証明された<br />『本物』だけを。
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed mb-12 break-keep"
                    >
                        「ガクチカ」という作られたストーリーはもういらない。<br className="hidden md:block" />
                        実際のプロジェクト遂行で蓄積された45の行動データから、<br className="hidden md:block" />
                        御社に最適なポテンシャル人材を圧倒的な精度でマッチングします。
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <SignUpButton mode="modal" fallbackRedirectUrl="/company/onboarding">
                            <button className="group relative inline-flex items-center justify-center gap-3 px-8 py-5 md:px-12 md:py-6 bg-cyan-600/90 text-white rounded-full font-extrabold transition-all duration-300 shadow-[0_0_40px_rgba(6,182,212,0.5)] border border-cyan-400 hover:bg-cyan-500 hover:shadow-[0_0_60px_rgba(6,182,212,0.8)] hover:scale-105 overflow-hidden">
                                <span className="absolute inset-0 w-full h-full opacity-30 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                                <span className="relative z-10 text-lg md:text-2xl tracking-wide drop-shadow-md">企業アカウントを無料登録</span>
                                <ChevronRight className="w-6 h-6 md:w-8 md:h-8 relative z-10 group-hover:translate-x-2 transition-transform drop-shadow-md" />
                            </button>
                        </SignUpButton>
                    </motion.div>
                </section>

                {/* 2. Showcase Section */}
                <section className="mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-bold text-sm tracking-widest mb-6 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                            <Zap className="w-4 h-4" />
                            DATA-DRIVEN RECRUITING
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                            履歴書では見えない<br className="md:hidden" />『45の真実』を可視化
                        </h2>
                        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto break-keep">
                            行動力、成長意欲、マインドセット。<br className="hidden md:block" />
                            実務を通じて運営とチームが評価した、嘘偽りのないリアルなデータを提供します。
                        </p>
                    </motion.div>

                    {/* Inject EvaluationCharts with a dark B2B cyberpunk backdrop */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent blur-3xl rounded-[3rem] -z-10" />
                        <div className="relative bg-black/40 backdrop-blur-sm border border-white/5 rounded-[3rem] shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden pb-10">
                            <EvaluationCharts />
                        </div>
                    </div>
                </section>

                {/* 3. Steps Section */}
                <section className="mb-32 relative">
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent -translate-y-1/2 -z-10 hidden md:block" />

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                            データに基づく、確実なマッチング
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                        <StepCard
                            number="01"
                            icon={<Search className="w-10 h-10 text-cyan-400" />}
                            title={<>データの閲覧・検索</>}
                            description="45項目のチャートから、自社のカルチャーに合う人材を絞り込み。データがすべてを語る、新しい検索体験。"
                            delay={0.1}
                        />
                        <StepCard
                            number="02"
                            icon={<Zap className="w-10 h-10 text-blue-400" />}
                            title={<>運営へのリクエスト</>}
                            description="気になる学生への業務委託や面談をIGNITERA運営に直接依頼。スカウトからエージェント対応までシームレスに。"
                            delay={0.3}
                        />
                        <StepCard
                            number="03"
                            icon={<ShieldCheck className="w-10 h-10 text-indigo-400" />}
                            title={<>リスクゼロでの協働</>}
                            description="まずは実務の小さなタスク単位からアサインし、適性を見極め。ミスマッチのない採用の最終形がここに。"
                            delay={0.5}
                        />
                    </div>
                </section>

                {/* 4. Bottom CTA Section */}
                <section className="text-center bg-gradient-to-b from-cyan-900/20 to-black/80 border border-cyan-500/20 rounded-3xl p-10 md:p-20 shadow-[0_0_50px_rgba(6,182,212,0.15)] relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]" />
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 blur-[100px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10"
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
                            次世代のタレントを、<br />
                            確実なデータで獲得せよ。
                        </h2>
                        <p className="text-zinc-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto break-keep">
                            面接の「カン」に頼る採用は終わり。<br className="hidden md:block" />
                            実務データという名の『真実』に基づく、新しい採用体験を今すぐ始めましょう。
                        </p>

                        <SignUpButton mode="modal" fallbackRedirectUrl="/company/onboarding">
                            <button className="group relative inline-flex items-center justify-center gap-3 px-8 py-5 md:px-12 md:py-6 bg-cyan-600 text-white rounded-full font-extrabold transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.6)] border border-cyan-400 hover:bg-cyan-500 hover:shadow-[0_0_50px_rgba(6,182,212,0.9)] hover:-translate-y-1 overflow-hidden">
                                <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,transparent_100%)]" />
                                <span className="relative z-10 text-lg md:text-2xl tracking-wide drop-shadow-md">企業アカウントを無料登録</span>
                                <ChevronRight className="w-6 h-6 md:w-8 md:h-8 relative z-10 group-hover:translate-x-2 transition-transform drop-shadow-md" />
                            </button>
                        </SignUpButton>
                    </motion.div>
                </section>
            </div>

            <style jsx global>{`
                @keyframes shimmer {
                    100% {
                        transform: translateX(100%);
                    }
                }
            `}</style>
        </div>
    );
}

function StepCard({ number, icon, title, description, delay }: { number: string, icon: React.ReactNode, title: React.ReactNode, description: string, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay }}
            className="h-full bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-3xl p-4 md:p-6 relative group hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden"
        >
            <div className="absolute top-0 right-8 -translate-y-1/2 text-6xl md:text-8xl font-black text-white/5 group-hover:text-white/10 transition-colors pointer-events-none font-mono">
                {number}
            </div>
            <div className="w-20 h-20 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center mb-8 shadow-inner group-hover:border-white/20 transition-colors">
                {icon}
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-4 leading-tight group-hover:text-cyan-100 transition-colors whitespace-normal break-keep">
                {title}
            </h3>
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-medium whitespace-normal break-keep break-words">
                {description}
            </p>
        </motion.div>
    );
}
