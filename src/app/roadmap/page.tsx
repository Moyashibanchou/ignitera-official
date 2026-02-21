import FadeIn from "@/components/shared/FadeIn";

export default function RoadmapPage() {
    return (
        <div className="min-h-screen bg-[#FFFFFF] text-[#3C4043] font-sans selection:bg-[#FBBC05] selection:text-[#3C4043] pt-24 pb-32 px-6">
            <div className="max-w-5xl mx-auto">
                <FadeIn>
                    <p className="text-[#FBBC05] font-medium tracking-wide mb-6 text-sm uppercase">Roadmap & Trust</p>
                    <h1 className="text-5xl md:text-7xl font-normal tracking-tight mb-20 text-[#3C4043]">
                        実証メカニズムと展開
                    </h1>
                </FadeIn>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-7">
                        {/* Trust Proof */}
                        <FadeIn delay={0.1}>
                            <section className="mb-24">
                                <h2 className="text-2xl font-medium mb-8 pb-4 border-b border-gray-100 text-[#3C4043]">実証計画 (Proof of Trust)</h2>
                                <p className="text-lg text-gray-500 font-light leading-relaxed mb-6">
                                    システムの絶対的な信頼性は、「本当に機能するか」という実績データのみによって証明されます。私たちは評価基盤の正当性を以下のアプローチで実証し続けます。
                                </p>
                                <ul className="list-disc list-outside ml-5 space-y-4 text-gray-500 font-light leading-relaxed">
                                    <li><strong className="text-[#3C4043] font-medium">離職率の長期追跡：</strong>IGNITERA経由でマッチングした人材の、入社後1〜3年における定着率およびエンゲージメントスコアの推移定点観測。</li>
                                    <li><strong className="text-[#3C4043] font-medium">評価モデルのA/Bテスト：</strong>「従来型（面接中心）」で採用した層と「ログ評価」で通過した層のアウトプットを比較検証するデータエコシステムの構築。</li>
                                    <li><strong className="text-[#3C4043] font-medium">過剰適合の防止：</strong>データ偏重による「システムハック」を防ぐための、半期ごとのアルゴリズム監査および重み係数のキャリブレーション。</li>
                                </ul>
                            </section>
                        </FadeIn>

                        {/* Risk Management */}
                        <FadeIn delay={0.3}>
                            <section>
                                <h2 className="text-2xl font-medium mb-8 pb-4 border-b border-gray-100 text-[#3C4043]">リスク管理（Trustworthy AI）</h2>
                                <p className="text-lg text-gray-500 font-light leading-relaxed mb-6">
                                    データアーキテクチャに完全な公平性は存在しません。だからこそ、「過去のデータが常に未来を規定する」というアルゴリズム特有のバイアスを排除することを誓います。
                                </p>
                                <p className="text-lg text-gray-500 font-light leading-relaxed">
                                    失敗や未経験エリアへのランダムな挑戦を正当に評価する<strong className="text-[#3C4043] font-medium border-b border-gray-300">「ゆらぎ係数（Exploration Rate）」</strong>の導入や、特定のバックグラウンドに不利に働く差別的パラメータの除外を、事業の最優先事項として徹底します。
                                </p>
                            </section>
                        </FadeIn>
                    </div>

                    <div className="lg:col-span-5">
                        {/* Timeline */}
                        <FadeIn delay={0.2}>
                            <section>
                                <h2 className="text-2xl font-medium mb-12 pb-4 border-b border-gray-100 text-[#3C4043]">展開フェーズ</h2>
                                <div className="relative border-l border-gray-100 ml-4 space-y-16 pb-8">
                                    {[
                                        { phase: "Phase 1 : MVP", desc: "限定された企業と学生層でのクローズドβテスト。アルゴリズムの基礎データ収集・検証。" },
                                        { phase: "Phase 2 : Sales Org", desc: "初期テストの成功モデルを基にした、営業組織展開。アーリーアダプターへの直接導入とサクセス伴走。" },
                                        { phase: "Phase 3 : SaaS Standard", desc: "セルフサーブで導入・分析が完結する標準化SaaSのリリース。評価APIの一部公開。" },
                                        { phase: "Phase 4 : Social Infra", desc: "学歴・職歴に次ぐ、事実上の「第三の信頼情報インフラ」として社会全体へ浸透。" },
                                    ].map((item, i) => (
                                        <div key={i} className="relative pl-10">
                                            <div className="absolute w-2.5 h-2.5 bg-[#FBBC05] rounded-full -left-[5.5px] top-1.5 ring-4 ring-white" />
                                            <h3 className="text-xl font-medium text-[#3C4043] mb-3">{item.phase}</h3>
                                            <p className="text-gray-500 font-light text-sm leading-relaxed">{item.desc}</p>
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
