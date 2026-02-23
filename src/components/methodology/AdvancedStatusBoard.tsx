"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Activity, BookOpen, Clock, Code2, GitMerge, GitPullRequest, Layers, MessageSquare, ShieldCheck, Target, Terminal, UploadCloud, Users, Zap, Search, MonitorPlay, Lock } from "lucide-react";

const categories = [
    {
        title: "成果 (Output Metrics)",
        desc: "完了したプロジェクトやタスクの絶対量。成果そのものの実証ログ。",
        color: "text-[#4285F4]",
        items: [
            { label: "タスク完了率", value: 92, icon: Target },
            { label: "実装コード量", value: 85, icon: Terminal },
            { label: "デプロイ頻度", value: 78, icon: UploadCloud },
            { label: "バグ修正速度", value: 88, icon: Zap },
        ]
    },
    {
        title: "再現性 (Reproducibility)",
        desc: "一時的な成果ではなく、質の高いアウトプットを継続する能力の測定。",
        color: "text-red-400",
        items: [
            { label: "品質安定性スコア", value: 95, icon: ShieldCheck },
            { label: "設計パターン再利用", value: 81, icon: Layers },
            { label: "ドキュメント品質", value: 89, icon: BookOpen },
            { label: "エラーハンドリング", value: 91, icon: MonitorPlay },
        ]
    },
    {
        title: "成長傾向 (Growth Trend)",
        desc: "時間の経過とともに向上するスキルの傾き（微分値）。ポテンシャルの源泉。",
        color: "text-[#FBBC05]",
        items: [
            { label: "新規スキル習得速度", value: 96, icon: Activity },
            { label: "課題解決の効率化", value: 87, icon: Search },
            { label: "複雑性への適応", value: 82, icon: Code2 },
            { label: "自律学習ベクトル", value: 94, icon: Clock },
        ]
    },
    {
        title: "組織貢献 (Org Contribution)",
        desc: "チーム内でのコミュニケーションや、他コミュニティへのプラスの波及効果。",
        color: "text-green-400",
        items: [
            { label: "コードレビュー参加", value: 88, icon: GitMerge },
            { label: "ナレッジ共有数", value: 93, icon: GitPullRequest },
            { label: "チーム開発速度への貢献", value: 86, icon: Users },
            { label: "メンタリング効果", value: 79, icon: MessageSquare },
        ]
    }
];

