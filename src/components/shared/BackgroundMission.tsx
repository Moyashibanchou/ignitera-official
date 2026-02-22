"use client";
import { motion } from "framer-motion";
import React from "react";

export default function BackgroundMission() {
    return (
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#F8F9FA]">
            {/* 炎のようなスローなグラデーションの動き */}
            <motion.div
                className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vh] rounded-full filter blur-[100px]"
                style={{ background: "radial-gradient(circle, rgba(234,67,53,0.5) 0%, rgba(251,188,5,0) 70%)" }}
                animate={{
                    scale: [1, 1.2, 0.9, 1],
                    opacity: [0.6, 0.9, 0.6, 0.6],
                    x: ["0%", "5%", "-5%", "0%"],
                    y: ["0%", "10%", "-5%", "0%"],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[50vh] rounded-full filter blur-[120px]"
                style={{ background: "radial-gradient(circle, rgba(255,140,0,0.4) 0%, rgba(251,188,5,0) 70%)" }}
                animate={{
                    scale: [1.1, 0.9, 1.2, 1.1],
                    opacity: [0.6, 0.4, 0.8, 0.6],
                    x: ["0%", "-10%", "5%", "0%"],
                    y: ["0%", "-5%", "10%", "0%"],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                className="absolute top-[30%] left-[30%] w-[40vw] h-[40vh] rounded-full filter blur-[80px]"
                style={{ background: "radial-gradient(circle, rgba(234,67,53,0.3) 0%, transparent 60%)" }}
                animate={{
                    scale: [0.9, 1.3, 1, 0.9],
                    opacity: [0.5, 0.8, 0.4, 0.5],
                    x: ["-5%", "5%", "10%", "-5%"],
                }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
    );
}
