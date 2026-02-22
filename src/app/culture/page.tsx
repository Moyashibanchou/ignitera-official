import FadeIn from "@/components/shared/FadeIn";

export default function CulturePage() {
    return (
        <div className="min-h-screen bg-transparent text-zinc-300 font-sans selection:bg-ignitera-500 selection:text-white pt-24 pb-32 px-6 relative">

            {/* Dark background grid */}
            <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#050505]">
                <div className="absolute top-[10%] left-[10%] w-[30vw] h-[30vw] rounded-full mix-blend-screen blur-[120px] opacity-[0.1] bg-ignitera-500" />
                <div className="absolute inset-0 opacity-[0.2]" style={{ backgroundImage: "radial-gradient(#3f3f46 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
                <FadeIn>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-2 h-2 rounded-full bg-ignitera-500 animate-pulse shadow-[0_0_10px_#ff4d00]" />
                        <p className="text-ignitera-500 font-medium tracking-wide text-sm uppercase">Culture & Matching</p>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-normal tracking-tight mb-20 text-white glow-text">
                        文化診断と適合度
                    </h1>
                </FadeIn>

                <FadeIn delay={0.1}>
                    <section className="mb-32">
                        <h2 className="text-2xl font-medium mb-8 pb-4 border-b border-white/10 text-white">適合度エンジン</h2>
                        <p className="text-xl text-zinc-400 font-light leading-relaxed mb-10 max-w-3xl">
                            単に「優秀か」ではなく「自社で活躍できるか」。<br />
                            企業固有の開発・チーム文化の「重み付け」を定義し、学生の行動由来のパラメーターとベクトル計算を行うことで、解像度の極めて高いカルチャーフィット率を導き出します。
                        </p>
                    </section>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <section>
                        <h2 className="text-2xl font-medium mb-12 pb-4 border-b border-white/10 text-white">競争優位性</h2>
                        <div className="overflow-x-auto glass-panel p-1">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-white/10 text-xs uppercase tracking-widest text-zinc-400">
                                        <th className="py-6 pl-8 pr-6 font-medium w-64">プラットフォーム</th>
                                        <th className="py-6 px-6 font-medium">評価の根拠</th>
                                        <th className="py-6 px-6 font-medium">データの性質</th>
                                        <th className="py-6 pr-8 pl-6 font-medium">ポジション</th>
                                    </tr>
                                </thead>
                                <tbody className="text-zinc-300 font-light text-sm">
                                    <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                        <td className="py-8 pl-8 pr-6 font-medium text-white">既存の人材紹介・ナビサイト</td>
                                        <td className="py-8 px-6 text-zinc-500">自己申告（ガクチカ・ES）、面接官の印象</td>
                                        <td className="py-8 px-6 text-zinc-500">定性的・一過性・装飾可能</td>
                                        <td className="py-8 pr-8 pl-6 text-zinc-500">「印象」仲介業</td>
                                    </tr>
                                    <tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                        <td className="py-8 pl-8 pr-6 font-medium text-white">ビジネスSNS (LinkedIn等)</td>
                                        <td className="py-8 px-6 text-zinc-500">職歴、推薦コメント、保有スキルタグ</td>
                                        <td className="py-8 px-6 text-zinc-500">静的・過去の実績偏重</td>
                                        <td className="py-8 pr-8 pl-6 text-zinc-500">プロフィール名鑑</td>
                                    </tr>
                                    <tr className="bg-ignitera-500/10 border-b border-ignitera-500 relative">
                                        <td className="py-8 px-6 -ml-6 font-medium text-ignitera-500 drop-shadow-[0_0_8px_rgba(255,77,0,0.4)]"><span className="pl-6 block">IGNITERA</span></td>
                                        <td className="py-8 px-6 font-medium text-white">プラットフォーム内のリアルな行動ログ</td>
                                        <td className="py-8 px-6 font-medium text-white">動的・客観的・改ざん不可</td>
                                        <td className="py-8 pr-8 pl-6 font-medium text-white">『評価基盤インフラ』</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-8 text-sm text-zinc-500 font-light pl-2">
                            ※ IGNITERAは「情報を検索するサイト」ではなく、客観事実を保証する「新しい社会インフラ」として機能します。
                        </p>
                    </section>
                </FadeIn>
            </div>
        </div>
    );
}
