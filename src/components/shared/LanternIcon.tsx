"use client";
import React from "react";
import { motion } from "framer-motion";

interface LanternIconProps {
    isLit?: boolean;
}

export default function LanternIcon({ isLit = false }: LanternIconProps) {
    // Stone colors
    const shadow1 = "#1E2025";
    const shadow2 = "#2C2F36";
    const baseLeft = "#3A3E47";
    const baseRight = "#565C69";
    const lightRight = "#687080";

    return (
        <div className="relative shrink-0 flex items-center justify-center w-8 h-8 md:w-12 md:h-12 mr-2">
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">

                {/* Glow effect surrounding the fire */}
                {isLit && (
                    <motion.circle
                        cx="32" cy="18" r="40"
                        fill="#FF4D00"
                        className="pointer-events-none"
                        style={{ filter: "blur(20px)" }}
                        animate={{ opacity: [0.15, 0.45, 0.15], scale: [0.8, 1.25, 0.8] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                )}

                {/* Back Spikes */}
                <path d="M 12 25 L 18 26 L 10 4 Z" fill={shadow1} />
                <path d="M 52 25 L 46 26 L 54 4 Z" fill={shadow2} />

                {/* Inner Bowl Base / Background */}
                <path d="M 4 28 Q 32 18 60 28 Q 32 32 4 28" fill={shadow1} />

                {/* Animated Flames - Swaying Sideways Effect */}
                {isLit && (
                    <motion.g style={{ transformOrigin: '32px 32px' }}>
                        {/* Ambient Background Glow (Dark Orange) */}
                        <motion.path
                            d="M32 32 C 8 32  10 8 26 0 C 20 12 30 16 34 -4 C 38 10 54 14 44 24 C 48 20 52 26 50 28 C 48 32 40 32 32 32Z"
                            fill="#FF3300"
                            style={{ filter: "blur(4px)" }}
                            animate={{
                                scaleY: [1, 1.1, 0.95, 1.1, 1],
                                scaleX: [1, 1.05, 0.95, 1.05, 1],
                                opacity: [0.6, 0.4, 0.7, 0.5, 0.6],
                                rotate: [0, -2, 2, -1, 0],
                                x: [0, -1, 1, 0, 0]
                            }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        />
                        {/* Outer Flame (Orange Red) */}
                        <motion.path
                            d="M32 32 C12 32 14 10 26 2 C22 14 30 16 34 0 C38 10 52 14 42 24 C46 22 48 26 46 28 C44 32 38 32 32 32Z"
                            fill="#FF4D00"
                            animate={{
                                rotate: [-3, 5, -4, 3, -3],
                                x: [-1, 2, -2, 1, -1],
                                scaleY: [1, 1.1, 0.95, 1.05, 1],
                            }}
                            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                        />
                        {/* Mid Flame (Orange Yellow) */}
                        <motion.path
                            d="M32 32 C20 32 24 16 28 8 C26 16 32 16 33 4 C35 12 42 16 38 24 C40 22 42 26 40 28 C38 32 36 32 32 32Z"
                            fill="#FFA600"
                            animate={{
                                rotate: [-5, 4, -3, 6, -5],
                                x: [-2, 3, -1, 2, -2],
                                scaleY: [1, 1.15, 0.9, 1.1, 1],
                            }}
                            transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
                        />
                        {/* Core Flame (Yellow White) */}
                        <motion.path
                            d="M32 32 C26 32 28 20 31 12 C30 16 32 16 32 8 C33 12 36 16 34 24 C36 24 34 32 32 32Z"
                            fill="#FFF2B2"
                            animate={{
                                rotate: [-4, 6, -5, 4, -4],
                                x: [-1, 2, -2, 2, -1],
                                scaleY: [1, 1.05, 0.95, 1.1, 1],
                            }}
                            transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </motion.g>
                )}

                {/* Sparse Embers (Rising from inside the flame) */}
                {isLit && [
                    { cx: 31, cy: 24, r: 1.6, y: -25, x: 12, dur: 2.2, del: 0 },
                    { cx: 33, cy: 26, r: 1.2, y: -28, x: -14, dur: 2.5, del: 0.7 },
                    { cx: 32, cy: 22, r: 1.8, y: -30, x: 8, dur: 2.0, del: 1.4 },
                    { cx: 30, cy: 25, r: 1.0, y: -22, x: -10, dur: 2.4, del: 2.1 },
                ].map((p, i) => (
                    <motion.circle
                        key={`particle-${i}`} cx={p.cx} cy={p.cy} r={p.r}
                        fill="#FFA600"
                        animate={{
                            y: [0, p.y * 0.5, p.y],
                            x: [0, p.x * 0.5, p.x],
                            opacity: [0, 1, 0],
                            scale: [0.5, 1, 0.2]
                        }}
                        transition={{ duration: p.dur, repeat: Infinity, delay: p.del, ease: "easeOut" }}
                    />
                ))}
                {/* Outer Bowl Left Side */}
                <path d="M 4 28 Q 18 34 32 34 L 32 42 L 22 42 Z" fill={baseLeft} />
                {/* Outer Bowl Right Side */}
                <path d="M 60 28 Q 46 34 32 34 L 32 42 L 42 42 Z" fill={baseRight} />

                {/* Optional Fire highlight on front rim */}
                {isLit && (
                    <path d="M 4 28 Q 32 34 60 28 Q 32 34 4 28" fill="#FF4D00" fillOpacity="0.4" style={{ filter: "blur(3px)" }} />
                )}

                {/* Pillar */}
                <path d="M 22 42 L 32 42 L 32 54 L 26 54 Z" fill={shadow2} />
                <path d="M 32 42 L 42 42 L 38 54 L 32 54 Z" fill={baseRight} />

                {/* Pillar Rib/Band */}
                <path d="M 24 47 L 32 47 L 32 49 L 25 49 Z" fill={shadow1} />
                <path d="M 32 47 L 40 47 L 39 49 L 32 49 Z" fill={shadow2} />

                {/* Base Top Steps */}
                <path d="M 20 54 L 44 54 L 40 56 L 24 56 Z" fill={shadow1} />
                <path d="M 32 54 L 44 54 L 40 56 L 32 56 Z" fill={baseLeft} />

                {/* Base Bottom */}
                <path d="M 12 62 L 52 62 L 40 56 L 24 56 Z" fill={shadow2} />
                <path d="M 32 62 L 52 62 L 40 56 L 32 56 Z" fill={baseRight} />

                {/* Front Left Spike */}
                <path d="M 4 28 L 12 29 L 2 2 Z" fill={shadow2} />
                <path d="M 12 29 L 8 28 L 2 2 Z" fill={baseLeft} />

                {/* Front Right Spike */}
                <path d="M 60 28 L 52 29 L 62 2 Z" fill={baseRight} />
                <path d="M 52 29 L 56 28 L 62 2 Z" fill={lightRight} />
            </svg>
        </div>
    );
}
