import React from 'react';

const EvaluationMatrix45: React.FC = () => {
    // [L1] ACTION_LAYER (シアン)
    const actionLayer = {
        title: "ACTION_LAYER",
        color: "text-cyan-400",
        borderColor: "border-cyan-400/30",
        items: [
            "課題発見力", "目標設定力", "計画立案力", "構造化・抽象化", "リソース調整力",
            "初動のスピード", "実行力・完遂力", "軌道修正力", "品質へのこだわり", "トラブル対応力",
            "巻き込み力", "論理的伝達力", "傾聴・受容力", "交渉・折衝力", "役割・期待の把握"
        ]
    };

    // [L2] GROWTH_LAYER (エメラルド)
    const growthLayer = {
        title: "GROWTH_LAYER",
        color: "text-emerald-400",
        borderColor: "border-emerald-400/30",
        items: [
            "メタ認知力", "フィードバック受容力", "自己課題の言語化", "失敗からの学習", "アンラーニング",
            "知的好奇心", "情報収集・リサーチ力", "専門性の追求", "継続的学習習慣", "模倣力（TTP）",
            "未知への挑戦心", "新環境への適応力", "成功事例の横展開", "仮説検証サイクル", "変化を楽しむ姿勢"
        ]
    };

    // [L3] MINDSET_LAYER (オレンジ/マゼンタ)
    const mindsetLayer = {
        title: "MINDSET_LAYER",
        color: "text-orange-400",
        borderColor: "border-orange-400/30",
        items: [
            "当事者意識", "プロフェッショナリズム", "達成志向", "誠実性", "自己責任の精神",
            "利他性・貢献意欲", "多様性の尊重", "チームワーク重視", "透明性の重視", "謙虚さ",
            "レジリエンス", "柔軟性・オープンマインド", "挑戦への勇気", "顧客志向", "コスト・利益意識"
        ]
    };

    const renderLayer = (layer: { title: string; color: string; borderColor: string; items: string[] }) => (
        <div className={`relative p-6 border border-white/10 bg-black/40 backdrop-blur-sm group hover:border-white/20 transition-colors`}>
            {/* 角のターゲットマーク */}
            <div className={`absolute top-0 left-0 w-3 h-3 border-t border-l ${layer.borderColor} group-hover:border-white/50 transition-colors`}></div>
            <div className={`absolute top-0 right-0 w-3 h-3 border-t border-r ${layer.borderColor} group-hover:border-white/50 transition-colors`}></div>
            <div className={`absolute bottom-0 left-0 w-3 h-3 border-b border-l ${layer.borderColor} group-hover:border-white/50 transition-colors`}></div>
            <div className={`absolute bottom-0 right-0 w-3 h-3 border-b border-r ${layer.borderColor} group-hover:border-white/50 transition-colors`}></div>

            <div className={`font-mono text-sm mb-6 ${layer.color} tracking-widest`}>
                &gt; {layer.title}
            </div>

            <div className="flex flex-wrap gap-2">
                {layer.items.map((item: string, idx: number) => (
                    <span
                        key={idx}
                        className="px-1.5 py-0.5 border border-white/10 bg-black/50 text-[10px] text-zinc-400 whitespace-nowrap hover:text-white hover:border-white/30 transition-colors cursor-default"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );

    return (
        <div className="w-full font-mono relative">
            <div className="text-xs text-zinc-500 mb-6 tracking-widest animate-[pulse_3s_ease-in-out_infinite]">
                // INIT_SEQUENCE: BOOTING 45-DIMENSIONAL_MATRIX...
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {renderLayer(actionLayer)}
                {renderLayer(growthLayer)}
                {renderLayer(mindsetLayer)}
            </div>

            <div className="text-xs text-zinc-500 mt-6 tracking-widest flex justify-between items-center border-t border-white/5 pt-4">
                <span>MODULE_DATA_SYNC: 100%</span>
                <span>SYS.STATUS: <span className="text-emerald-500 font-bold border-emerald-500/30 border px-1 ml-1 bg-emerald-500/10">OPTIMAL</span></span>
            </div>
        </div>
    );
};

export default EvaluationMatrix45;
