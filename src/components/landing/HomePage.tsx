"use client";

import React from "react";
import { motion } from "framer-motion";

// Google Brand Colors for subtle accents
const colors = {
    blue: "hover:text-[#4285F4]",
    red: "hover:text-[#EA4335]",
    yellow: "hover:text-[#FBBC05]",
    green: "hover:text-[#34A853]",
};

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
    >
        {children}
    </motion.div>
);

export default function HomePage() {
    return (
        <div className="min-h-screen bg-white text-[#202124] font-sans selection:bg-[#4285F4] selection:text-white">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl font-medium tracking-tighter"
                    >
                        IGNITERA
                    </motion.div>
                    <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
                        <a href="#technology" className={`transition-colors ${colors.blue}`}>Technology</a>
                        <a href="#mission" className={`transition-colors ${colors.red}`}>Mission</a>
                        <a href="#partnership" className={`transition-colors ${colors.yellow}`}>Partnership</a>
                        <a href="#contact" className={`transition-colors ${colors.green}`}>Contact</a>
                    </nav>
                </div>
            </header>

            <main className="pt-16">
                {/* Hero Section */}
                <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-6 max-w-5xl mx-auto">
                    <FadeIn>
                        <h1 className="text-6xl md:text-8xl font-normal tracking-tight leading-tight mb-8 text-[#202124]">
                            Igniting the Future, <br className="hidden md:block" /> Together.
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="text-xl md:text-2xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
                            世界に火を灯す、革新的なソリューションを。
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.4}>
                        <div className="mt-12 flex gap-4">
                            <button className="px-8 py-4 bg-[#202124] text-white rounded-full font-medium hover:bg-gray-800 transition-colors shadow-sm">
                                Discover More
                            </button>
                            <button className="px-8 py-4 bg-white text-[#202124] border border-gray-200 rounded-full font-medium hover:bg-gray-50 transition-colors">
                                Our Story
                            </button>
                        </div>
                    </FadeIn>
                </section>

                {/* Mission Section */}
                <section id="mission" className="py-32 px-6 bg-gray-50">
                    <div className="max-w-4xl mx-auto text-center">
                        <FadeIn>
                            <h2 className="text-3xl md:text-5xl font-medium mb-12 tracking-tight">Mission</h2>
                            <p className="text-2xl md:text-4xl text-gray-800 font-light leading-snug md:leading-snug">
                                情報を整理し、すべての人の可能性を最大化する。<br />
                                私たちは、テクノロジーの力で<br className="hidden md:block" />より良い明日を創造します。
                            </p>
                        </FadeIn>
                    </div>
                </section>

                {/* Technology Section */}
                <section id="technology" className="py-32 px-6 max-w-7xl mx-auto">
                    <FadeIn>
                        <h2 className="text-3xl md:text-5xl font-medium mb-16 text-center tracking-tight">Technology</h2>
                    </FadeIn>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                title: "Cloud Infrastructure",
                                desc: "スケーラブルで安全なインフラ環境。世界中のデータを瞬時に処理し、最適な形で提供します。",
                                color: "group-hover:text-[#4285F4]"
                            },
                            {
                                title: "Machine Learning",
                                desc: "高度な予測アルゴリズムによる最適化。膨大なデータから意味を見出し、新しい価値を生み出します。",
                                color: "group-hover:text-[#EA4335]"
                            },
                            {
                                title: "Data Visualization",
                                desc: "複雑な情報を直感的に。誰もが理解できる形にデザインし、意思決定を加速させます。",
                                color: "group-hover:text-[#34A853]"
                            }
                        ].map((tech, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <div className="group cursor-default">
                                    <div className={`w-12 h-12 rounded-full bg-gray-100 mb-6 flex items-center justify-center transition-colors ${tech.color.replace('text', 'bg').replace('hover:', '')} hover:bg-opacity-10`}>
                                        <div className={`w-3 h-3 rounded-full bg-gray-300 transition-colors ${tech.color.replace('group-hover:', '')}`} />
                                    </div>
                                    <h3 className={`text-2xl font-medium mb-4 transition-colors ${tech.color}`}>{tech.title}</h3>
                                    <p className="text-gray-500 leading-relaxed font-light">{tech.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </section>

                {/* Partnership Section */}
                <section id="partnership" className="py-32 px-6 bg-[#202124] text-white">
                    <div className="max-w-5xl mx-auto text-center">
                        <FadeIn>
                            <h2 className="text-3xl md:text-5xl font-medium mb-10 tracking-tight">Partnership</h2>
                            <p className="text-xl text-gray-400 font-light leading-relaxed max-w-3xl mx-auto mb-16">
                                私たちが大切にしているのは、データではなく「人」とのつながりです。<br />
                                共に考え、共に創り上げるパートナーシップが、想像を超える未来を実現します。
                            </p>
                            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full border border-gray-600 hover:border-gray-400 transition-colors cursor-pointer group">
                                <span className="text-sm font-medium group-hover:text-[#FBBC05] transition-colors">Join Us</span>
                            </div>
                        </FadeIn>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer id="contact" className="bg-white border-t border-gray-100 py-12 px-6 text-sm text-gray-500 font-light">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
                        <a href="#" className="hover:text-gray-900 transition-colors">About</a>
                    </div>
                    <div className="flex gap-8">
                        <a href="#" className={`transition-colors ${colors.blue}`}>Twitter</a>
                        <a href="#" className={`transition-colors ${colors.red}`}>LinkedIn</a>
                    </div>
                    <div>
                        &copy; {new Date().getFullYear()} IGNITERA. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}
