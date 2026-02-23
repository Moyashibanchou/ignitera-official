"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
    const [isVisible, setIsVisible] = useState(true);
    const [phase, setPhase] = useState(0);
    const [freq, setFreq] = useState("140.15");
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");
    const [text3, setText3] = useState("");

    // Phase 0: 0s - 1.5s (CALLING..., updating frequency)
    // Phase 1: 1.5s - 2.0s (CONNECTION SECURED pause)
    // Phase 2: 2.0s - 4.0s (Audio Waveform, Typewriter text, Dialog box)
    // Phase 3: 4.0s - 4.5s (CRT power off transition)

    useEffect(() => {
        const t1 = setTimeout(() => setPhase(1), 1500);
        const t2 = setTimeout(() => setPhase(2), 2000);
        const t3 = setTimeout(() => setPhase(3), 4000);
        const t4 = setTimeout(() => setIsVisible(false), 4500);
        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
    }, []);

    // Frequency randomizer
    useEffect(() => {
        if (phase === 0) {
            const interval = setInterval(() => {
                const randomFreq = (140 + Math.random() * 2).toFixed(2);
                setFreq(randomFreq);
            }, 60);
            return () => clearInterval(interval);
        } else {
            setFreq("140.85");
        }
    }, [phase]);

    // Typewriter
    useEffect(() => {
        if (phase >= 2) {
            const msg1 = "> TARGET: THE OLD MODEL.";
            const msg2 = "> EVALUATION ENGINE: ONLINE.";
            const msg3 = "> MISSION START.";

            let i1 = 0; let i2 = 0; let i3 = 0;
            const typeInterval = setInterval(() => {
                if (i1 < msg1.length) {
                    setText1(msg1.slice(0, i1 + 1));
                    i1++;
                } else if (i2 < msg2.length) {
                    setText2(msg2.slice(0, i2 + 1));
                    i2++;
                } else if (i3 < msg3.length) {
                    setText3(msg3.slice(0, i3 + 1));
                    i3++;
                } else {
                    clearInterval(typeInterval);
                }
            }, 30);
            return () => clearInterval(typeInterval);
        }
    }, [phase]);

    return (
        <AnimatePresence>
            {isVisible && (
                <div
                    className="fixed inset-0 z-[100] w-screen h-screen bg-black flex flex-col items-center justify-center font-mono pointer-events-none overflow-hidden"
                    style={{ fontFamily: "'JetBrains Mono', 'Fira Code', 'Space Mono', monospace" }}
                >
                    <AnimatePresence>
                        {phase < 3 && (
                            <motion.div
                                className="absolute inset-0 w-full h-full flex flex-col items-center justify-center"
                                // CRT Power-off Exit
                                exit={{
                                    scaleY: [1, 0.005, 0.005, 0],
                                    scaleX: [1, 1, 0, 0],
                                    opacity: [1, 1, 1, 0],
                                    filter: ["brightness(1)", "brightness(2)", "brightness(3)", "brightness(0)"]
                                }}
                                transition={{ duration: 0.5, times: [0, 0.3, 0.7, 1], ease: "easeInOut" }}
                                style={{ transformOrigin: "center" }}
                            >
                                {/* Background Noise & Vignette */}
                                <div
                                    className="absolute inset-0 opacity-[0.05] mix-blend-screen"
                                    style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}
                                />
                                <div
                                    className="absolute inset-0"
                                    style={{ background: "radial-gradient(circle at center point, transparent 30%, #000 100%)" }}
                                />

                                {/* Subtle Scanline Grid background */}
                                <div
                                    className="absolute inset-0 opacity-10"
                                    style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, #00FF41 2px, #00FF41 3px)" }}
                                />

                                {/* Moving Laser Scanline */}
                                <motion.div
                                    className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00FF41]/40 to-transparent mix-blend-screen shadow-[0_0_15px_rgba(0,255,65,0.6)]"
                                    animate={{ top: ["-10%", "110%"] }}
                                    transition={{ duration: 4, ease: "linear", repeat: Infinity }}
                                />

                                {/* Main UI Container */}
                                <div className="relative z-10 w-full max-w-5xl px-4 flex flex-col h-full justify-center md:h-auto gap-8">

                                    {/* Top Info Bar (CALLING / SECURED small indicators) */}
                                    <div className="flex justify-between items-center w-full px-4 text-[#00FF41]">
                                        <div className="text-[10px] md:text-sm tracking-widest opacity-60">
                                            SECURE COMM CHANNEL
                                        </div>
                                        {phase === 0 ? (
                                            <motion.div
                                                className="text-[10px] md:text-xs font-bold tracking-widest text-red-500 flex items-center gap-2 border border-red-500/30 px-2 py-1 bg-red-500/10 shadow-[0_0_10px_rgba(239,68,68,0.4)]"
                                                animate={{ opacity: [1, 0, 1] }}
                                                transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
                                            >
                                                <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                                                CALLING...
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                className="text-[10px] md:text-xs font-bold tracking-widest text-[#FF4D00] flex items-center gap-2 border border-[#FF4D00]/50 px-2 py-1 bg-[#FF4D00]/10 shadow-[0_0_15px_rgba(255,77,0,0.6)]"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                            >
                                                <div className="w-1.5 h-1.5 bg-[#FF4D00] rounded-full" />
                                                CONNECTION SECURED
                                            </motion.div>
                                        )}
                                    </div>

                                    {/* 3 Columns Layout: Portratis + Center Freq */}
                                    <div className="grid grid-cols-3 gap-4 md:gap-8 items-center h-48 md:h-64 mt-4">

                                        {/* Left Portrait: Behavior Logs */}
                                        <div className="flex flex-col items-center justify-center h-full border border-[#00FF41]/20 bg-[#00FF41]/[0.02] relative overflow-hidden group">
                                            {/* Portrait Noise Overlay */}
                                            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 1px, #00FF41 1px, #00FF41 2px)", backgroundSize: "100% 3px" }} />
                                            <div className="text-[10px] absolute top-1 left-2 text-[#00FF41]/60 tracking-widest">SRC: BEHAVIOR_LOGS</div>

                                            {/* Wireframe Mesh */}
                                            <svg width="80" height="80" viewBox="0 0 100 100" className="opacity-80 drop-shadow-[0_0_8px_rgba(0,255,65,0.8)] relative z-10">
                                                <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" fill="none" stroke="#00FF41" strokeWidth="1" />
                                                <polygon points="50,25 75,40 75,60 50,75 25,60 25,40" fill="none" stroke="#00FF41" strokeWidth="0.5" strokeDasharray="2 2" />
                                                <line x1="50" y1="10" x2="50" y2="90" stroke="#00FF41" strokeWidth="0.5" />
                                                <line x1="10" y1="30" x2="90" y2="70" stroke="#00FF41" strokeWidth="0.5" />
                                                <line x1="10" y1="70" x2="90" y2="30" stroke="#00FF41" strokeWidth="0.5" />
                                                <circle cx="50" cy="50" r="4" fill="#00FF41" />
                                            </svg>
                                        </div>

                                        {/* Center: FREQ & Waveform */}
                                        <div className="flex flex-col items-center justify-center h-full gap-4">
                                            {/* Giant Frequency */}
                                            <motion.div
                                                className="text-[#00FF41] text-4xl md:text-7xl font-bold tracking-[0.1em] md:tracking-[0.2em]"
                                                animate={phase === 1 ? {
                                                    color: ["#fff", "#FF4D00"],
                                                    textShadow: ["0 0 30px #fff", "0 0 20px #FF4D00"]
                                                } : { textShadow: "0 0 15px rgba(0,255,65,0.8)" }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                {freq}
                                            </motion.div>

                                            {/* Audio Waveform connecting left to right */}
                                            <div className="flex items-center justify-center gap-[2px] w-full h-12 md:h-16 px-4">
                                                {phase >= 1 && Array.from({ length: 40 }).map((_, i) => (
                                                    <motion.div
                                                        key={`wave-${i}`}
                                                        className={`w-[2px] md:w-[3px] ${phase === 1 ? "bg-[#FF4D00]" : "bg-[#00FF41]"} shadow-[0_0_5px_currentColor]`}
                                                        initial={{ height: "2px" }}
                                                        animate={{
                                                            height: phase === 1 ? ["2px", "100%", "2px"] : ["2px", `${15 + Math.random() * 85}%`, "2px"]
                                                        }}
                                                        transition={{
                                                            duration: phase === 1 ? 0.4 : (0.15 + Math.random() * 0.2),
                                                            repeat: Infinity,
                                                            repeatType: "mirror"
                                                        }}
                                                    />
                                                ))}
                                                {phase === 0 && (
                                                    <div className="w-full h-[2px] bg-[#00FF41]/30 shadow-[0_0_5px_#00FF41]" />
                                                )}
                                            </div>
                                        </div>

                                        {/* Right Portrait: Ignitera Engine */}
                                        <div className="flex flex-col items-center justify-center h-full border border-[#FF4D00]/20 bg-[#FF4D00]/[0.02] relative overflow-hidden group">
                                            {/* Portrait Noise Overlay */}
                                            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 1px, #FF4D00 1px, #FF4D00 2px)", backgroundSize: "100% 3px" }} />
                                            <div className="text-[10px] absolute top-1 right-2 text-[#FF4D00]/60 tracking-widest">DEST: IGNITERA_ENG</div>

                                            {/* Wireframe Flame/Core */}
                                            <svg width="80" height="80" viewBox="0 0 100 100" className="opacity-80 drop-shadow-[0_0_8px_rgba(255,77,0,0.8)] relative z-10">
                                                <path d="M50 10 C40 30, 20 50, 20 70 C20 85, 35 95, 50 95 C65 95, 80 85, 80 70 C80 50, 60 30, 50 10 Z" fill="none" stroke="#FF4D00" strokeWidth="1.5" />
                                                <circle cx="50" cy="70" r="15" fill="none" stroke="#FF4D00" strokeWidth="1" strokeDasharray="4 2" />
                                                <circle cx="50" cy="70" r="5" fill="#FF4D00" className="animate-pulse" />
                                                <line x1="50" y1="10" x2="50" y2="55" stroke="#FF4D00" strokeWidth="0.5" />
                                                <line x1="20" y1="70" x2="80" y2="70" stroke="#FF4D00" strokeWidth="0.5" />
                                            </svg>
                                        </div>

                                    </div>

                                    {/* Bottom Dialogue Box */}
                                    <div className="w-full h-32 md:h-40 border border-[#00FF41]/40 bg-[#00FF41]/[0.03] p-4 md:p-6 relative mt-4 shadow-[inset_0_0_20px_rgba(0,255,65,0.05),_0_0_15px_rgba(0,255,65,0.1)]">
                                        {/* Decorative frame elements */}
                                        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#00FF41]" />
                                        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#00FF41]" />
                                        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#00FF41]" />
                                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#00FF41]" />

                                        <div className="flex flex-col items-start justify-start w-full h-full text-xs md:text-lg font-medium tracking-[0.2em] leading-relaxed">
                                            <p className="text-[#00FF41] drop-shadow-[0_0_8px_rgba(0,255,65,0.8)]">{text1}</p>
                                            <p className="text-[#00FF41] drop-shadow-[0_0_8px_rgba(0,255,65,0.8)]">{text2}</p>
                                            <motion.p
                                                className="text-[#FF4D00] drop-shadow-[0_0_12px_rgba(255,77,0,0.9)] mt-2"
                                                animate={text3.length > 5 ? { opacity: [1, 0.5, 1] } : {}}
                                                transition={{ duration: 0.1, repeat: Infinity }}
                                            >
                                                {text3}
                                            </motion.p>
                                        </div>
                                    </div>

                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            )}
        </AnimatePresence>
    );
}