export default function AdvancedStatusBoard() {
    const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

    return (
        <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-4">
                {categories.map((category, catIndex) => {
                    const isHovered = hoveredCategory === catIndex;
                    const isOtherHovered = hoveredCategory !== null && hoveredCategory !== catIndex;

                    return (
                        <div
                            key={catIndex}
                            onMouseEnter={() => setHoveredCategory(catIndex)}
                            onMouseLeave={() => setHoveredCategory(null)}
                            className={`group p-8 glass-panel relative overflow-hidden transition-all duration-500 ease-out border border-white/5 ${isHovered
                                ? "shadow-[0_0_30px_rgba(255,77,0,0.15)] border-white/20 bg-white/[0.04]"
                                : isOtherHovered
                                    ? "opacity-40 grayscale-[50%]"
                                    : "hover:shadow-[0_8px_40px_rgba(255,77,0,0.15)]"
                                }`}
                        >
                            {/* Shimmer effect on hover */}
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-ignitera-500 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[trace_2s_linear_infinite]" />

                            <div className="mb-6 relative z-10">
                                <h3 className={`text-xl font-medium mb-3 transition-colors duration-300 ${isHovered ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" : "text-zinc-200"}`}>
                                    {category.title}
                                </h3>
                                <p className="text-zinc-400 font-light text-sm leading-relaxed min-h-[40px]">{category.desc}</p>
                            </div>

                            <div className="space-y-5 relative z-10">
                                {category.items.map((item, itemIndex) => (
                                    <div key={itemIndex} className="relative">
                                        <div className="flex justify-between items-center mb-2 text-xs font-mono tracking-wider">
                                            <div className="flex items-center gap-2 text-zinc-300">
                                                <item.icon className="w-4 h-4 text-ignitera-500/70" />
                                                <span className={isHovered ? "text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]" : ""}>{item.label}</span>
                                            </div>
                                            <span className={`transition-colors duration-300 ${isHovered ? "text-ignitera-500 drop-shadow-[0_0_8px_rgba(255,77,0,0.8)]" : "text-zinc-500"}`}>
                                                {item.value}%
                                            </span>
                                        </div>
                                        <div className="h-2.5 w-full bg-[#050505] rounded-full relative z-0">
                                            {/* Outer track border for depth */}
                                            <div className="absolute inset-0 rounded-full border border-white/5 bg-white/[0.02] shadow-[inset_0_1px_3px_rgba(0,0,0,0.8)]" />

                                            <motion.div
                                                className="absolute top-0 left-0 h-full rounded-full z-10"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${item.value}%` }}
                                                viewport={{ once: true }}
                                                transition={{ type: "spring", bounce: 0.25, duration: 2.5, delay: 0.1 * itemIndex }}
                                            >
                                                {/* The liquid metal container */}
                                                <div className="w-full h-full relative rounded-full overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
                                                    {/* Liquid gradient flow */}
                                                    <motion.div
                                                        className="absolute inset-0"
                                                        style={{
                                                            background: "linear-gradient(90deg, #7e1903 0%, #ff4d00 50%, #fbbf24 100%)",
                                                            backgroundSize: "200% 100%"
                                                        }}
                                                        animate={{ backgroundPosition: ["100% 0%", "0% 0%"] }}
                                                        transition={{ duration: 3, ease: "linear", repeat: Infinity }}
                                                    />

                                                    {/* Fluid turbulence (SVG noise) */}
                                                    <motion.div
                                                        className="absolute inset-0 mix-blend-overlay opacity-40"
                                                        style={{
                                                            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.05' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
                                                            backgroundSize: "100px 100px"
                                                        }}
                                                        animate={{ backgroundPosition: ["0px 0px", "-100px 0px"] }}
                                                        transition={{ duration: 5, ease: "linear", repeat: Infinity }}
                                                    />

                                                    {/* Sparkle running particles */}
                                                    <motion.div
                                                        className="absolute top-0 left-0 w-[50%] h-full bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[-20deg]"
                                                        animate={{ x: ["-200%", "300%"] }}
                                                        transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
                                                    />

                                                    {/* Static mini sparkles */}
                                                    <div className="absolute inset-0 mix-blend-screen opacity-30" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "12px 12px", backgroundPosition: "0 0" }} />

                                                    {/* Liquid Meniscus (bright edge) & Top highlight */}
                                                    <div className="absolute top-0 right-0 w-3 h-full bg-gradient-to-l from-white to-transparent opacity-90 mix-blend-screen" />
                                                    <div className="absolute top-0 left-0 w-full h-[1px] bg-white/40" />
                                                </div>

                                                {/* Breathing external glow (Pulse) */}
                                                <motion.div
                                                    className="absolute top-1/2 left-0 w-full -translate-y-1/2 rounded-full blur-[6px] -z-10 pointer-events-none"
                                                    style={{ backgroundColor: "#ff4d00" }}
                                                    animate={{
                                                        opacity: [0.2, 0.7, 0.2],
                                                        height: ["100%", "200%", "100%"]
                                                    }}
                                                    transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
                                                />
                                            </motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Overlay Masking & CTA */}
            <div className="absolute inset-x-0 bottom-[-20px] h-[75%] md:h-[60%] flex flex-col items-center justify-end pb-12 md:pb-20 px-6 bg-gradient-to-b from-transparent via-[#050505]/95 to-[#050505] backdrop-blur-xl border-t border-orange-500/30 z-20 rounded-b-2xl">
                <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6 cursor-pointer"
                >
                    <Lock className="w-12 h-12 md:w-16 md:h-16 text-ignitera-500 drop-shadow-[0_0_15px_rgba(255,77,0,0.8)]" />
                </motion.div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                    全16項目の評価指標をアンロック
                </h3>

                <p className="text-gray-400 text-center max-w-lg mb-8 text-sm md:text-base leading-relaxed">
                    行動データから導き出される真のポテンシャル。<br className="hidden md:block" />すべての解析結果を見るには、アカウント登録が必要です。
                </p>

                <button className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-full font-bold shadow-[0_0_20px_rgba(255,77,0,0.3)] hover:shadow-[0_0_30px_rgba(255,77,0,0.5)] transition-all duration-300 transform hover:-translate-y-1">
                    無料でアカウントを作成
                </button>
            </div>
        </div>
    );
}
