"use client";
import { motion } from "framer-motion";
import React from "react";

export default function TextAnimatedHero() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1,
            },
        },
    };

    const child = {
        hidden: { opacity: 0, y: 15, filter: "blur(5px)" },
        show: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { type: "spring", stiffness: 120, damping: 25 }
        },
    };

    const title1 = "行動ログから、".split("");
    const title2 = "真の評価基盤を。".split("");

    return (
        <motion.h1
            className="text-5xl md:text-7xl font-normal tracking-tight leading-tight mb-8 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
        >
            <div className="inline-block overflow-hidden pb-2">
                {title1.map((char, index) => (
                    <motion.span key={index} variants={child} className="inline-block" style={{ whiteSpace: "pre" }}>
                        {char}
                    </motion.span>
                ))}
            </div>
            <br className="hidden md:block" />
            <div className="inline-block overflow-hidden pb-2">
                {title2.map((char, index) => (
                    <motion.span key={index} variants={child} className="inline-block" style={{ whiteSpace: "pre" }}>
                        {char}
                    </motion.span>
                ))}
            </div>
        </motion.h1>
    );
}
