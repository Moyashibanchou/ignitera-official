"use client";
import { motion } from "framer-motion";
import React from "react";

export default function BackgroundFire() {
    return (
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#FFFFFF]">
            {/* 4 Abstract Shapes moving slowly to emulate 'The Silent Fire' */}
            <motion.div
                animate={{
                    x: ["-5%", "15%", "-10%", "-5%"],
                    y: ["-5%", "10%", "25%", "-5%"],
                    scale: [1, 1.1, 0.9, 1],
                }}
                transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vh] bg-[#FF8C00] rounded-full mix-blend-multiply filter blur-[150px] opacity-[0.03]"
            />
            <motion.div
                animate={{
                    x: ["10%", "-15%", "15%", "10%"],
                    y: ["15%", "-10%", "-15%", "15%"],
                    scale: [0.9, 1.2, 1, 0.9],
                }}
                transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[70vh] bg-[#4285F4] rounded-full mix-blend-multiply filter blur-[150px] opacity-[0.03]"
            />
            <motion.div
                animate={{
                    x: ["20%", "-10%", "10%", "20%"],
                    y: ["-15%", "15%", "5%", "-15%"],
                    scale: [1.1, 0.9, 1.2, 1.1],
                }}
                transition={{ duration: 45, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[20%] left-[20%] w-[45vw] h-[45vw] bg-[#EA4335] rounded-full mix-blend-multiply filter blur-[180px] opacity-[0.02]"
            />
            <motion.div
                animate={{
                    x: ["-10%", "20%", "-15%", "-10%"],
                    y: ["25%", "-10%", "15%", "25%"],
                    scale: [1, 1.3, 0.8, 1],
                }}
                transition={{ duration: 38, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[20%] right-[20%] w-[40vw] h-[40vw] bg-[#FBBC05] rounded-full mix-blend-multiply filter blur-[150px] opacity-[0.03]"
            />
        </div>
    );
}
