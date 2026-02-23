"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Slack, Figma, Trello, Gitlab, Hexagon, MessageSquare, LayoutTemplate, Code2 } from "lucide-react";

const tools = [
    { name: "GitHub", icon: Github },
    { name: "Slack", icon: Slack },
    { name: "Notion", icon: Hexagon },
    { name: "Jira", icon: LayoutTemplate },
    { name: "Figma", icon: Figma },
    { name: "Linear", icon: Code2 },
    { name: "Discord", icon: MessageSquare },
    { name: "GitLab", icon: Gitlab },
    { name: "Trello", icon: Trello },
];

// Duplicate multiple times to ensure the marquee covers all screen widths
const repeatedTools = [...tools, ...tools, ...tools, ...tools, ...tools];

export default function IntegrationsMarquee() {
    return (
        <section className="mt-32 mb-12 relative text-center w-full">
            <h3 className="text-orange-500 text-xs md:text-sm font-bold tracking-widest uppercase mb-4 drop-shadow-[0_0_8px_rgba(255,165,0,0.4)]">
                Integration Sources
            </h3>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto mb-12 px-4">
                開発、コミュニケーション、タスク管理。日常のあらゆるワークスペースから無意識の行動ログをシームレスに抽出・同期します。
            </p>

            {/* Marquee Container with Gradient Mask */}
            <div className="relative w-full overflow-hidden h-24 flex items-center">
                {/* Gradient mask for fade out on both edges */}
                <div
                    className="absolute inset-0 z-10 pointer-events-none"
                    style={{
                        background: "linear-gradient(to right, #050505 0%, transparent 20%, transparent 80%, #050505 100%)"
                    }}
                />

                {/* Scrolling Track */}
                <motion.div
                    className="flex w-max items-center"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 40,
                    }}
                >
                    {repeatedTools.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center space-x-3 text-gray-500 hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.7)] transition-all duration-300 whitespace-nowrap px-8 md:px-12 cursor-pointer"
                        >
                            <item.icon className="w-6 h-6 md:w-8 md:h-8 opacity-70" />
                            <span className="text-base md:text-lg font-medium tracking-wider">{item.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Visual flow connecting to the AI Core Engine below */}
            <div className="w-[1px] h-16 bg-gradient-to-b from-zinc-800 to-ignitera-500/50 mx-auto mt-8" />
            <div className="w-1.5 h-1.5 rounded-full bg-ignitera-500 mx-auto shadow-[0_0_10px_#ff4d00]" />

        </section>
    );
}
