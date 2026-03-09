'use client';

import React, { useMemo } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const generateData = (labels: string[]) => {
    return labels.map(label => ({
        subject: label,
        A: Math.floor(Math.random() * 3) + 3, // 3 to 5 random score
        fullMark: 5,
    }));
};

const layers = [
    {
        title: '行動レイヤー (Action Layer)',
        color: '#06b6d4', // Cyan
        glow: 'rgba(6,182,212,0.6)',
        categories: [
            { name: '①思考・計画', items: ['課題発見力', '目標設定力', '計画立案力', '構造化・抽象化', 'リソース調整力'] },
            { name: '②実行・推進', items: ['初動のスピード', '実行力・完遂力', '軌道修正力', '品質へのこだわり', 'トラブル対応力'] },
            { name: '③対人・協働', items: ['巻き込み力', '論理的伝達力', '傾聴・受容力', '交渉・折衝力', '役割・期待の把握'] },
        ]
    },
    {
        title: '成長レイヤー (Growth Layer)',
        color: '#22c55e', // Green
        glow: 'rgba(34,197,94,0.6)',
        categories: [
            { name: '④自己認識', items: ['メタ認知力', 'フィードバック受容力', '自己課題の言語化', '失敗からの学習', 'アンラーニング'] },
            { name: '⑤学習と探求', items: ['知的好奇心', '情報収集・リサーチ力', '専門性の追求', '継続的学習習慣', '模倣力（TTP）'] },
            { name: '⑥環境への適応', items: ['未知への挑戦心', '新環境への適応力', '成功事例の横展開', '仮説検証サイクル', '変化を楽しむ姿勢'] },
        ]
    },
    {
        title: '価値観レイヤー (Value Layer)',
        color: '#d946ef', // Magenta / Fuchsia
        glow: 'rgba(217,70,239,0.6)',
        categories: [
            { name: '⑦責任感', items: ['当事者意識', 'プロフェッショナリズム', '達成志向', '誠実性', '自己責任の精神'] },
            { name: '⑧チーム貢献', items: ['利他性・貢献意欲', '多様性の尊重', 'チームワーク重視', '透明性の重視', '謙虚さ'] },
            { name: '⑨精神的強さ', items: ['レジリエンス', '柔軟性・オープンマインド', '挑戦への勇気', '顧客志向', 'コスト・利益意識'] },
        ]
    }
];

const CustomTick = ({ payload, x, y, textAnchor }: any) => {
    const text = payload.value;
    const parts = text.includes('・') ? text.split('・') : [text];
    const fontSize = text.length >= 6 && parts.length === 1 ? 9 : 10;

    return (
        <text x={x} y={y} dy={text.includes('・') ? 4 : 10} textAnchor={textAnchor} fill="#888888" fontSize={fontSize} fontWeight={500}>
            {parts.map((part: string, index: number) => (
                <tspan key={index} x={x} dy={index === 0 ? 0 : 12}>
                    {index === 1 && text.includes('・') ? `・${part}` : part}
                </tspan>
            ))}
        </text>
    );
};

export default function EvaluationCharts() {
    return (
        <div className="w-full mt-24 space-y-12 pb-10">
            <div className="mb-10 text-center md:text-left relative z-10">
                <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                    次世代評価エンジン
                </h2>
                <p className="text-sm font-mono text-zinc-400 mt-2 uppercase tracking-widest">
                    Next-Gen Evaluation Engine
                </p>
            </div>

            {layers.map((layer, layerIdx) => (
                <motion.div
                    key={layerIdx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: layerIdx * 0.15 }}
                    className="relative bg-white/[0.02] border border-white/5 rounded-3xl p-6 md:p-10 shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden"
                >
                    {/* Layer glow effect */}
                    <div
                        className="absolute top-0 left-0 w-full h-1 opacity-60"
                        style={{ background: `linear-gradient(90deg, transparent, ${layer.color}, transparent)` }}
                    />
                    <div
                        className="absolute -top-[100px] -left-[100px] w-[250px] h-[250px] rounded-full mix-blend-screen blur-[100px] opacity-20 pointer-events-none"
                        style={{ backgroundColor: layer.color }}
                    />

                    <h3 className="text-2xl font-bold mb-10 flex items-center gap-4 relative z-10" style={{ color: layer.color }}>
                        <span className="w-2.5 h-8 rounded-full" style={{ backgroundColor: layer.color, boxShadow: `0 0 15px ${layer.glow}` }} />
                        {layer.title}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                        {layer.categories.map((category, catIdx) => {
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const data = useMemo(() => generateData(category.items), [category.items]);

                            return (
                                <div
                                    key={catIdx}
                                    className="bg-black/60 border border-white/10 rounded-2xl p-5 flex flex-col items-center hover:border-white/20 hover:bg-black/80 transition-all duration-300 shadow-lg relative group"
                                >
                                    {/* Subtle hover glow inside card */}
                                    <div
                                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                                        style={{ background: `radial-gradient(circle at center, ${layer.color}, transparent)` }}
                                    />

                                    <h4 className="text-zinc-200 font-bold mb-6 text-center tracking-wider bg-black/50 px-4 py-2 rounded-full border border-white/5 shadow-sm text-sm">
                                        {category.name}
                                    </h4>
                                    <div className="w-full h-[250px] md:h-[300px]">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <RadarChart cx="50%" cy="50%" outerRadius="45%" data={data}>
                                                <PolarGrid stroke="rgba(255,255,255,0.15)" strokeDasharray="3 3" />
                                                <PolarAngleAxis
                                                    dataKey="subject"
                                                    tick={<CustomTick />}
                                                />
                                                <PolarRadiusAxis
                                                    angle={30}
                                                    domain={[0, 5]}
                                                    tick={false}
                                                    axisLine={false}
                                                />
                                                <Radar
                                                    name={category.name}
                                                    dataKey="A"
                                                    stroke={layer.color}
                                                    fill={layer.color}
                                                    strokeWidth={2}
                                                    fillOpacity={0.35}
                                                    isAnimationActive={true}
                                                />
                                            </RadarChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
