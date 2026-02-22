"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function BackgroundTech() {
    const [lines, setLines] = useState<Array<{ id: number; left: number; delay: number; duration: number; height: number; opacity: number }>>([]);

    useEffect(() => {
        // クライアントサイドでのみ実行
        const newLines = Array.from({ length: 25 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100, // X座標（%）
            delay: Math.random() * 5,
            duration: 8 + Math.random() * 12, // スピードアップ
            height: 30 + Math.random() * 50, // 線の長さを大幅に長く
            opacity: 0.4 + Math.random() * 0.5, // 濃くする(0.4〜0.9)
        }));
        setLines(newLines);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#F8F9FA]">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#4285F4]/[0.03]" />

            {/* 上昇する光のライン */}
            {lines.map((line) => (
                <motion.div
                    key={line.id}
                    className="absolute bottom-[-50%] w-[4px] rounded-full bg-gradient-to-t from-transparent via-[#4285F4] to-[#34A853]"
                    style={{
                        left: `${line.left}vw`,
                        height: `${line.height}vh`,
                        opacity: line.opacity,
                        filter: "blur(0.5px)",
                    }}
                    animate={{
                        y: ["0vh", "-150vh"], // 下から上へ
                    }}
                    transition={{
                        duration: line.duration,
                        repeat: Infinity,
                        delay: line.delay,
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    );
}
