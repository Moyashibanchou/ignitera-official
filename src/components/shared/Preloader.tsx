"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
    const [isVisible, setIsVisible] = useState(true);
    const [phase, setPhase] = useState(0);

    // Phase 0: 0s - 1.0s (Dot appears, spring ripple effect)
    // Phase 1: 1.0s - 2.0s (Morph to check/flame, text appears)
    // Phase 2: 2.0s - 3.0s (Bg turns to frosted glass, text/icon slide up and fade out)
    // Removed after 3.0s

    useEffect(() => {
        const t1 = setTimeout(() => setPhase(1), 800);
        const t2 = setTimeout(() => setPhase(2), 2000);
        const t3 = setTimeout(() => setIsVisible(false), 3000);
        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    }, []);

    // Spring configuration for ripples and bouncy elements
    const springTransition = { type: "spring", stiffness: 200, damping: 20 };
    const bouncySpring = { type: "spring", stiffness: 300, damping: 15 };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 z-[100] w-screen h-screen flex flex-col items-center justify-center pointer-events-none"
                    // Background morphs in phase 2 to reveal the page behind frosted glass
                    animate={{
                        backgroundColor: phase >= 2 ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,1)",
                        backdropFilter: phase >= 2 ? "blur(12px)" : "blur(0px)",
                        opacity: phase >= 2 ? [1, 1, 0] : 1
                    }}
                    transition={{
                        backgroundColor: { duration: 0.8, ease: "easeInOut" },
                        backdropFilter: { duration: 0.8, ease: "easeInOut" },
                        opacity: { duration: 1, ease: "easeOut", times: [0, 0.4, 1] }
                    }}
                >
                    <AnimatePresence>
                        {phase < 2 && (
                            <motion.div
                                className="relative flex flex-col items-center justify-center"
                                exit={{ y: -30, opacity: 0 }}
                                transition={{ duration: 0.4, ease: "easeIn" }}
                            >
                                {/* Center Icon Container */}
                                <div className="relative w-16 h-16 flex items-center justify-center mb-6">

                                    {/* Ripple Effects (Phase 0) */}
                                    <AnimatePresence>
                                        {phase === 0 && (
                                            <>
                                                <motion.div
                                                    className="absolute w-4 h-4 rounded-full border border-[#FF4D00]"
                                                    initial={{ scale: 1, opacity: 1 }}
                                                    animate={{ scale: 6, opacity: 0, borderWidth: "0px" }}
                                                    transition={{ ...springTransition, duration: 1 }}
                                                />
                                                <motion.div
                                                    className="absolute w-4 h-4 rounded-full border border-[#FF4D00]"
                                                    initial={{ scale: 1, opacity: 1 }}
                                                    animate={{ scale: 8, opacity: 0, borderWidth: "0px" }}
                                                    transition={{ ...springTransition, duration: 1, delay: 0.1 }}
                                                />
                                                <motion.div
                                                    className="absolute w-4 h-4 rounded-full border border-[#FF4D00]"
                                                    initial={{ scale: 1, opacity: 1 }}
                                                    animate={{ scale: 4, opacity: 0, borderWidth: "0px" }}
                                                    transition={{ ...springTransition, duration: 1, delay: 0.2 }}
                                                />
                                            </>
                                        )}
                                    </AnimatePresence>

                                    {/* The Dot / Morphing Icon */}
                                    <motion.div
                                        className="relative flex items-center justify-center"
                                        initial={{ scale: 0 }}
                                        animate={{
                                            scale: phase === 0 ? 1 : 1.2,
                                            y: phase === 0 ? 0 : -10
                                        }}
                                        transition={bouncySpring}
                                    >
                                        <motion.div
                                            className="absolute w-4 h-4 rounded-full bg-[#FF4D00] shadow-[0_0_15px_rgba(255,77,0,0.8)]"
                                            animate={{
                                                scale: phase === 0 ? 1 : 0,
                                                opacity: phase === 0 ? 1 : 0
                                            }}
                                            transition={{ duration: 0.3 }}
                                        />

                                        {/* Styled Checkmark / Flame abstraction (Phase 1) */}
                                        <motion.svg
                                            width="32" height="32" viewBox="0 0 24 24" fill="none"
                                            className="absolute text-[#FF4D00] drop-shadow-[0_0_10px_rgba(255,77,0,0.8)]"
                                            initial={{ opacity: 0, scale: 0, pathLength: 0 }}
                                            animate={phase >= 1 ? { opacity: 1, scale: 1, pathLength: 1 } : { opacity: 0, scale: 0.5, pathLength: 0 }}
                                            transition={{ ...bouncySpring, pathLength: { duration: 0.4, ease: "easeOut" } }}
                                        >
                                            <motion.path
                                                d="M5 13l4 4L19 7"
                                                stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                                            />
                                        </motion.svg>
                                    </motion.div>

                                </div>

                                {/* Typography / Text (Phase 1) */}
                                <div className="h-8 overflow-hidden flex items-center justify-center">
                                    <AnimatePresence>
                                        {phase >= 1 && (
                                            <motion.p
                                                className="text-white/90 font-mono text-sm tracking-[0.3em] uppercase drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                                                initial={{ y: 20, opacity: 0, letterSpacing: "1em" }}
                                                animate={{ y: 0, opacity: 1, letterSpacing: "0.3em" }}
                                                transition={{ ...springTransition, duration: 0.8 }}
                                            >
                                                CONNECTION ESTABLISHED.
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </div>

                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
