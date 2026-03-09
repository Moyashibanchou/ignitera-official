"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type ItemType = {
    name: string;
    desc: string;
};

type SelectedItemType = ItemType & {
    colorBorder: string;
    colorText: string;
    layerTitle: string;
};

const matrixData = [
    {
        id: "L1", title: "ACTION_LAYER", color: "border-cyan-500", textColor: "text-cyan-400", bgGlow: "bg-cyan-500/10",
        groups: [
            {
                name: "思考・計画", items: [
                    { name: "課題発見力", desc: "指示されたことだけでなく、現状のボトルネックや改善点を自ら見つけ出せる。" },
                    { name: "目標設定力", desc: "曖昧な状態からでも、達成すべき明確なゴールを定義できる。" },
                    { name: "計画立案力", desc: "目標達成に向けた現実的かつ論理的なマイルストーンを設計できる。" },
                    { name: "構造化・抽象化", desc: "複雑な事象から本質を抽出し、分かりやすい構造に整理できる。" },
                    { name: "リソース調整力", desc: "人、時間、予算などの限られた資源を最適に配分できる。" }
                ]
            },
            {
                name: "実行・推進", items: [
                    { name: "初動のスピード", desc: "意思決定から行動までのタイムラグがなく、迅速に着手できる。" },
                    { name: "実行力・完遂力", desc: "一度決めたことを途中で投げ出さず、最後までやり遂げる力。" },
                    { name: "軌道修正力", desc: "状況の変化を素早く察知し、柔軟に計画を修正できる。" },
                    { name: "品質へのこだわり", desc: "細部まで妥協せず、プロフェッショナルとしての品質を追求する。" },
                    { name: "トラブル対応力", desc: "予期せぬ問題が発生しても、冷静かつ迅速に解決策を導き出せる。" }
                ]
            },
            {
                name: "対人・協働", items: [
                    { name: "巻き込み力", desc: "周囲の共感を生み出し、協力者としてプロジェクトに参画させる。" },
                    { name: "論理的伝達力", desc: "複雑な内容を論理的かつ簡潔に相手に伝えるプレゼンテーション能力。" },
                    { name: "傾聴・受容力", desc: "相手の意見を批判せず受け入れ、真意を汲み取るコミュニケーション。" },
                    { name: "交渉・折衝力", desc: "利害が対立する場面でも、建設的な対話で落とし所を見つける。" },
                    { name: "役割・期待の把握", desc: "チーム内で自分が果たすべき役割と期待値を正確に認識する。" }
                ]
            }
        ]
    },
    {
        id: "L2", title: "GROWTH_LAYER", color: "border-emerald-500", textColor: "text-emerald-400", bgGlow: "bg-emerald-500/10",
        groups: [
            {
                name: "自己認識", items: [
                    { name: "メタ認知力", desc: "自身の思考や行動を客観的に俯瞰し、冷静に評価できる能力。" },
                    { name: "フィードバック受容力", desc: "耳の痛い指摘であっても、素直に受け止め成長の糧にできる。" },
                    { name: "自己課題の言語化", desc: "自身の弱みや課題を曖昧にせず、明確な言葉で表現できる。" },
                    { name: "失敗からの学習", desc: "失敗を恐れず、その原因を分析し次のアクションへ繋げられる。" },
                    { name: "アンラーニング", desc: "過去の成功体験や固定観念を捨て、新しい価値観をインプットできる。" }
                ]
            },
            {
                name: "学習と探求", items: [
                    { name: "知的好奇心", desc: "未知の領域に対して強い関心を持ち、自発的に探求しようとする。" },
                    { name: "情報収集・リサーチ力", desc: "必要な情報を多角的なソースから効率よく収集し精査できる。" },
                    { name: "専門性の追求", desc: "自身の専門領域において、常に最新の知見やディープな技術を追求する。" },
                    { name: "継続的学習習慣", desc: "一時的ではなく、日常的に新しい知識をアップデートする習慣がある。" },
                    { name: "模倣力(TTP)", desc: "優れた事例や他者の良い部分を徹底的に模倣し（TTP）、自分のものにする。" }
                ]
            },
            {
                name: "環境への適応", items: [
                    { name: "未知への挑戦心", desc: "経験のない新しい分野にも物怖じせず、果敢に飛び込んでいく。" },
                    { name: "新環境への適応力", desc: "組織のカルチャーや新しいルールの変化に素早く順応できる。" },
                    { name: "成功事例の横展開", desc: "ひとつの成功を属人化させず、組織全体へ共有し仕組み化できる。" },
                    { name: "仮説検証サイクル", desc: "仮説を立てて小さく試し、結果から学びを得るサイクルを回せる。" },
                    { name: "変化を楽しむ姿勢", desc: "不確実性の高い状況をストレスではなく、成長機会としてポジティブに捉える。" }
                ]
            }
        ]
    },
    {
        id: "L3", title: "MINDSET_LAYER", color: "border-orange-500", textColor: "text-orange-400", bgGlow: "bg-orange-500/10",
        groups: [
            {
                name: "責任感", items: [
                    { name: "当事者意識", desc: "自分の担当範囲外の課題であっても「自分ごと」として捉える。" },
                    { name: "プロフェッショナリズム", desc: "どのような環境下でも、プロフェッショナルとしての矜持を持つ。" },
                    { name: "達成志向", desc: "高い目標を設定し、それをクリアすることに対して強い執着心を持つ。" },
                    { name: "誠実性", desc: "ごまかしや隠し立てをせず、常に誠実でオープンな態度で仕事と向き合う。" },
                    { name: "自己責任の精神", desc: "失敗や不運を他責にせず、自らのコントロール範囲の行動にフォーカスする。" }
                ]
            },
            {
                name: "チーム貢献", items: [
                    { name: "利他性・貢献意欲", desc: "自身の利益よりも、チームや顧客、組織全体の利益を優先できる。" },
                    { name: "多様性の尊重", desc: "異なる背景や価値観を持つメンバーを尊重し、シナジーを生み出せる。" },
                    { name: "チームワーク重視", desc: "個人のスタンドプレーではなく、チームとしての成果の最大化を測る。" },
                    { name: "透明性の重視", desc: "情報や進捗をオープンにし、ブラックボックス化を避ける姿勢。" },
                    { name: "謙虚さ", desc: "自身の能力や実績に驕ることなく、常に学ぶ姿勢を持ち続ける。" }
                ]
            },
            {
                name: "精神的強さ", items: [
                    { name: "レジリエンス", desc: "強いストレスや困難な状況に直面しても、折れずに立ち直る回復力。" },
                    { name: "柔軟性・オープンマインド", desc: "自身の考えに固執せず、異なる意見や新しいアプローチを歓迎する。" },
                    { name: "挑戦への勇気", desc: "失敗のリスクがある状況でも、計算されたリスクを取って一歩踏み出せる。" },
                    { name: "顧客志向", desc: "常に「顧客にとっての真の価値は何か」を問い続け、自己本位にならない。" },
                    { name: "コスト・利益意識", desc: "単なる活動ではなく、投資対効果や利益貢献を意識した行動がとれる。" }
                ]
            }
        ]
    }
];

