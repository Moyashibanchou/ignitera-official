"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const phases = [
    { phase: "Phase 1 : MVP", desc: "限定された企業と学生層でのクローズドβテスト。アルゴリズムの基礎データ収集・検証。" },
    { phase: "Phase 2 : Sales Org", desc: "初期テストの成功モデルを基にした、営業組織展開。アーリーアダプターへの直接導入とサクセス伴走。" },
    { phase: "Phase 3 : SaaS Standard", desc: "セルフサーブで導入・分析が完結する標準化SaaSのリリース。評価APIの一部公開。" },
    { phase: "Phase 4 : Social Infra", desc: "学歴・職歴に次ぐ、事実上の「第三の信頼情報インフラ」として社会全体へ浸透。" },
];

// Timeline constants
const NODE_DURATION = 0.3; // Point animation time
const LINE_DURATION = 1.2; // Line stretching time
const PHASE_INTERVAL = NODE_DURATION + LINE_DURATION;

export default function RoadmapTimeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.1 });

    return (
        <div className="relative mt-8" ref={containerRef}>
            {/* SVG Definitions for Glow Effects */}
            <svg width="0" height="0" className="absolute">
                <defs>
                    <filter id="glow-line" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <linearGradient id="line-grad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#4285F4" />
                        <stop offset="100%" stopColor="#FF4D00" />
                    </linearGradient>
                </defs>
            </svg>

            {phases.map((item, i) => {
                const isLast = i === phases.length - 1;

                // Strict timeline sync
                const nodeStartTime = i * PHASE_INTERVAL;
                const lineStartTime = nodeStartTime + NODE_DURATION;

                return (
                    <div key={i} className="relative flex items-start group">
                        {/* タイムラインの線とノードのコンテナ (左側) */}
                        <div className="relative flex flex-col items-center mr-6 shrink-0 h-full">

                            {/* 点 (Node) */}
                            <div className="relative z-10 flex items-center justify-center w-8 h-8">
                                {/* ベースのグレイノード (Google Grey) */}
                                <div className="absolute w-2.5 h-2.5 rounded-full bg-[#E8EAED]" />

                                {/* アクティブ時の波紋（Ripple） */}
                                <motion.div
                                    className="absolute w-full h-full rounded-full bg-[#FF4D00] opacity-0"
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    animate={isInView ? { scale: [0.5, 1.8, 2.8], opacity: [0, 0.4, 0] } : {}}
                                    transition={{ duration: 0.8, delay: nodeStartTime, ease: "easeOut" }}
                                />

                                {/* アクティブ時のカラーノード (Ignition) */}
                                <motion.div
                                    className="absolute w-3 h-3 rounded-full bg-[#FF4D00] shadow-[0_0_10px_rgba(255,77,0,0.8)]"
                                    initial={{ scale: 0 }}
                                    animate={isInView ? { scale: [0, 1.5, 1] } : {}}
                                    transition={{ duration: NODE_DURATION, delay: nodeStartTime, type: "spring", stiffness: 300, damping: 20 }}
                                />

                                {/* Googleカラーのアクセント（内側の白い点） */}
                                <motion.div
                                    className="absolute w-1 h-1 rounded-full bg-white"
                                    initial={{ scale: 0 }}
                                    animate={isInView ? { scale: 1 } : {}}
                                    transition={{ duration: 0.2, delay: nodeStartTime + 0.1 }}
                                />
                            </div>

                            {/* 次のフェーズへ繋がる線 (Line) */}
                            {!isLast && (
                                <div className="relative w-[16px] flex justify-center h-24 md:h-28">
                                    {/* SVG Container for the Line and Spark */}
                                    <svg className="absolute w-[8px] h-full overflow-visible" viewBox="0 0 8 100" preserveAspectRatio="none">
                                        {/* Background static gray line */}
                                        <line x1="4" y1="0" x2="4" y2="100" stroke="#E8EAED" strokeWidth="2" />

                                        {/* Animated glowing path */}
                                        <motion.line
                                            x1="4" y1="0" x2="4" y2="100"
                                            stroke="url(#line-grad)"
                                            strokeWidth="3"
                                            filter="url(#glow-line)"
                                            initial={{ pathLength: 0 }}
                                            animate={isInView ? { pathLength: 1 } : {}}
                                            transition={{ duration: LINE_DURATION, delay: lineStartTime, ease: "linear" }}
                                        />
                                    </svg>

                                    {/* Leading Spark (Light Point tracking the line) */}
                                    {isInView && (
                                        <motion.div
                                            className="absolute left-1/2 w-3 h-3 -ml-[6px] rounded-full mix-blend-screen"
                                            style={{
                                                background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,77,0,0.8) 40%, rgba(66,133,244,0) 80%)",
                                                boxShadow: "0 0 15px #FF4D00, 0 0 30px #4285F4"
                                            }}
                                            initial={{ top: "0%", opacity: 0, scale: 0 }}
                                            animate={{
                                                top: ["0%", "100%"],
                                                opacity: [0, 1, 1, 0],
                                                scale: [0, 1.5, 1.5, 0]
                                            }}
                                            transition={{
                                                duration: LINE_DURATION,
                                                delay: lineStartTime,
                                                ease: "linear",
                                                times: [0, 0.05, 0.95, 1]
                                            }}
                                        />
                                    )}
                                </div>
                            )}
                        </div>

                        {/* テキストコンテンツ (右側) */}
                        <motion.div
                            className="pb-10 pt-1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: nodeStartTime + 0.1, ease: "easeOut" }}
                        >
                            <h3 className="text-xl font-medium text-[#3C4043] mb-3">{item.phase}</h3>
                            <p className="text-gray-500 font-light text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    </div>
                );
            })}
        </div>
    );
}
