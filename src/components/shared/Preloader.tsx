"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const textLogs = [
    "> FETCHING BEHAVIOR LOGS...",
    "> ANALYZING 4-LAYER METRICS...",
    "> OPTIMIZING EVALUATION DATA...",
    "> CALIBRATING IGNITION CORE...",
    "> SYNCING COMPLETE."
];

export default function Preloader() {
    const [isVisible, setIsVisible] = useState(true);
    const [phase, setPhase] = useState(0);
    const [textIndex, setTextIndex] = useState(0);

    // Phase 0: HUD Grid & Nodes (0s - 1s)
    // Phase 1: High speed parsing (1s - 2.2s)
    // Phase 2: SYSTEM ONLINE (2.2s - 3s)
    // Hide: Preloader exits at 3s

    useEffect(() => {
        const t1 = setTimeout(() => setPhase(1), 1000);
        const t2 = setTimeout(() => setPhase(2), 2200);
        const t3 = setTimeout(() => setIsVisible(false), 3000);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
        };
    }, []);

    useEffect(() => {
        if (phase === 1) {
            const interval = setInterval(() => {
                setTextIndex((prev) => Math.min(prev + 1, textLogs.length - 1));
            }, 250);
            return () => clearInterval(interval);
        }
    }, [phase]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-transparent pointer-events-none"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
                >
                    {/* Top Top Split Door for scanning line effect */}
                    <motion.div
                        className="absolute top-0 left-0 w-full bg-[#030303]/95 backdrop-blur-[20px] border-b border-ignitera-500/20"
                        initial={{ height: "50%" }}
                        exit={{ height: "0%", opacity: 0 }}
                        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
                    />
                    {/* Bottom Split Door */}
                    <motion.div
                        className="absolute bottom-0 left-0 w-full bg-[#030303]/95 backdrop-blur-[20px] border-t border-ignitera-500/20"
                        initial={{ height: "50%" }}
                        exit={{ height: "0%", opacity: 0 }}
                        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
                    />

                    {/* SVG HUD Grid & Lines */}
                    <motion.svg className="absolute inset-0 w-full h-full opacity-40 mix-blend-screen" xmlns="http://www.w3.org/2000/svg">
                        {/* Base Hexagon Grid */}
                        <polygon
                            points="50,0 100,25 100,75 50,100 0,75 0,25"
                            className="stroke-zinc-800"
                            fill="none" strokeWidth="0.5"
                            style={{ transform: "translate(calc(50vw - 150px), calc(50vh - 150px)) scale(3)" }}
                        />
                        <polygon
                            points="50,0 100,25 100,75 50,100 0,75 0,25"
                            className="stroke-zinc-800"
                            fill="none" strokeWidth="0.5"
                            style={{ transform: "translate(calc(50vw - 250px), calc(50vh - 250px)) scale(5)" }}
                        />

                        {/* Animated Glowing Hexagon Path */}
                        <motion.polygon
                            points="50,0 100,25 100,75 50,100 0,75 0,25"
                            stroke="#FF4D00"
                            fill="none" strokeWidth="2"
                            strokeDasharray="100 300"
                            initial={{ strokeDashoffset: 400 }}
                            animate={{ strokeDashoffset: phase >= 1 ? 0 : 400 }}
                            transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                            style={{ transform: "translate(calc(50vw - 150px), calc(50vh - 150px)) scale(3)" }}
                        />

                        {/* Data Nodes */}
                        <circle cx="calc(50vw)" cy="calc(50vh - 150px)" r="3" fill="#FF4D00" className="animate-pulse shadow-[0_0_10px_#FF4D00]" />
                        <circle cx="calc(50vw - 130px)" cy="calc(50vh + 75px)" r="2.5" fill="#FF4D00" className="animate-pulse shadow-[0_0_10px_#FF4D00]" style={{ animationDelay: '0.3s' }} />
                        <circle cx="calc(50vw + 130px)" cy="calc(50vh + 75px)" r="2.5" fill="#FF4D00" className="animate-pulse shadow-[0_0_10px_#FF4D00]" style={{ animationDelay: '0.7s' }} />
                        <circle cx="calc(50vw)" cy="calc(50vh)" r="1.5" fill="#FF4D00" opacity="0.5" />

                        {/* Horizontal scanning lines */}
                        <motion.line
                            x1="0" y1="50vh" x2="100vw" y2="50vh"
                            stroke="#FF4D00" strokeWidth="1" opacity="0.2"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        />
                    </motion.svg>

                    {/* Central HUD Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center h-20 w-full px-6 mix-blend-screen">
                        <AnimatePresence mode="wait">
                            {phase === 0 && (
                                <motion.p
                                    key="booting"
                                    className="font-mono text-zinc-500 text-xs md:text-sm tracking-[0.2em] text-center"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, filter: "blur(4px)" }}
                                    transition={{ duration: 0.4 }}
                                >
                                    [ INITIATING SECURE CONNECTION... ]
                                </motion.p>
                            )}

                            {phase === 1 && (
                                <motion.div
                                    key="parsing"
                                    className="font-mono text-orange-500 text-xs md:text-sm tracking-[0.1em] text-center w-full max-w-md text-left pl-8 md:pl-0 border-l-2 border-orange-500/50"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, filter: "blur(4px)" }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <p className="opacity-50 text-[10px] mb-1">DATA STREAM // PORT 4096</p>
                                    <p className="drop-shadow-[0_0_8px_rgba(255,77,0,0.8)]">{textLogs[textIndex]}</p>
                                </motion.div>
                            )}

                            {phase === 2 && (
                                <motion.div
                                    key="online"
                                    className="font-mono text-white text-xl md:text-4xl tracking-[0.3em] font-bold text-center drop-shadow-[0_0_20px_rgba(255,77,0,1)] flex items-center gap-4"
                                    initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                >
                                    <div className="w-2 h-6 md:h-10 bg-orange-500 mt-0.5" />
                                    [ SYSTEM ONLINE ]
                                    <div className="w-2 h-6 md:h-10 bg-orange-500 mt-0.5" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
