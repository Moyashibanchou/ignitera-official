import FadeIn from "@/components/shared/FadeIn";

export default function RoadmapPage() {
    return (
        <div className="min-h-screen bg-transparent text-zinc-300 font-sans selection:bg-ignitera-500 selection:text-white pt-24 pb-32 px-6 relative">

            {/* Dark background grid */}
            <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#050505]">
                <div className="absolute bottom-[20%] left-[30%] w-[40vw] h-[40vw] rounded-full mix-blend-screen blur-[120px] opacity-[0.1] bg-ignitera-500" />
                <div className="absolute inset-0 opacity-[0.2]" style={{ backgroundImage: "radial-gradient(#3f3f46 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
                <FadeIn>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-2 h-2 rounded-full bg-ignitera-500 animate-pulse shadow-[0_0_10px_#ff4d00]" />
                        <p className="text-ignitera-500 font-medium tracking-wide text-sm uppercase">Roadmap & Trust</p>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-normal tracking-tight mb-20 text-white glow-text">
                        実証メカニズムと展開
                    </h1>
                </FadeIn>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-7">
                        {/* Trust Proof */}
                        <FadeIn delay={0.1}>
                            <section className="mb-24">
                                <h2 className="text-2xl font-medium mb-8 pb-4 border-b border-white/10 text-white">実証計画 (Proof of Trust)</h2>
                                <p className="text-lg text-zinc-400 font-light leading-relaxed mb-6">
                                    システムの絶対的な信頼性は、「本当に機能するか」という実績データのみによって証明されます。私たちは評価基盤の正当性を以下のアプローチで実証し続けます。
                                </p>
                                <ul className="list-disc list-outside ml-5 space-y-4 text-zinc-400 font-light leading-relaxed">
                                    <li><strong className="text-white font-medium drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">離職率の長期追跡：</strong>IGNITERA経由でマッチングした人材の、入社後1〜3年における定着率およびエンゲージメントスコアの推移定点観測。</li>
                                    <li><strong className="text-white font-medium drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">評価モデルのA/Bテスト：</strong>「従来型（面接中心）」で採用した層と「ログ評価」で通過した層のアウトプットを比較検証するデータエコシステムの構築。</li>
                                    <li><strong className="text-white font-medium drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">過剰適合の防止：</strong>データ偏重による「システムハック」を防ぐための、半期ごとのアルゴリズム監査および重み係数のキャリブレーション。</li>
                                </ul>
                            </section>
                        </FadeIn>

                        {/* Risk Management */}
                        <FadeIn delay={0.3}>
                            <section>
                                <h2 className="text-2xl font-medium mb-8 pb-4 border-b border-white/10 text-white">リスク管理（Trustworthy AI）</h2>
                                <p className="text-lg text-zinc-400 font-light leading-relaxed mb-6">
                                    データアーキテクチャに完全な公平性は存在しません。だからこそ、「過去のデータが常に未来を規定する」というアルゴリズム特有のバイアスを排除することを誓います。
                                </p>
                                <p className="text-lg text-zinc-400 font-light leading-relaxed">
                                    失敗や未経験エリアへのランダムな挑戦を正当に評価する<strong className="text-ignitera-500 font-medium border-b border-ignitera-500/50 pb-1 ml-1 drop-shadow-[0_0_8px_rgba(255,77,0,0.5)]">「ゆらぎ係数（Exploration Rate）」</strong>の導入や、特定のバックグラウンドに不利に働く差別的パラメータの除外を、事業の最優先事項として徹底します。
                                </p>
                            </section>
                        </FadeIn>
                    </div>

                    <div className="lg:col-span-5">
                        {/* Timeline */}
                        <FadeIn delay={0.2}>
                            <section className="glass-panel p-8 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-ignitera-500 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[trace-y_2s_linear_infinite]" />
                                <h2 className="text-2xl font-medium mb-12 pb-4 border-b border-white/10 text-white">展開フェーズ</h2>
                                <div className="relative border-l border-white/10 ml-4 space-y-16 pb-8">
                                    {[
                                        { phase: "Phase 1 : MVP", desc: "限定された企業と学生層でのクローズドβテスト。アルゴリズムの基礎データ収集・検証。" },
                                        { phase: "Phase 2 : Sales Org", desc: "初期テストの成功モデルを基にした、営業組織展開。アーリーアダプターへの直接導入とサクセス伴走。" },
                                        { phase: "Phase 3 : SaaS Standard", desc: "セルフサーブで導入・分析が完結する標準化SaaSのリリース。評価APIの一部公開。" },
                                        { phase: "Phase 4 : Social Infra", desc: "学歴・職歴に次ぐ、事実上の「第三の信頼情報インフラ」として社会全体へ浸透。" },
                                    ].map((item, i) => (
                                        <div key={i} className="relative pl-10 group/item">
                                            {/* Glowing timeline node */}
                                            <div className="absolute w-3 h-3 bg-ignitera-500 rounded-full -left-[6.5px] top-1.5 shadow-[0_0_15px_#ff4d00]" />
                                            <div className="absolute w-1.5 h-1.5 bg-white rounded-full -left-[3.5px] top-[9px]" />

                                            <h3 className="text-xl font-medium text-white mb-3 group-hover/item:text-ignitera-500 transition-colors drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] group-hover/item:drop-shadow-[0_0_8px_rgba(255,77,0,0.6)]">{item.phase}</h3>
                                            <p className="text-zinc-500 font-light text-sm leading-relaxed group-hover/item:text-zinc-400 transition-colors">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </div>
    );
}
