import FadeIn from "@/components/shared/FadeIn";

export default function MethodologyPage() {
    return (
        <div className="min-h-screen bg-[#FFFFFF] text-[#3C4043] font-sans selection:bg-[#4285F4] selection:text-white pt-24 pb-32 px-6">
            <div className="max-w-5xl mx-auto">
                <FadeIn>
                    <p className="text-[#4285F4] font-medium tracking-wide mb-6 text-sm uppercase">Methodology</p>
                    <h1 className="text-5xl md:text-7xl font-normal tracking-tight mb-20 text-[#3C4043]">
                        評価ロジックと<br />データ設計
                    </h1>
                </FadeIn>

                {/* 4 Layer */}
                <FadeIn delay={0.1}>
                    <section className="mb-32">
                        <h2 className="text-2xl font-medium mb-12 pb-4 border-b border-gray-100 text-[#3C4043]">4レイヤー評価構造</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { title: "成果", desc: "完了したプロジェクトやタスクの絶対量。成果そのものの実証ログ。", color: "text-[#4285F4]" },
                                { title: "再現性", desc: "一時的な成果ではなく、質の高いアウトプットを継続する能力の測定。", color: "text-[#EA4335]" },
                                { title: "成長傾向", desc: "時間の経過とともに向上するスキルの傾き（微分値）。ポテンシャルの源泉。", color: "text-[#FBBC05]" },
                                { title: "組織貢献", desc: "チーム内でのコミュニケーションや、他コミュニティへのプラスの波及効果。", color: "text-[#34A853]" },
                            ].map((layer, i) => (
                                <div key={i} className="group p-8 border border-gray-100 rounded-sm hover:shadow-md transition-all duration-300">
                                    <h3 className={`text-xl font-medium mb-4 transition-colors ${layer.color}`}>{layer.title}</h3>
                                    <p className="text-gray-500 font-light leading-relaxed">{layer.desc}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 p-6 bg-gray-50 text-center text-sm font-medium text-[#3C4043] rounded-sm">
                            + これら4レイヤーの行動データに「企業固有の価値観ベクトル」を掛け合わせて最終適合度を算出します。
                        </div>
                    </section>
                </FadeIn>

                {/* Data Arch */}
                <FadeIn delay={0.2}>
                    <section className="mb-32">
                        <h2 className="text-2xl font-medium mb-12 pb-4 border-b border-gray-100 text-[#3C4043]">データアーキテクチャ</h2>
                        <div className="flex flex-col md:flex-row justify-between items-center md:items-stretch gap-6 text-center text-gray-500 font-light">
                            <div className="flex-1 p-8 border border-gray-200 rounded-sm">
                                <h4 className="font-medium text-[#3C4043] mb-4">1. 計測指標 (Metrics)</h4>
                                <p className="text-sm">学習完了、タスク提出、GitHub等との連携から実イベントを同期</p>
                            </div>
                            <div className="text-2xl font-light text-gray-300 flex items-center">&rarr;</div>
                            <div className="flex-1 p-8 border border-gray-200 rounded-sm">
                                <h4 className="font-medium text-[#3C4043] mb-4">2. ログ化 (Logging)</h4>
                                <p className="text-sm">改ざん不可能なタイムスタンプと共に活動履歴DBに記録・暗号化</p>
                            </div>
                            <div className="text-2xl font-light text-gray-300 flex items-center">&rarr;</div>
                            <div className="flex-1 p-8 border border-[#4285F4] bg-blue-50/20 rounded-sm">
                                <h4 className="font-medium text-[#4285F4] mb-4">3. 定量化 (Quantification)</h4>
                                <p className="text-sm">偏差値化・スコア化アルゴリズムによる絶対指標（グラフ）への変換</p>
                            </div>
                        </div>
                    </section>
                </FadeIn>

                {/* Transparency */}
                <FadeIn delay={0.3}>
                    <section>
                        <h2 className="text-2xl font-medium mb-8 pb-4 border-b border-gray-100 text-[#3C4043]">Transparency by Design</h2>
                        <p className="text-xl text-gray-500 font-light leading-relaxed mb-8 max-w-3xl">
                            AIやアルゴリズムのブラックボックス化は、評価への不信感を生み出します。<br />
                            IGNITERAの算定ロジックは常に明瞭であり、意図のある美しい数式として公開されています。
                        </p>
                        <div className="font-mono text-sm leading-8 text-gray-400 bg-gray-50 p-8 rounded-sm overflow-x-auto">
                            <span className="text-[#3C4043] font-medium">Matching_Score</span> = Σ(w_i * S_i) + α * C_fit
                            <br /><br />
                            <span className="text-gray-400">// w_i : 企業ごとの重要度ウェイト（例: 論理性=0.8, 創造性=0.2）</span><br />
                            <span className="text-gray-400">// S_i : 学生のスキル・過去の行動スコア</span><br />
                            <span className="text-gray-400">// C_fit: 組織診断から算出される、文化適合への純粋な相性ベクトル</span>
                        </div>
                    </section>
                </FadeIn>
            </div>
        </div>
    );
}
