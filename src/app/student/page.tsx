"use client";

import React from "react";
import { motion } from "framer-motion";
import { SignUpButton } from "@clerk/nextjs";
import { ChevronRight, Zap, Target, Database } from "lucide-react";
import EvaluationCharts from "@/components/EvaluationCharts";

export default function StudentLandingPage() {
    return (
        <div className="min-h-screen bg-[#050505] relative text-zinc-300 font-sans selection:bg-orange-500 selection:text-white pt-32 pb-24 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[10%] w-[50vw] h-[50vw] rounded-full mix-blend-screen blur-[150px] opacity-[0.15] bg-orange-600" />
                <div className="absolute top-[40%] right-[-10%] w-[40vw] h-[40vw] rounded-full mix-blend-screen blur-[150px] opacity-[0.1] bg-cyan-600" />
                <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] rounded-full mix-blend-screen blur-[150px] opacity-[0.1] bg-fuchsia-600" />
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
                            <span className="block mb-2 text-zinc-400 text-2xl md:text-3xl font-bold tracking-widest drop-shadow-md">ガクチカは作るな。</span>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-500 drop-shadow-[0_0_25px_rgba(249,115,22,0.8)]">
                                ここで稼ぎながら、<br />真のポテンシャルを証明しろ。
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed mb-12 break-keep"
                    >
                        面接の1時間では伝わらないあなたの<span className="text-orange-400 font-bold">「本当の戦闘力」</span>を、<br />
                        実務を通じて45の行動データで完全可視化。<br />
                        次世代のタレントマネジメントがここから始まる。
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <SignUpButton mode="modal" fallbackRedirectUrl="/onboarding">
                            <button className="group relative inline-flex items-center justify-center gap-3 px-8 py-5 md:px-12 md:py-6 bg-orange-600/90 text-white rounded-full font-extrabold transition-all duration-300 shadow-[0_0_40px_rgba(249,115,22,0.5)] border border-orange-400 hover:bg-orange-500 hover:shadow-[0_0_60px_rgba(249,115,22,0.8)] hover:scale-105 overflow-hidden">
                                <span className="absolute inset-0 w-full h-full opacity-30 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                                <span className="relative z-10 text-lg md:text-2xl tracking-wide drop-shadow-md">無料でポテンシャルを証明する</span>
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
                        <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold text-sm tracking-widest mb-6 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                            <Zap className="w-4 h-4" />
                            NEXT-GEN EVALUATION
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                            あなたの価値を証明する、<br />3層・45項目の次世代評価エンジン
                        </h2>
                        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto break-keep">
                            行動・成長・価値観の3つのレイヤーから、あなたのスキルを立体的に解析します。<br />
                            主観を排したデータが、あなたの最強の武器になる。
                        </p>
                    </motion.div>

                    {/* Inject EvaluationCharts with a dark cyberpunk backdrop wrapper */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent blur-3xl rounded-[3rem] -z-10" />
                        <div className="relative bg-black/40 backdrop-blur-sm border border-white/5 rounded-[3rem] shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden pb-10">
                            <EvaluationCharts />
                        </div>
                    </div>
                </section>

                {/* 3. Steps Section */}
                <section className="mb-32 relative">
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent -translate-y-1/2 -z-10 hidden md:block" />

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                            圧倒的な成長と証明のサイクル
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                        <StepCard
                            number="01"
                            icon={<Target className="w-10 h-10 text-orange-400" />}
                            title="案件を獲得・遂行する"
                            description="実践的なプロジェクトに参画し、報酬を得ながらスキルを磨く。あなたの行動がすべての出発点。"
                            delay={0.1}
                        />
                        <StepCard
                            number="02"
                            icon={<Zap className="w-10 h-10 text-cyan-400" />}
                            title="運営とチームの双方向評価で実績がデータ化される"
                            description="関わったメンバーと運営からの360度評価により、あなたの「見えない強み」が客観的なスコアに変換される。"
                            delay={0.3}
                        />
                        <StepCard
                            number="03"
                            icon={<Database className="w-10 h-10 text-fuchsia-400" />}
                            title="蓄積されたデータが最強のポートフォリオになる"
                            description="45項目のステータスがあなたの価値を証明。優良企業からのスカウトや、より高単価な案件へと繋がる。"
                            delay={0.5}
                        />
                    </div>
                </section>

                {/* 4. Bottom CTA Section */}
                <section className="text-center bg-gradient-to-b from-orange-900/20 to-black/80 border border-orange-500/20 rounded-3xl p-10 md:p-20 shadow-[0_0_50px_rgba(249,115,22,0.15)] relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]" />
                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 blur-[100px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/20 blur-[100px] rounded-full pointer-events-none" />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10"
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
                            準備はいいか？<br />
                            あなたの実力を世界に見せつけろ。
                        </h2>
                        <p className="text-zinc-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
                            従来の就活システムはもう古い。圧倒的な行動量とデータで、真の価値を証明する準備ができたなら、今すぐ始めよう。
                        </p>

                        <SignUpButton mode="modal" fallbackRedirectUrl="/onboarding">
                            <button className="group relative inline-flex items-center justify-center gap-3 px-8 py-5 md:px-12 md:py-6 bg-orange-600 text-white rounded-full font-extrabold transition-all duration-300 shadow-[0_0_30px_rgba(249,115,22,0.6)] border border-orange-400 hover:bg-orange-500 hover:shadow-[0_0_50px_rgba(249,115,22,0.9)] hover:-translate-y-1 overflow-hidden">
                                <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,transparent_100%)]" />
                                <span className="relative z-10 text-lg md:text-2xl tracking-wide drop-shadow-md">無料でポテンシャルを証明する</span>
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
            <h3 className="text-lg md:text-xl font-bold text-white mb-4 leading-tight group-hover:text-orange-100 transition-colors">
                {title}
            </h3>
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-medium">
                {description}
            </p>
        </motion.div>
    );
}
