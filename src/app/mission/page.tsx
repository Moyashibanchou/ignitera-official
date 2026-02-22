import FadeIn from "@/components/shared/FadeIn";

export default function MissionPage() {
    return (
        <div className="min-h-screen bg-transparent text-zinc-300 font-sans selection:bg-ignitera-500 selection:text-white pt-32 pb-40 px-6 flex flex-col justify-center items-center text-center relative">

            {/* Dark background grid for mission */}
            <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#050505]">
                <div className="absolute top-[20%] right-[30%] -translate-x-1/2 w-[50vw] h-[50vw] rounded-[100%] mix-blend-screen blur-[120px] opacity-[0.08] bg-ignitera-500" />
                <div className="absolute inset-0 opacity-[0.2]" style={{ backgroundImage: "radial-gradient(#3f3f46 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
            </div>

            <div className="max-w-4xl mx-auto w-full relative z-10">
                <FadeIn>
                    <div className="flex items-center gap-3 mb-12 justify-center">
                        <div className="w-2 h-2 rounded-full bg-ignitera-500 animate-[pulse-slow_8s_ease-in-out_infinite] shadow-[0_0_10px_#ff4d00]" />
                        <p className="text-ignitera-500 font-medium tracking-wide text-sm uppercase">Our Mission</p>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-normal tracking-tight text-white mb-12 glow-text">
                        情熱に、点火する。
                    </h1>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <div className="space-y-16 text-left max-w-2xl mx-auto mt-24 glass-panel p-12 relative group">

                        {/* Shimmer on hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl overflow-hidden">
                            <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-ignitera-500 to-transparent -translate-y-full group-hover:animate-[trace-y_3s_linear_infinite]" />
                        </div>

                        <div>
                            <h2 className="text-2xl font-medium mb-4 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">Vision</h2>
                            <p className="text-xl text-zinc-400 font-light leading-relaxed">
                                伝統と革新が共存する未来の創造。私たちは、過去から受け継がれた知恵を最新のテクノロジーと融合させ、持続可能な新しい価値を生み出します。
                            </p>
                        </div>

                        <div className="pt-8 border-t border-white/10 relative">
                            {/* Glowing separator line */}
                            <div className="absolute top-[-1px] left-0 w-1/4 h-[1px] bg-gradient-to-r from-ignitera-500 to-transparent" />

                            <h2 className="text-2xl font-medium mb-8 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">Value</h2>
                            <ul className="space-y-6 text-xl text-zinc-400 font-light">
                                <li className="flex gap-4">
                                    <span className="text-ignitera-500 font-medium shrink-0 drop-shadow-[0_0_8px_rgba(255,77,0,0.4)]">01</span>
                                    <span><strong className="text-white">現場第一主義。</strong> <br className="md:hidden" />システムはオフィスではなく、現場のノイズの中で機能しなければならない。</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-ignitera-500 font-medium shrink-0 drop-shadow-[0_0_8px_rgba(255,77,0,0.4)]">02</span>
                                    <span><strong className="text-white">データへの誠実さ。</strong> <br className="md:hidden" />直感を否定するのではなく、直感を裏付ける冷徹な証拠を提供する。</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-ignitera-500 font-medium shrink-0 drop-shadow-[0_0_8px_rgba(255,77,0,0.4)]">03</span>
                                    <span><strong className="text-white">絶え間ない改善。</strong> <br className="md:hidden" />完成は存在しない。昨日のベストを今日のベースラインにする。</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
}
