"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, Flame, Zap, Shield, Cpu } from "lucide-react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import Preloader from "@/components/shared/Preloader";
import StudentRegistrationForm from "@/components/forms/StudentRegistrationForm";

const AnimatedBackground = () => (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#0a0505]">
        {/* Aggressive Glow Effects */}
        <div
            className="absolute top-[-10%] left-[50%] -translate-x-1/2 w-[80vw] h-[60vw] rounded-full mix-blend-screen blur-[150px] opacity-[0.25] bg-orange-600 will-change-transform animate-pulse"
        />
        <div
            className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full mix-blend-screen blur-[120px] opacity-[0.2] bg-red-600 will-change-transform"
        />
        {/* Grid dots */}
        <div className="absolute inset-0 opacity-[0.1]"
            style={{ backgroundImage: "radial-gradient(#ff4d00 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
    </div>
);

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 100, damping: 15 }
    }
};

const PlayerCard = () => {
    const statusData = [
        { subject: 'Passion (熱量)', A: 98, fullMark: 100 },
        { subject: 'Logic (論理)', A: 92, fullMark: 100 },
        { subject: 'Execution (実行力)', A: 85, fullMark: 100 },
        { subject: 'Creativity (創造性)', A: 88, fullMark: 100 },
    ];

    return (
        <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="w-full max-w-lg mx-auto bg-white/5 backdrop-blur-xl border border-orange-500/30 rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(255,77,0,0.15)] relative p-8"
        >
            {/* Cyberpunk accents */}
            <div className="absolute top-0 right-10 w-24 h-1 bg-orange-500 shadow-[0_0_10px_rgba(255,77,0,0.8)]" />
            <div className="absolute bottom-10 -left-1 w-2 h-16 bg-red-500" />

            <div className="flex justify-between items-start mb-10 border-b border-white/10 pb-6">
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center shadow-[0_0_20px_rgba(255,77,0,0.5)]">
                        <Cpu className="w-8 h-8 text-white" />
                    </div>
                    <div>
                        <div className="text-xs text-orange-400 font-mono tracking-widest mb-1">ID: IGN-8842</div>
                        <h3 className="text-2xl font-bold text-white tracking-tight">STUDENT_NAME</h3>
                    </div>
                </div>
                <div className="flex flex-col items-end">
                    <div className="text-xs text-zinc-500 font-mono">GLOBAL RANK</div>
                    <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-600 drop-shadow-[0_0_5px_rgba(255,77,0,0.8)]">S</div>
                </div>
            </div>

            <div className="w-full h-[250px] mb-6 mt-4">
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={statusData}>
                        <PolarGrid stroke="#333" />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#9ca3af', fontSize: 12, fontWeight: 500 }} />
                        <Radar
                            name="Skill"
                            dataKey="A"
                            stroke="#f97316"
                            fill="#f97316"
                            fillOpacity={0.4}
                            style={{ filter: 'drop-shadow(0 0 10px rgba(249,115,22,0.8))' }}
                        />
                    </RadarChart>
                </ResponsiveContainer>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center text-xs font-mono text-zinc-500">
                <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-orange-500/50" />
                    <span>VERIFIED BY LOGS</span>
                </div>
                <div>Lv. 24</div>
            </div>
        </motion.div>
    );
};

