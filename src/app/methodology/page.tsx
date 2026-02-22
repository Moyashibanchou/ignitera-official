import FadeIn from "@/components/shared/FadeIn";
import AdvancedStatusBoard from "@/components/methodology/AdvancedStatusBoard";

export default function MethodologyPage() {
    return (
        <div className="min-h-screen bg-transparent text-zinc-300 font-sans selection:bg-ignitera-500 selection:text-white pt-24 pb-32 px-6 relative">

            {/* Dark background grid for methodology */}
            <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#050505]">
                <div className="absolute top-0 right-[20%] w-[30vw] h-[30vw] rounded-full mix-blend-screen blur-[120px] opacity-[0.1] bg-ignitera-500" />
                <div className="absolute inset-0 opacity-[0.2]" style={{ backgroundImage: "radial-gradient(#3f3f46 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
                <FadeIn>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-2 h-2 rounded-full bg-ignitera-500 animate-pulse shadow-[0_0_10px_#ff4d00]" />
                        <p className="text-ignitera-500 font-medium tracking-wide text-sm uppercase">Methodology</p>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-normal tracking-tight mb-20 text-white glow-text">
                        評価ロジックと<br />データ設計
                    </h1>
                </FadeIn>

                {/* 4 Layer Advanced Status Board */}
                <FadeIn delay={0.1}>
                    <section className="mb-32">
                        <h2 className="text-2xl font-medium mb-12 pb-4 border-b border-white/10 text-white">アドバンスド・ステータスボード (16 Metrics)</h2>
                        <AdvancedStatusBoard />
                        <div className="mt-8 p-6 glass-panel border border-white/5 text-center text-sm font-medium text-zinc-400 rounded-sm">
                            + これら4レイヤー・16項目の行動データに「企業固有の価値観ベクトル」を掛け合わせて最終適合度を動的に算出します。
                        </div>
                    </section>
                </FadeIn>

                {/* Data Arch */}
                <FadeIn delay={0.2}>
                    <section className="mb-32">
                        <h2 className="text-2xl font-medium mb-12 pb-4 border-b border-white/10 text-white">データアーキテクチャ</h2>
                        <div className="flex flex-col md:flex-row justify-between items-center md:items-stretch gap-6 text-center text-zinc-400 font-light">
                            <div className="flex-1 p-8 glass-panel">
                                <h4 className="font-medium text-white mb-4 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">1. 計測指標 (Metrics)</h4>
                                <p className="text-sm">学習完了、タスク提出、GitHub等との連携から実イベントを同期</p>
                            </div>
                            <div className="text-2xl font-light text-zinc-600 flex items-center">&rarr;</div>
                            <div className="flex-1 p-8 glass-panel">
                                <h4 className="font-medium text-white mb-4 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">2. ログ化 (Logging)</h4>
                                <p className="text-sm">改ざん不可能なタイムスタンプと共に活動履歴DBに記録・暗号化</p>
                            </div>
                            <div className="text-2xl font-light text-zinc-600 flex items-center">&rarr;</div>
                            <div className="flex-1 p-8 glass-panel border border-ignitera-500/30 bg-ignitera-500/5 shadow-[0_0_20px_rgba(255,77,0,0.1)] hover:shadow-[0_0_30px_rgba(255,77,0,0.2)] transition-shadow">
                                <h4 className="font-medium text-ignitera-500 mb-4 drop-shadow-[0_0_8px_rgba(255,77,0,0.6)]">3. 定量化 (Quantification)</h4>
                                <p className="text-sm">偏差値化・スコア化アルゴリズムによる絶対指標（グラフ）への変換</p>
                            </div>
                        </div>
                    </section>
                </FadeIn>

                {/* Transparency */}
                <FadeIn delay={0.3}>
                    <section>
                        <h2 className="text-2xl font-medium mb-8 pb-4 border-b border-white/10 text-white">Transparency by Design</h2>
                        <p className="text-xl text-zinc-400 font-light leading-relaxed mb-8 max-w-3xl">
                            AIやアルゴリズムのブラックボックス化は、評価への不信感を生み出します。<br />
                            IGNITERAの算定ロジックは常に明瞭であり、意図のある美しい数式として公開されています。
                        </p>
                        <div className="font-mono text-sm leading-8 text-zinc-300 bg-black/60 border border-white/10 p-8 rounded-lg overflow-x-auto shadow-inner relative">
                            {/* Window buttons simulation */}
                            <div className="absolute top-3 left-4 flex gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                            </div>
                            <div className="mt-4">
                                <span className="text-white font-medium glow-text drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">Matching_Score</span> = <span className="text-ignitera-500">Σ</span>(w_i * S_i) + α * C_fit
                                <br /><br />
                                <span className="text-zinc-500">// w_i : 企業ごとの重要度ウェイト（例: 論理性=0.8, 創造性=0.2）</span><br />
                                <span className="text-zinc-500">// S_i : 学生のスキル・過去の行動スコア</span><br />
                                <span className="text-zinc-500">// C_fit: 組織診断から算出される、文化適合への純粋な相性ベクトル</span>
                            </div>
                        </div>
                    </section>
                </FadeIn>
            </div>
        </div>
    );
}
