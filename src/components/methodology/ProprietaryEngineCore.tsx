"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ProprietaryEngineCore() {
    const [inputNodes, setInputNodes] = useState<{ id: number, top: string, left: string, delay: number, duration: number, size: number }[]>([]);

    useEffect(() => {
        setInputNodes(Array.from({ length: 40 }).map((_, i) => ({
            id: i,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 10}%`,
            delay: Math.random() * 2,
            duration: 1.5 + Math.random() * 2,
            size: Math.random() * 3 + 1,
        })));
    }, []);

    return (
        <section className="mt-32 mb-40 relative px-4 text-center">
            {/* Minimalist Copywriting */}
            <h2 className="text-3xl md:text-5xl font-medium mb-6 tracking-tight text-white glow-text">
                Proprietary Evaluation Engine.
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed mb-24 max-w-4xl mx-auto">
                数千に及ぶ無秩序な行動ログを、IGNITERA独自の多層解析アルゴリズムが瞬時にプロファイリング。<br className="hidden md:block" />
                学歴や表面的な経歴では決して測れない「真の熱量とポテンシャル」だけを抽出します。
            </p>

            {/* Visual Blackbox Flow UI */}
            <div className="relative w-full max-w-6xl mx-auto h-[400px] md:h-[300px] flex flex-col md:flex-row items-center justify-between mt-12">

                {/* --- LEFT: INPUT (Chaotic behavior logs) --- */}
                <div className="relative w-full md:w-1/3 h-32 md:h-full flex items-center mb-8 md:mb-0">
                    <div className="absolute inset-0 overflow-hidden mask-image-to-r">
                        {inputNodes.map((node) => (
                            <motion.div
                                key={node.id}
                                className="absolute bg-zinc-600 rounded-full"
                                style={{
                                    width: node.size,
                                    height: node.size,
                                    top: node.top,
                                    left: node.left,
                                }}
                                animate={{
                                    x: ["0%", "400%"],
                                    opacity: [0, 1, 0],
                                }}
                                transition={{
                                    duration: node.duration,
                                    repeat: Infinity,
                                    delay: node.delay,
                                    ease: "linear",
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Flow lines coming into the core */}
                <div className="hidden md:block absolute left-[30%] w-[10%] h-[2px] bg-gradient-to-r from-transparent via-zinc-600 to-ignitera-500/50 top-1/2 -translate-y-1/2" />

                {/* --- CENTER: THE BLACK BOX (Ignitera Engine) --- */}
                <div className="relative z-10 flex-shrink-0 mx-auto group">
                    {/* Glowing Aura Behind */}
                    <div className="absolute inset-0 bg-ignitera-500 rounded-full blur-[60px] opacity-40 group-hover:opacity-70 transition-opacity duration-1000 animate-pulse" />

                    {/* The Core Container (Hexagon / Diamond shape abstraction) */}
                    <motion.div
                        className="relative w-40 h-40 md:w-48 md:h-48 bg-black/80 backdrop-blur-2xl border border-white/10 flex items-center justify-center overflow-hidden rotate-45 shadow-[0_0_40px_rgba(255,77,0,0.4)]"
                        animate={{
                            boxShadow: ["0 0 20px rgba(255,77,0,0.3)", "0 0 60px rgba(255,77,0,0.6)", "0 0 20px rgba(255,77,0,0.3)"]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                        {/* Complex inner workings (blurred/abstract) */}
                        <div className="absolute inset-0 border-[0.5px] border-ignitera-500/30 m-4" />
                        <div className="absolute inset-0 border-[0.5px] border-ignitera-500/10 m-8 rotate-12" />

                        {/* High-speed data processing text overlay */}
                        <div className="absolute top-0 left-0 w-[200%] h-full flex flex-col justify-center -rotate-45 opacity-20 pointer-events-none">
                            <motion.div
                                className="font-mono text-[8px] text-ignitera-500 whitespace-nowrap"
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                            >
                                EVAL_ENGINE: RUNNING // MATCHING_VECTOR: COMPLETED // LOG_INGESTION: ACTIVE // 101010011101 // EVAL_ENGINE: RUNNING // MATCHING_VECTOR: COMPLETED // LOG_INGESTION: ACTIVE // 101010011101
                            </motion.div>
                            <motion.div
                                className="font-mono text-[8px] text-zinc-400 whitespace-nowrap mt-1"
                                animate={{ x: ["-50%", "0%"] }}
                                transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                            >
                                HASH_AUTH_VALID // ANOMALY_DETECT: FALSE // SIGNAL_STRENGTH: 99.9% // SYNC_PROTO: ENCRYPTED // HASH_AUTH_VALID // ANOMALY_DETECT: FALSE // SIGNAL_STRENGTH: 99.9% // SYNC_PROTO: ENCRYPTED
                            </motion.div>
                        </div>

                        {/* Center glowing dot (The Heart) */}
                        <div className="w-4 h-4 rounded-full bg-ignitera-500 shadow-[0_0_20px_#ff4d00]" />
                    </motion.div>
                </div>

                {/* Laser beam out to the right */}
                <div className="hidden md:block absolute right-[15%] w-[15%] h-[2px] bg-gradient-to-r from-ignitera-500 to-transparent top-1/2 -translate-y-1/2" />

                {/* --- RIGHT: OUTPUT (Refined Score/Potential) --- */}
                <div className="relative w-full md:w-1/3 h-32 md:h-full flex items-center justify-center md:justify-end mt-8 md:mt-0">
                    <motion.div
                        className="flex flex-col items-center justify-center relative p-8 glass-panel border border-white/10 rounded-xl"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-ignitera-500 to-transparent opacity-50" />
                        <span className="text-zinc-500 font-mono text-xs tracking-widest uppercase mb-2">IGNITERA Score</span>
                        <div className="text-5xl md:text-6xl font-normal text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] tracking-tighter">
                            98<span className="text-xl text-ignitera-500 ml-1">%</span>
                        </div>
                        <div className="text-xs text-green-400 font-mono mt-3 uppercase tracking-widest flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                            Elite Tier
                        </div>
                    </motion.div>
                </div>

            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .mask-image-to-r {
                    -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                }
            ` }} />
        </section>
    );
}
