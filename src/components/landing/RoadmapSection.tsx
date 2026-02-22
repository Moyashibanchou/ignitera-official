"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const phases = [
    { id: 1, title: "Data Collection", desc: "プロジェクトにおける個人の行動履歴やコミットログをブロックチェーン上に記録し、改ざん不能なデータを蓄積します。" },
    { id: 2, title: "Skill Analytics", desc: "蓄積された実行ログをAIが解析。単なる「できる」ではなく、「どう解決したか」というプロセスから本質的なスキル曲線を抽出します。" },
    { id: 3, title: "Culture Matching", desc: "行動プロファイルと、企業の組織文化（Culture DNA）を独自のアルゴリズムで突合。表面的な面接では見抜けないカルチャーフィットをスコア化します。" },
    { id: 4, title: "Ignition (Hiring)", desc: "すべての検証が完了した候補者のみを企業へ接続。入社後ギャップゼロの、確実なオンボーディングを実現します。" }
];

// タイムラインの定数設定
const NODE_DURATION = 0.3; // フェーズの点灯時間
const LINE_DURATION = 1.0; // 線が伸びる時間
const PHASE_INTERVAL = NODE_DURATION + LINE_DURATION; // 1連鎖にかかる合計時間

export default function RoadmapSection() {
    const containerRef = useRef<HTMLElement>(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.1 });

    return (
        <section className="py-32 px-6 bg-white overflow-hidden" ref={containerRef}>
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-medium mb-6 tracking-tight text-[#3C4043]">
                        IGNITERA Process
                    </h2>
                    <p className="text-xl text-gray-500 font-light leading-relaxed">
                        データ駆動型の採用プロセスが、どのようにして
                        <br className="hidden md:block" />
                        ミスマッチのない最適なマッチングを生み出すのか。
                    </p>
                </div>

                <div className="relative">
                    {/* SVG Definitions for Glow Effects */}
                    <svg width="0" height="0" className="absolute">
                        <defs>
                            {/* 線全体に適用する光彩（Glow）フィルター */}
                            <filter id="glow-line" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="3" result="blur" />
                                <feMerge>
                                    <feMergeNode in="blur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                            {/* IGNITERAカラーのグラデーション */}
                            <linearGradient id="line-grad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#4285F4" />
                                <stop offset="50%" stopColor="#FBBC05" />
                                <stop offset="100%" stopColor="#FF4D00" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {phases.map((phase, i) => {
                        const isLast = i === phases.length - 1;

                        // Strict timeline sync (コンマ秒での連鎖計算)
                        const nodeStartTime = i * PHASE_INTERVAL;
                        const lineStartTime = nodeStartTime + NODE_DURATION;

                        return (
                            <div key={phase.id} className="relative flex items-start group">
                                {/* タイムラインの線とノードのコンテナ (左側) */}
                                <div className="relative flex flex-col items-center mr-8 md:mr-12 shrink-0 h-full">

                                    {/* 点 (Node) */}
                                    <div className="relative z-10 flex items-center justify-center w-12 h-12">
                                        {/* ベースの薄いグレーのノード (Google Grey) */}
                                        <div className="absolute w-4 h-4 rounded-full bg-[#E8EAED]" />

                                        {/* 点灯時の波紋（Ripple）エフェクト */}
                                        <motion.div
                                            className="absolute w-full h-full rounded-full bg-[#FF4D00] opacity-0"
                                            initial={{ scale: 0.5, opacity: 0 }}
                                            animate={isInView ? { scale: [0.5, 1.8, 2.5], opacity: [0, 0.4, 0] } : {}}
                                            transition={{ duration: 0.8, delay: nodeStartTime, ease: "easeOut" }}
                                        />

                                        {/* アクティブ時のカラーノード (発火・ポップアップ) */}
                                        <motion.div
                                            className="absolute w-4 h-4 rounded-full bg-[#FF4D00] shadow-[0_0_15px_rgba(255,77,0,0.8)]"
                                            initial={{ scale: 0 }}
                                            animate={isInView ? { scale: [0, 1.4, 1] } : {}}
                                            transition={{ duration: NODE_DURATION, delay: nodeStartTime, type: "spring", stiffness: 300, damping: 20 }}
                                        />

                                        {/* Googleカラーのアクセント（内側の白い点） */}
                                        <motion.div
                                            className="absolute w-1.5 h-1.5 rounded-full bg-white"
                                            initial={{ scale: 0 }}
                                            animate={isInView ? { scale: 1 } : {}}
                                            transition={{ duration: 0.2, delay: nodeStartTime + 0.1 }}
                                        />
                                    </div>

                                    {/* 次のフェーズへ繋がる線 (SVG Line) */}
                                    {!isLast && (
                                        <div className="relative w-[20px] flex justify-center h-32 md:h-40">
                                            {/* 発光する線と背景のグレー線用のSVGキャンバス */}
                                            <svg className="absolute w-[20px] h-full overflow-visible" viewBox="0 0 20 100" preserveAspectRatio="none">
                                                {/* 未到達の薄いグレーの線 (Google Grey) */}
                                                <line x1="10" y1="0" x2="10" y2="100" stroke="#E8EAED" strokeWidth="2" />

                                                {/* pathLengthで徐々に描画される光る線 */}
                                                <motion.line
                                                    x1="10" y1="0" x2="10" y2="100"
                                                    stroke="url(#line-grad)"
                                                    strokeWidth="4"
                                                    filter="url(#glow-line)"
                                                    initial={{ pathLength: 0 }}
                                                    animate={isInView ? { pathLength: 1 } : {}}
                                                    transition={{ duration: LINE_DURATION, delay: lineStartTime, ease: "linear" }}
                                                />
                                            </svg>

                                            {/* 先端を走る発光スパーク */}
                                            {isInView && (
                                                <motion.div
                                                    className="absolute left-1/2 w-4 h-4 -ml-[8px] rounded-full mix-blend-screen pointer-events-none"
                                                    style={{
                                                        background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,77,0,0.8) 50%, rgba(66,133,244,0) 100%)",
                                                        boxShadow: "0 0 15px #FF4D00, 0 0 30px #4285F4"
                                                    }}
                                                    initial={{ top: "0%", opacity: 0, scale: 0 }}
                                                    animate={{
                                                        top: ["0%", "100%"],
                                                        opacity: [0, 1, 1, 0],
                                                        scale: [0, 1.2, 1.2, 0]
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
                                    className="pb-12 md:pb-16 pt-1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.5, delay: nodeStartTime + 0.1, ease: "easeOut" }}
                                >
                                    <p className="text-sm font-medium text-[#4285F4] uppercase tracking-wider mb-2">Phase {phase.id}</p>
                                    <h3 className="text-xl md:text-2xl font-medium text-[#3C4043] mb-4">{phase.title}</h3>
                                    <p className="text-gray-500 font-light leading-relaxed max-w-2xl">
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
