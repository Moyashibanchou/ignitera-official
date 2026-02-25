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
                        <div className="flex items-center justify-between mb-12 border-b border-white/10 pb-4">
                            <h2 className="text-2xl font-medium text-white">競争優位性</h2>
                            {/* Swipe hint for mobile */}
                            <span className="md:hidden text-xs text-zinc-500 font-medium tracking-wide flex items-center gap-1 animate-pulse">
                                &larr; SWIPE &rarr;
                            </span>
                        </div>

                        <div className="glass-panel p-1 md:p-1">
                            <div className="w-full text-left">
                                {/* Desktop Header */}
                                <div className="hidden md:grid md:grid-cols-[minmax(220px,25%)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] lg:grid-cols-[250px_1fr_1fr_1fr] border-b border-white/10 text-xs uppercase tracking-widest text-zinc-400">
                                    <div className="py-6 pl-8 pr-6 font-medium">プラットフォーム</div>
                                    <div className="py-6 px-6 font-medium">評価の根拠</div>
                                    <div className="py-6 px-6 font-medium">データの性質</div>
                                    <div className="py-6 pr-8 pl-6 font-medium">ポジション</div>
                                </div>

                                {/* Mobile horizontal scroll / Desktop rows */}
                                <div className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory hide-scrollbar md:block gap-4 pb-6 pt-2 px-4 md:p-0">

                                    {/* Item 1 */}
                                    <div className="min-w-[280px] sm:min-w-[320px] shrink-0 snap-center md:min-w-0 flex flex-col md:grid md:grid-cols-[minmax(220px,25%)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] lg:grid-cols-[250px_1fr_1fr_1fr] border border-white/10 md:border-0 md:border-b md:border-white/5 bg-[#0a0a0a] md:bg-transparent rounded-xl md:rounded-none p-6 md:p-0 hover:bg-white/[0.02] transition-colors gap-5 md:gap-0">
                                        <div className="md:py-8 md:pl-8 md:pr-6 font-medium text-white">
                                            <span className="md:hidden text-[10px] uppercase tracking-widest text-zinc-500 block mb-1">プラットフォーム</span>
                                            <span className="text-lg md:text-base font-medium">既存の人材紹介・ナビサイト</span>
                                        </div>
                                        <div className="md:py-8 md:px-6 text-zinc-400 md:text-zinc-500 text-sm md:text-base">
                                            <span className="md:hidden text-[10px] uppercase tracking-widest text-zinc-500 block mb-1">評価の根拠</span>
                                            自己申告（ガクチカ・ES）、面接官の印象
                                        </div>
                                        <div className="md:py-8 md:px-6 text-zinc-400 md:text-zinc-500 text-sm md:text-base">
                                            <span className="md:hidden text-[10px] uppercase tracking-widest text-zinc-500 block mb-1">データの性質</span>
                                            定性的・一過性・装飾可能
                                        </div>
                                        <div className="md:py-8 md:pr-8 md:pl-6 text-zinc-400 md:text-zinc-500 text-sm md:text-base">
                                            <span className="md:hidden text-[10px] uppercase tracking-widest text-zinc-500 block mb-1">ポジション</span>
                                            「印象」仲介業
                                        </div>
                                    </div>

                                    {/* Item 2 */}
                                    <div className="min-w-[280px] sm:min-w-[320px] shrink-0 snap-center md:min-w-0 flex flex-col md:grid md:grid-cols-[minmax(220px,25%)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] lg:grid-cols-[250px_1fr_1fr_1fr] border border-white/10 md:border-0 md:border-b md:border-white/5 bg-[#0a0a0a] md:bg-transparent rounded-xl md:rounded-none p-6 md:p-0 hover:bg-white/[0.02] transition-colors gap-5 md:gap-0">
                                        <div className="md:py-8 md:pl-8 md:pr-6 font-medium text-white">
                                            <span className="md:hidden text-[10px] uppercase tracking-widest text-zinc-500 block mb-1">プラットフォーム</span>
                                            <span className="text-lg md:text-base font-medium">ビジネスSNS (LinkedIn等)</span>
                                        </div>
                                        <div className="md:py-8 md:px-6 text-zinc-400 md:text-zinc-500 text-sm md:text-base">
                                            <span className="md:hidden text-[10px] uppercase tracking-widest text-zinc-500 block mb-1">評価の根拠</span>
                                            職歴、推薦コメント、保有スキルタグ
                                        </div>
                                        <div className="md:py-8 md:px-6 text-zinc-400 md:text-zinc-500 text-sm md:text-base">
                                            <span className="md:hidden text-[10px] uppercase tracking-widest text-zinc-500 block mb-1">データの性質</span>
                                            静的・過去の実績偏重
                                        </div>
                                        <div className="md:py-8 md:pr-8 md:pl-6 text-zinc-400 md:text-zinc-500 text-sm md:text-base">
                                            <span className="md:hidden text-[10px] uppercase tracking-widest text-zinc-500 block mb-1">ポジション</span>
                                            プロフィール名鑑
                                        </div>
                                    </div>

                                    {/* Item 3 (IGNITERA) */}
                                    <div className="min-w-[280px] sm:min-w-[320px] shrink-0 snap-center md:min-w-0 flex flex-col md:grid md:grid-cols-[minmax(220px,25%)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] lg:grid-cols-[250px_1fr_1fr_1fr] border border-ignitera-500/50 md:border-0 md:border-b md:border-ignitera-500 bg-ignitera-500/10 rounded-xl md:rounded-none p-6 md:p-0 transition-colors gap-5 md:gap-0 relative">
                                        <div className="md:py-8 md:pl-8 md:pr-6 font-medium text-ignitera-500 drop-shadow-[0_0_8px_rgba(255,77,0,0.4)]">
                                            <span className="md:hidden text-[10px] uppercase tracking-widest text-ignitera-500/70 block mb-1">プラットフォーム</span>
                                            <span className="text-2xl md:text-base font-bold tracking-wider block">IGNITERA</span>
                                        </div>
                                        <div className="md:py-8 md:px-6 font-medium text-white text-sm md:text-base">
                                            <span className="md:hidden text-[10px] uppercase tracking-widest text-ignitera-500/70 block mb-1">評価の根拠</span>
                                            プラットフォーム内のリアルな行動ログ
                                        </div>
                                        <div className="md:py-8 md:px-6 font-medium text-white text-sm md:text-base">
                                            <span className="md:hidden text-[10px] uppercase tracking-widest text-ignitera-500/70 block mb-1">データの性質</span>
                                            動的・客観的・改ざん不可
                                        </div>
                                        <div className="md:py-8 md:pr-8 md:pl-6 font-medium text-white text-sm md:text-base">
                                            <span className="md:hidden text-[10px] uppercase tracking-widest text-ignitera-500/70 block mb-1">ポジション</span>
                                            『評価基盤インフラ』
                                        </div>
                                    </div>

                                    {/* Spacer for right edge on mobile */}
                                    <div className="w-2 md:hidden shrink-0"></div>

                                </div>
                            </div>
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
