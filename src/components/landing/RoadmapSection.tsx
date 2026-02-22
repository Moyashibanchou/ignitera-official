"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const phases = [
    { id: 1, title: "Data Collection", desc: "プロジェクトにおける個人の行動履歴やコミットログをブロックチェーン上に記録し、改ざん不能なデータを蓄積します。" },
    { id: 2, title: "Skill Analytics", desc: "蓄積された実行ログをAIが解析。単なる「できる」ではなく、「どう解決したか」というプロセスから本質的なスキル曲線を抽出します。" },
    { id: 3, title: "Culture Matching", desc: "行動プロファイルと、企業の組織文化（Culture DNA）を独自のアルゴリズムで突合。表面的な面接では見抜けないカルチャーフィットをスコア化します。" },
    { id: 4, title: "Ignition (Hiring)", desc: "すべての検証が完了した候補者のみを企業へ接続。入社後ギャップゼロの、確実なオンボーディングを実現します。" }
];

const NODE_DURATION = 0.3;
const LINE_DURATION = 1.0;
const PHASE_INTERVAL = NODE_DURATION + LINE_DURATION;

export default function RoadmapSection() {
    const containerRef = useRef<HTMLElement>(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.1 });

    return (
        <section className="py-32 px-6 bg-[#050505] overflow-hidden border-t border-white/5 relative" ref={containerRef}>
            <div className="absolute inset-0 opacity-[0.2]" style={{ backgroundImage: "radial-gradient(#27272a 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

            <div className="max-w-6xl mx-auto relative z-10 px-4">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-medium mb-6 tracking-tight text-white glow-text">
                        IGNITERA Process
                    </h2>
                    <p className="text-xl text-zinc-400 font-light leading-relaxed">
                        データ駆動型の採用プロセスが、どのようにして
                        <br className="hidden md:block" />
                        ミスマッチのない最適なマッチングを生み出すのか。
                    </p>
                </div>

                <div className="relative flex flex-col md:flex-row md:items-start md:justify-between w-full mt-12 gap-0 md:gap-4">
                    {/* SVG Definitions for Glow Effects */}
                    <svg width="0" height="0" className="absolute">
                        <defs>
                            <filter id="glow-neon" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="4" result="blur" />
                                <feMerge>
                                    <feMergeNode in="blur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                            <linearGradient id="fiber-grad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#ff4d00" stopOpacity="0" />
                                <stop offset="50%" stopColor="#ff4d00" stopOpacity="1" />
                                <stop offset="100%" stopColor="#ff4d00" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {phases.map((phase, i) => {
                        const isLast = i === phases.length - 1;
                        const nodeStartTime = i * PHASE_INTERVAL;

                        return (
                            <div key={phase.id} className="relative flex flex-row md:flex-col items-start group flex-1">
                                {/* タイムラインの線とノードのコンテナ */}
                                <div className="relative flex flex-col md:flex-row items-center w-auto mr-6 md:mr-0 md:mb-6 shrink-0 h-full md:h-auto md:w-full">

                                    {/* ノード */}
                                    <div className="relative z-10 flex items-center justify-center w-12 h-12 shrink-0">
                                        {/* ベースのノード */}
                                        <div className="absolute w-4 h-4 rounded-full bg-[#1A1A1A] border border-white/20" />

                                        {/* 点灯時の波紋（Ripple）エフェクト */}
                                        <motion.div
                                            className="absolute w-full h-full rounded-full bg-ignitera-500 opacity-0 mix-blend-screen"
                                            initial={{ scale: 0.5, opacity: 0 }}
                                            animate={isInView ? { scale: [0.5, 2, 3], opacity: [0, 0.4, 0] } : {}}
                                            transition={{ duration: 1, delay: nodeStartTime, ease: "easeOut" }}
                                        />

                                        {/* アクティブ時のカラーノード */}
                                        <motion.div
                                            className="absolute w-4 h-4 rounded-full bg-ignitera-500 shadow-[0_0_20px_rgba(255,77,0,0.8)]"
                                            initial={{ scale: 0 }}
                                            animate={isInView ? { scale: [0, 1.4, 1] } : {}}
                                            transition={{ duration: NODE_DURATION, delay: nodeStartTime, type: "spring", stiffness: 300, damping: 20 }}
                                        />
                                    </div>

                                    {/* ファイバーオプティックライン */}
                                    {!isLast && (
                                        <>
                                            {/* スマホ用（縦線） */}
                                            <div className="relative w-[2px] h-24 md:hidden bg-white/5 overflow-hidden my-2">
                                                {isInView && (
                                                    <motion.div
                                                        className="w-full h-[50px] bg-gradient-to-b from-transparent via-ignitera-500 to-transparent blur-[2px]"
                                                        initial={{ top: "-50px" }}
                                                        animate={{ top: "100%" }}
                                                        transition={{
                                                            duration: LINE_DURATION,
                                                            delay: nodeStartTime + NODE_DURATION,
                                                            ease: "linear",
                                                        }}
                                                        style={{ position: 'absolute' }}
                                                    />
                                                )}
                                            </div>

                                            {/* PC用（横線） */}
                                            <div className="hidden md:block relative h-[2px] w-full bg-white/5 overflow-hidden mx-4 flex-1">
                                                {isInView && (
                                                    <motion.div
                                                        className="h-full w-[100px] bg-gradient-to-r from-transparent via-ignitera-500 to-transparent blur-[2px]"
                                                        initial={{ left: "-100px" }}
                                                        animate={{ left: "100%" }}
                                                        transition={{
                                                            duration: LINE_DURATION,
                                                            delay: nodeStartTime + NODE_DURATION,
                                                            ease: "linear",
                                                        }}
                                                        style={{ position: 'absolute' }}
                                                    />
                                                )}
                                            </div>
                                        </>
                                    )}
                                </div>

                                {/* テキストコンテンツ */}
                                <motion.div
                                    className="pb-12 md:pb-0 pt-2 md:pt-0 md:pr-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: nodeStartTime + 0.1, ease: "easeOut" }}
                                >
                                    <p className="text-xs font-mono text-ignitera-500 uppercase tracking-widest mb-2">Phase {phase.id}</p>
                                    <h3 className="text-xl lg:text-2xl font-medium text-white mb-3 md:mb-4 pr-4">{phase.title}</h3>
                                    <p className="text-sm text-zinc-400 font-light leading-relaxed group-hover:text-zinc-300 transition-colors pr-2">
                                        {phase.desc}
                                    </p>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
