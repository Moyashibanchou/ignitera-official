"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend
} from "recharts";
import { Flame, Trophy, Zap, Target, Activity } from "lucide-react";

// --- モックデータ ---
const growthData = [
    { month: "4月", プログラミング: 20, 企画力: 10 },
    { month: "5月", プログラミング: 45, 企画力: 20 },
    { month: "6月", プログラミング: 70, 企画力: 40 },
    { month: "7月", プログラミング: 95, 企画力: 65 },
];

const cultureData = [
    { subject: "挑戦心", student: 95, company: 85, fullMark: 100 },
    { subject: "協調性", student: 70, company: 90, fullMark: 100 },
    { subject: "自律性", student: 85, company: 85, fullMark: 100 },
    { subject: "論理性", student: 80, company: 75, fullMark: 100 },
    { subject: "創造性", student: 100, company: 80, fullMark: 100 },
];

const actionLogs = [
    { id: 1, date: "今日", action: "ハッカソン2026でプロトタイプ完成", points: "+25 Pt", color: "text-amber-400" },
    { id: 2, date: "3日前", action: "Next.js 学習コース(上級)を修了", points: "+15 Pt", color: "text-cyan-400" },
    { id: 3, date: "1週間前", action: "企業X 1day サマーインターン参加", points: "+10 Pt", color: "text-orange-400" },
];

const skillOrbs = [
    { id: "python", name: "Python", color: "bg-blue-500/80 shadow-blue-500/50" },
    { id: "react", name: "React", color: "bg-cyan-500/80 shadow-cyan-500/50" },
    { id: "planning", name: "企画力", color: "bg-orange-500/80 shadow-orange-500/50" },
];