export default function AdvancedStatusBoard() {
    const [selectedItem, setSelectedItem] = useState<SelectedItemType | null>(null);

    const handleItemClick = (item: ItemType, layerColor: string, layerTextColor: string, layerTitle: string) => {
        setSelectedItem({
            ...item,
            colorBorder: layerColor,
            colorText: layerTextColor,
            layerTitle: layerTitle
        });
    };

    const closeModal = () => {
        setSelectedItem(null);
    };

    return (
        <div className="w-full relative">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {matrixData.map((layer) => (
                    <div key={layer.id} className="relative border border-white/10 bg-black/40 backdrop-blur-sm p-6 overflow-hidden group">
                        {/* Background Glow */}
                        <div className={`absolute top-0 right-0 w-32 h-32 ${layer.bgGlow} blur-3xl rounded-full opacity-50 pointer-events-none group-hover:opacity-100 transition-opacity duration-700`} />

                        {/* Corner Decorations */}
                        <div className={`absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 ${layer.color} opacity-70`} />
                        <div className={`absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 ${layer.color} opacity-70`} />
                        <div className={`absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 ${layer.color} opacity-70`} />
                        <div className={`absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 ${layer.color} opacity-70`} />

                        {/* Header */}
                        <div className="flex items-center justify-between mb-6 relative z-10">
                            <h3 className={`font-mono text-sm tracking-widest ${layer.textColor}`}>
                                [ {layer.id} ] {layer.title}
                            </h3>
                            <div className="font-mono text-[10px] text-zinc-600 animate-pulse hidden sm:block">
                                SYS.EVAL_RATE: 99.8% // OPTIMAL
                            </div>
                        </div>

                        {/* Groups */}
                        <div className="space-y-6 relative z-10">
                            {layer.groups.map((group, gIdx) => (
                                <div key={gIdx}>
                                    <div className="font-mono text-xs text-zinc-500 mb-2">
                                        {group.name}
                                    </div>
                                    <div className="flex flex-wrap gap-1.5">
                                        {group.items.map((item, iIdx) => (
                                            <button
                                                key={iIdx}
                                                onClick={() => handleItemClick(item, layer.color, layer.textColor, layer.title)}
                                                className="px-1.5 py-0.5 border border-zinc-800 bg-black text-[10px] md:text-xs text-zinc-300 font-mono hover:border-current hover:text-white transition-all duration-200 cursor-pointer hover:scale-105"
                                            >
                                                {item.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Bottom Terminal Text */}
                        <div className="mt-6 pt-2 border-t border-white/5 font-mono text-[10px] text-zinc-700 text-right">
                            DATA_SYNC_COMPLETE // {layer.id}_CORE_ACTIVE
                        </div>
                    </div>
                ))}
            </div>

            {/* Interactive HUD Modal */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
                        onClick={closeModal}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 10 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 10 }}
                            transition={{ type: "spring", damping: 20, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            className={`relative max-w-lg w-full bg-black/90 pb-8 pt-6 px-6 border ${selectedItem.colorBorder} shadow-[0_0_30px_rgba(0,0,0,0.5)]`}
                            style={{
                                boxShadow: `0 0 30px var(--tw-shadow-color)`,
                                '--tw-shadow-color': selectedItem.colorBorder.includes('cyan') ? 'rgba(6,182,212,0.15)' :
                                    selectedItem.colorBorder.includes('emerald') ? 'rgba(16,185,129,0.15)' :
                                        'rgba(249,115,22,0.15)'
                            } as React.CSSProperties}
                        >
                            {/* Modal Corner Decorations */}
                            <div className={`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 ${selectedItem.colorBorder}`} />
                            <div className={`absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 ${selectedItem.colorBorder}`} />
                            <div className={`absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 ${selectedItem.colorBorder}`} />
                            <div className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 ${selectedItem.colorBorder}`} />

                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <div className="font-mono text-[10px] text-zinc-500 mb-2">
                                        &gt; SYS.DECRYPTING_DATA... [ <span className="text-emerald-500">DONE</span> ]
                                    </div>
                                    <h4 className={`font-mono text-xl tracking-wider uppercase ${selectedItem.colorText}`}>
                                        {selectedItem.name}
                                    </h4>
                                    <div className="font-mono text-[10px] text-zinc-600 mt-1 uppercase">
                                        DATA_SOURCE: {selectedItem.layerTitle}
                                    </div>
                                </div>
                                <button
                                    onClick={closeModal}
                                    className="font-mono text-[10px] text-zinc-500 hover:text-white border border-zinc-700 bg-zinc-900/50 hover:border-white px-2 py-1 transition-colors flex items-center gap-1"
                                >
                                    <span className="text-xs">×</span> [ ESC ]
                                </button>
                            </div>

                            <div className="font-mono text-sm text-zinc-300 tracking-wide leading-relaxed border-l-2 border-zinc-800 pl-4 py-1">
                                {selectedItem.desc}
                            </div>

                            <div className="mt-8 flex justify-between items-end border-t border-zinc-800/50 pt-3">
                                <div className="font-mono text-[10px] text-zinc-600 flex gap-4">
                                    <span>SECURE_LINK: ESTABLISHED</span>
                                    <span className="animate-pulse">_</span>
                                </div>
                                <div className="w-16 h-1 flex gap-1">
                                    {[...Array(4)].map((_, i) => (
                                        <div key={i} className={`flex-1 ${selectedItem.colorBorder.replace('border-', 'bg-')}/40`} />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
