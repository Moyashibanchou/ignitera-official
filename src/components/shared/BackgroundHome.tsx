"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function BackgroundHome() {
    const [particles, setParticles] = useState<Array<{ id: number; x: number; delay: number; duration: number; size: number }>>([]);

    useEffect(() => {
        // クライアントサイドでのみランダムな値を生成（Hydration Mismatch回避）
        const newParticles = Array.from({ length: 70 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100, // X座標（%）
            delay: Math.random() * 5, // アニメーション開始への遅延
            duration: 10 + Math.random() * 20, // ゆっくり昇るための時間
            size: 3 + Math.random() * 8, // 粒子の大きさ
        }));
        setParticles(newParticles);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#F8F9FA]">
            {/* ほのかな環境光グラデーションレイヤー */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#FF8C00]/[0.05] to-transparent" />

            {/* 立ち昇る火の粉（Particles） */}
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute bottom-[-5%] rounded-full bg-gradient-to-t from-[#FF8C00] to-[#FBBC05]"
                    style={{
                        left: `${p.x}vw`,
                        width: p.size,
                        height: p.size,
                        filter: "blur(1px)",
                    }}
                    animate={{
                        y: ["0vh", "-110vh"], // 下から上へ
                        x: [`${p.x}vw`, `${p.x + (i => (i % 2 === 0 ? 8 : -8))(p.id)}vw`], // 少しだけ左右に揺れる
                        opacity: [0, 0.5, 0], // フェードインしながら昇り、消える
                    }}
                    transition={{
                        duration: p.duration, // 個別のアニメーション時間
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    );
}