export default function StudentsPage() {
    const [showPreloader, setShowPreloader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShowPreloader(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {showPreloader && <Preloader />}
            <motion.main
                className="min-h-screen bg-transparent relative text-zinc-300 font-sans selection:bg-orange-500 selection:text-white pb-32 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 1.5 }}
            >
                <AnimatedBackground />

                {/* Hero Section */}
                <section className="pt-32 md:pt-48 pb-20 px-4 md:px-6 w-full max-w-full md:max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.8 }}
                    >
                        <span className="inline-block py-1 px-3 mb-8 text-sm font-bold text-orange-500 bg-orange-500/10 border border-orange-500/30 rounded-full tracking-wider shadow-[0_0_10px_rgba(249,115,22,0.3)]">
                            学生向け・完全無料
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 2.0 }}
                    >
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-red-600 mb-8 tracking-tighter drop-shadow-[0_0_25px_rgba(255,77,0,0.4)] leading-[1.1] break-words whitespace-normal">
                            履歴書の君ではなく、<br className="block md:hidden" />
                            日常の君を証明しろ。
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 2.2 }}
                    >
                        <p className="text-lg md:text-xl lg:text-2xl text-gray-400 font-light max-w-4xl mx-auto leading-loose mb-12 drop-shadow-md break-words whitespace-normal">
                            学歴や面接のテクニックだけで評価される時代は終わった。
                            IGNITERAは、君の日常の熱中、密かな努力、そして『隠れた才能』をデータ化し、
                            最高の企業へ直接届ける次世代のプラットフォームだ。
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 2.4 }}
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0px 0px 40px rgba(255, 77, 0, 0.8)" }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            className="px-8 py-5 md:px-12 md:py-6 bg-orange-600 text-white rounded-full font-black text-lg md:text-xl tracking-wide shadow-[0_0_20px_rgba(249,115,22,0.6)] border border-orange-400 relative overflow-hidden group"
                        >
                            {/* Inner shine */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[trace_1.5s_ease-in-out_infinite]" />
                            無料でステータスを可視化する
                            <span className="block text-xs font-mono font-normal opacity-80 mt-1 uppercase tracking-widest">Create Free Account</span>
                        </motion.button>
                    </motion.div>
                </section>

                {/* Gamification UI Section */}
                <section className="py-10 md:py-20 relative z-10 px-4">
                    <PlayerCard />
                </section>

                {/* 3 Steps Section */}
                <section className="py-24 md:py-32 relative z-10 px-4 md:px-6 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">君がやるべきことは、<br className="md:hidden" />たったこれだけ。</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full shadow-[0_0_10px_rgba(255,77,0,0.5)]" />
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
                    >
                        {[
                            {
                                step: "01",
                                title: "CONNECT",
                                subtitle: "繋ぐ",
                                desc: "GitHubやNotionなど、いつものツールを連携。",
                                icon: Link,
                                color: "text-blue-400",
                                bg: "bg-blue-500/10",
                                border: "border-blue-500/20"
                            },
                            {
                                step: "02",
                                title: "BREAK RULES",
                                subtitle: "学歴フィルターを破壊する",
                                desc: "見栄えの良い経歴ではなく、実際の行動ログが君の価値になる。",
                                icon: Flame,
                                color: "text-orange-500",
                                bg: "bg-orange-500/10",
                                border: "border-orange-500/30",
                                glow: true
                            },
                            {
                                step: "03",
                                title: "BE AUTHENTIC",
                                subtitle: "ありのままでスカウトが届く",
                                desc: "偽りの自己PRは不要。君が夢中になっていることが、最強の武器に変わる。",
                                icon: Zap,
                                color: "text-amber-400",
                                bg: "bg-amber-400/10",
                                border: "border-amber-400/20"
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                className={`relative p-8 rounded-3xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:bg-white/[0.05] transition-all duration-300 flex flex-col items-center text-center group ${item.glow ? 'hover:shadow-[0_0_30px_rgba(255,77,0,0.15)] hover:border-orange-500/50' : ''}`}
                            >
                                <div className="absolute top-4 left-6 text-6xl font-black text-white/[0.03] pointer-events-none group-hover:text-white/[0.05] transition-colors">{item.step}</div>

                                <div className={`w-16 h-16 rounded-2xl ${item.bg} ${item.border} border border-solid flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <item.icon className={`w-8 h-8 ${item.color}`} />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2 tracking-wide group-hover:text-orange-400 transition-colors uppercase">{item.title}</h3>
                                <div className={`text-sm font-bold mb-4 tracking-widest ${item.color}`}>{item.subtitle}</div>
                                <p className="text-zinc-400 font-medium leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                <section className="py-24 md:py-32 relative z-10 px-4 md:px-6 w-full max-w-7xl mx-auto">
                    <StudentRegistrationForm />
                </section>

                {/* Floating CTA for Mobile */}
                <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] z-50 md:hidden flex justify-center pb-safe">
                    <a
                        href="https://forms.gle/syB5oz3tyPuV4k4v8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-4 bg-orange-600 text-white font-bold text-center rounded-full shadow-[0_0_20px_rgba(249,115,22,0.6)] border border-orange-400 tracking-wide"
                    >
                        無料で登録する
                    </a>
                </div>
            </motion.main>
        </>
    );
}
