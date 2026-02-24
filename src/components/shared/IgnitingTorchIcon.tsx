"use client";
import React from "react";
import { motion } from "framer-motion";

interface Props {
    isLit?: boolean;
    delay?: number;
}

export default function IgnitingTorchIcon({ isLit = false, delay = 0 }: Props) {
    // Stone colors
    const shadow1 = "#1E2025";
    const shadow2 = "#2C2F36";
    const baseLeft = "#3A3E47";
    const baseRight = "#565C69";
    const lightRight = "#687080";

    const [hasIgnited, setHasIgnited] = React.useState(false);

    return (
        <div className="relative shrink-0 flex items-center justify-center w-8 h-8 md:w-12 md:h-12 mr-2">

            {/* Global or inline styles for the discrete cel-shaded animation */}
            <style>{`
                @keyframes cel-fire {
                    0%, 24.99% { transform: scale(1, 1) skew(0deg) translate(0px, 0px); }
                    25%, 49.99% { transform: scale(0.9, 1.15) skew(-6deg) translate(-1px, -2px); }
                    50%, 74.99% { transform: scale(1.1, 0.9) skew(4deg) translate(1px, 1px); }
                    75%, 99.99% { transform: scale(0.95, 1.1) skew(-3deg) translate(-1px, -1px); }
                    100% { transform: scale(1, 1) skew(0deg) translate(0px, 0px); }
                }
                @keyframes cel-ember-1 {
                    0%, 24.99% { transform: translate(0px, 0px) scale(1); opacity: 1; }
                    25%, 49.99% { transform: translate(-4px, -15px) scale(0.8); opacity: 0.8; }
                    50%, 74.99% { transform: translate(3px, -30px) scale(0.6); opacity: 0.6; }
                    75%, 99.99% { transform: translate(-2px, -45px) scale(0.3); opacity: 0.3; }
                    100% { transform: translate(0px, -60px) scale(0); opacity: 0; }
                }
                @keyframes cel-ember-2 {
                    0%, 24.99% { transform: translate(0px, 0px) scale(1); opacity: 1; }
                    25%, 49.99% { transform: translate(5px, -12px) scale(0.8); opacity: 0.8; }
                    50%, 74.99% { transform: translate(-4px, -25px) scale(0.6); opacity: 0.6; }
                    75%, 99.99% { transform: translate(3px, -38px) scale(0.3); opacity: 0.3; }
                    100% { transform: translate(0px, -50px) scale(0); opacity: 0; }
                }
                .cel-flame-anim {
                    animation: cel-fire 0.4s infinite;
                    transform-origin: 32px 32px;
                }
            `}</style>

            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute w-full h-full z-10 overflow-visible pointer-events-none">

                {/* 1. Spark Burst (Comics Style) */}
                {isLit && (
                    <motion.g
                        style={{ transformOrigin: '32px 32px' }}
                        variants={{
                            hidden: { opacity: 0, scale: 0.2 },
                            visible: {
                                opacity: [0, 1, 0],
                                scale: [0.5, 2.0, 2.5],
                                transition: { duration: 0.8, delay: delay, ease: "easeOut" }
                            }
                        }}
                    >
                        {/* 8 radial burst lines */}
                        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                            <line
                                key={`burst-${i}`}
                                x1="32" y1="12" x2="32" y2="2"
                                stroke="#FFB703"
                                strokeWidth="3"
                                strokeLinecap="round"
                                transform={`rotate(${angle} 32 32)`}
                            />
                        ))}
                    </motion.g>
                )}

                {/* 2. Flame & Embers Wrapper */}
                {isLit && (
                    <motion.g
                        style={{ transformOrigin: '32px 32px' }}
                        variants={{
                            hidden: { scale: 0, opacity: 0 },
                            visible: {
                                scale: [0, 1.5, 0.9, 1.1, 1],
                                opacity: [0, 1, 1, 1, 1],
                                transition: { duration: 1.2, delay: delay, times: [0, 0.2, 0.5, 0.8, 1], ease: "easeOut" }
                            }
                        }}
                        onAnimationComplete={(definition) => {
                            if (definition === "visible") setHasIgnited(true);
                        }}
                    >
                        {/* Glow Filter for Digital Flame */}
                        <defs>
                            <filter id="torch-glow" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="3" result="blur" />
                                <feMerge>
                                    <feMergeNode in="blur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        {/* Cel-shaded Flame */}
                        <g className={hasIgnited ? "cel-flame-anim" : ""} filter="url(#torch-glow)">
                            {/* Ambient flat glow */}
                            <circle cx="32" cy="24" r="18" fill="#FF4D00" opacity="0.4" />

                            {/* Outer Flame (Strong Red-Orange) */}
                            <path d="M32 32 C12 32 14 10 26 2 C22 14 30 16 34 0 C38 10 52 14 42 24 C46 22 48 26 46 28 C44 32 38 32 32 32Z" fill="#ff4d00" />
                            {/* Mid Flame (Bright Orange) */}
                            <path d="M32 32 C20 32 24 16 28 8 C26 16 32 16 33 4 C35 12 42 16 38 24 C40 22 42 26 40 28 C38 32 36 32 32 32Z" fill="#ff7d3f" />
                            {/* Core Flame (Yellow/White) */}
                            <path d="M32 32 C26 32 28 20 31 12 C30 16 32 16 32 8 C33 12 36 16 34 24 C36 24 34 32 32 32Z" fill="#ffffff" />
                        </g>

                        {/* Hand-drawn style embers - Optimized for mobile performance */}
                        {hasIgnited && [
                            { x: 30, y: 26, r: 2.0, delay: '0s', dur: '1.2s', anim: 'cel-ember-1', className: '' },
                            { x: 34, y: 28, r: 1.5, delay: '0.3s', dur: '1.5s', anim: 'cel-ember-2', className: 'hidden md:block' },
                            { x: 28, y: 24, r: 2.2, delay: '0.6s', dur: '1.1s', anim: 'cel-ember-1', className: '' },
                            { x: 32, y: 22, r: 1.8, delay: '0.9s', dur: '1.3s', anim: 'cel-ember-2', className: 'hidden md:block' },
                        ].map((ember, i) => (
                            <circle
                                key={`ember-${i}`}
                                cx={ember.x} cy={ember.y} r={ember.r} fill="#ff9900"
                                className={ember.className}
                                style={{
                                    animation: `${ember.anim} ${ember.dur} infinite`,
                                    animationDelay: ember.delay
                                }}
                            />
                        ))}
                    </motion.g>
                )}

                {/* --- 3D Stone Brazier Base --- */}
                {/* Back Spikes */}
                <path d="M 12 25 L 18 26 L 10 4 Z" fill={shadow1} />
                <path d="M 52 25 L 46 26 L 54 4 Z" fill={shadow2} />

                {/* Inner Bowl Base / Background */}
                <path d="M 4 28 Q 32 18 60 28 Q 32 32 4 28" fill={shadow1} />

                {/* Outer Bowl Left Side */}
                <path d="M 4 28 Q 18 34 32 34 L 32 42 L 22 42 Z" fill={baseLeft} />
                {/* Outer Bowl Right Side */}
                <path d="M 60 28 Q 46 34 32 34 L 32 42 L 42 42 Z" fill={baseRight} />

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