export default function IGNITERADashboard() {
    const [achievements, setAchievements] = useState(12);
    const orbContainerRef = useRef<HTMLDivElement>(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // 1. 「Ignition」アクション（火花エフェクトと実績+1）
    const handleIgnition = () => {
        // 実績カウントアップ
        setAchievements((prev) => prev + 1);

        // 両サイドからゴールドとオレンジの火花を散らす
        const duration = 2500;
        const end = Date.now() + duration;

        const frame = () => {
            // 左側からの火花
            confetti({
                particleCount: 4, angle: 60, spread: 60, origin: { x: 0, y: 0.8 },
                colors: ["#ff8c00", "#ffd700", "#ff4500", "#ffffff"],
            });
            // 右側からの火花
            confetti({
                particleCount: 4, angle: 120, spread: 60, origin: { x: 1, y: 0.8 },
                colors: ["#ff8c00", "#ffd700", "#ff4500", "#ffffff"],
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        };
        frame();
    };

    if (!isClient) return null; // Avoid hydration mismatch on initial render

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 p-6 font-sans">
            <div className="max-w-6xl mx-auto space-y-6">

                {/* ヘッダー＆カウンター */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-slate-900/50 p-6 rounded-2xl border border-slate-800 backdrop-blur-md">
                    <div>
                        <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-orange-400 to-amber-200 bg-clip-text text-transparent drop-shadow-sm">
                            IGNITERA
                        </h1>
                        <p className="text-slate-400 mt-1 text-sm font-medium">あなたの軌跡が、信頼に変わる。</p>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="text-right">
                            <p className="text-sm text-slate-400 font-medium">獲得した実績 (Achievements)</p>
                            <AnimatePresence mode="popLayout">
                                <motion.div
                                    key={achievements}
                                    initial={{ opacity: 0, y: -20, scale: 1.5, color: "#fb923c" }}
                                    animate={{ opacity: 1, y: 0, scale: 1, color: "#f8fafc" }}
                                    className="text-4xl font-black drop-shadow-[0_0_10px_rgba(251,146,60,0.5)]"
                                >
                                    {achievements}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Ignition マッチングボタン */}
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(249, 115, 22, 0.6)" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleIgnition}
                            className="relative overflow-hidden group flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-500 text-white px-6 py-3 rounded-full font-bold shadow-lg shrink-0"
                        >
                            <span className="absolute inset-0 w-full h-full bg-white/20 group-hover:translate-x-full transition-transform duration-500 ease-out -skew-x-12 -translate-x-full" />
                            <Flame className="w-5 h-5 animate-pulse" />
                            <span>Matching (Ignition!)</span>
                        </motion.button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* 左：成長曲線（Growth Curve） */}
                    <div className="col-span-1 lg:col-span-2 bg-slate-900/50 p-6 rounded-2xl border border-slate-800 backdrop-blur-md hover:border-slate-700 transition-colors">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <Activity className="text-cyan-400" /> 成長曲線
                        </h2>
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={growthData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                                    <XAxis dataKey="month" stroke="#94a3b8" tick={{ fill: '#94a3b8' }} tickLine={false} axisLine={false} />
                                    <YAxis stroke="#94a3b8" tick={{ fill: '#94a3b8' }} tickLine={false} axisLine={false} />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: "#0f172a", border: "1px solid #334155", borderRadius: "12px", boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.5)" }}
                                        itemStyle={{ fontWeight: "bold" }}
                                    />
                                    <Legend wrapperStyle={{ paddingTop: "20px" }} />
                                    <Line type="monotone" dataKey="プログラミング" stroke="#22d3ee" strokeWidth={4} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 8, strokeWidth: 0 }} />
                                    <Line type="monotone" dataKey="企画力" stroke="#fb923c" strokeWidth={4} dot={{ r: 4, strokeWidth: 2 }} activeDot={{ r: 8, strokeWidth: 0 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* 右：文化適合 (Culture Fit) */}
                    <div className="col-span-1 bg-slate-900/50 p-6 rounded-2xl border border-slate-800 backdrop-blur-md hover:border-slate-700 transition-colors">
                        <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
                            <Target className="text-rose-400" /> 企業文化適合度
                        </h2>
                        <p className="text-xs text-slate-400 mb-6 font-medium">企業Aとの相性比較（面積が広いほど高相性）</p>
                        <div className="h-[280px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <RadarChart cx="50%" cy="50%" outerRadius="65%" data={cultureData}>
                                    <PolarGrid stroke="#334155" />
                                    <PolarAngleAxis dataKey="subject" tick={{ fill: "#94a3b8", fontSize: 13, fontWeight: "bold" }} />
                                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                                    <Radar name="あなた" dataKey="student" stroke="#22d3ee" strokeWidth={2} fill="#22d3ee" fillOpacity={0.5} />
                                    <Radar name="企業A" dataKey="company" stroke="#fb923c" strokeWidth={2} fill="#fb923c" fillOpacity={0.3} />
                                    <Tooltip contentStyle={{ backgroundColor: "#0f172a", border: "1px solid #334155", borderRadius: "8px" }} />
                                    <Legend wrapperStyle={{ fontSize: "12px" }} />
                                </RadarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* 左下：行動ログ (Action Logs) */}
                    <div className="col-span-1 lg:col-span-2 bg-slate-900/50 p-6 rounded-2xl border border-slate-800 backdrop-blur-md hover:border-slate-700 transition-colors">
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <Zap className="text-amber-400" /> 行動ログ
                        </h2>
                        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
                            {actionLogs.map((log) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: log.id * 0.15 }}
                                    key={log.id}
                                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                                >
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-800 text-slate-300 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg shrink-0 z-10 transition-transform group-hover:scale-110">
                                        <Trophy className="w-5 h-5 text-amber-500" />
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-800/40 p-5 rounded-xl border border-slate-700 hover:border-slate-600 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{log.date}</span>
                                            <span className={`text-sm font-black ${log.color} bg-slate-950/80 px-3 py-1 rounded-full border border-slate-800`}>{log.points}</span>
                                        </div>
                                        <p className="text-slate-200 font-medium">{log.action}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* 右下：重力スキル・オーブ ギミック */}
                    <div className="col-span-1 bg-slate-900/50 p-6 rounded-2xl border border-slate-800 flex flex-col backdrop-blur-md hover:border-slate-700 transition-colors">
                        <h2 className="text-xl font-bold mb-2">✨ スキル・オーブ</h2>
                        <p className="text-xs text-slate-400 mb-4 font-medium">ドラッグして自由に動かしてみよう</p>

                        <div
                            ref={orbContainerRef}
                            className="flex-1 relative bg-slate-950/50 rounded-xl overflow-hidden border border-slate-800/50 mt-2 min-h-[250px] inset-shadow-sm shadow-inner"
                        >
                            {skillOrbs.map((orb, index) => (
                                <motion.div
                                    key={orb.id}
                                    drag
                                    dragConstraints={orbContainerRef}
                                    dragElastic={0.6}
                                    dragMomentum={true}
                                    whileHover={{ scale: 1.15, zIndex: 10 }}
                                    whileTap={{ scale: 0.9, cursor: "grabbing" }}
                                    initial={{ x: index * 60 + 20, y: index * 40 + 20 }}
                                    className={`absolute w-22 h-22 p-4 rounded-full flex items-center justify-center text-sm font-black text-white shadow-xl cursor-grab backdrop-blur-md border border-white/30 ${orb.color} select-none touch-none`}
                                    title={orb.name}
                                >
                                    {orb.name}
                                </motion.div>
                            ))}

                            {/* 背景の装飾 */}
                            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-700 via-transparent to-transparent" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
