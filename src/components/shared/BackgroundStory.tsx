"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function BackgroundStory() {
    const [clouds, setClouds] = useState<Array<{ id: number; top: number; delay: number; duration: number; width: number; height: number; opacity: number }>>([]);

    useEffect(() => {
        // 雲海のような浮遊パーティクル
        const newClouds = Array.from({ length: 15 }).map((_, i) => ({
            id: i,
            top: 5 + Math.random() * 85, // Y座標（%）
            delay: Math.random() * 5,
            duration: 25 + Math.random() * 30, // 少し速くする
            width: 30 + Math.random() * 40, // 横に広い楕円
            height: 10 + Math.random() * 20,
            opacity: 0.3 + Math.random() * 0.4, // はっきり見えるレベル(0.3〜0.7)
        }));
        setClouds(newClouds);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#F8F9FA]">
            <div className="absolute inset-0 bg-gradient-to-b from-[#FBBC05]/[0.02] to-transparent" />

            {clouds.map((cloud) => (
                <motion.div
                    key={cloud.id}
                    className="absolute left-[-50%] rounded-[100%] filter blur-[40px] bg-[#4285F4]"
                    style={{
                        top: `${cloud.top}vh`,
                        width: `${cloud.width}vw`,
                        height: `${cloud.height}vh`,
                        opacity: cloud.opacity,
                    }}
                    animate={{
                        x: ["0vw", "150vw"], // 左から右へ非常にゆっくり流れる
                        y: ["0vh", "5vh", "-5vh", "0vh"], // 少し上下に揺らぐ
                    }}
                    transition={{
                        x: { duration: cloud.duration, repeat: Infinity, ease: "linear", delay: cloud.delay },
                        y: { duration: 15, repeat: Infinity, ease: "easeInOut" },
                    }}
                />
            ))}
        </div>
    );
}
