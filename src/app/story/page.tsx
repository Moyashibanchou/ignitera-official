import FadeIn from "@/components/shared/FadeIn";

export default function StoryPage() {
    const timeline = [
        { year: "2024", title: "プロジェクト始接", desc: "地域の伝統産業との対話。長年の暗黙知と職人の感覚をデジタル化する構想が生まれました。" },
        { year: "2025", title: "データ基盤の実証実験", desc: "酒蔵における吸水率算出アルゴリズムのプロトタイプ運用を開始。初めての成功事例を確立。" },
        { year: "2026", title: "IGNITERA 設立", desc: "単なるDXから、業種を超えたイノベーションプラットフォームへと進化。新たなミッションを掲げて始動。" },
    ];

    return (
        <div className="min-h-screen bg-transparent text-zinc-300 font-sans selection:bg-ignitera-500 selection:text-white relative">

            {/* Dark background grid for story */}
            <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#050505]">
                <div className="absolute top-[30%] left-[20%] w-[40vw] h-[40vw] rounded-full mix-blend-screen blur-[120px] opacity-[0.08] bg-ignitera-500" />
                <div className="absolute inset-0 opacity-[0.2]" style={{ backgroundImage: "radial-gradient(#3f3f46 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
            </div>

            <section className="py-32 px-6 max-w-4xl mx-auto relative z-10">
                <FadeIn>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-2 h-2 rounded-full bg-ignitera-500 animate-[pulse-slow_8s_ease-in-out_infinite] shadow-[0_0_10px_#ff4d00]" />
                        <p className="text-ignitera-500 font-medium tracking-wide uppercase">Our Story</p>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-8 text-white glow-text">
                        現場から生まれた、<br className="hidden md:block" />確かな一歩。
                    </h1>
                    <p className="text-xl text-zinc-400 font-light leading-relaxed mb-24 max-w-2xl">
                        私たちの物語は、きれいなオフィスや会議室から始まったのではありません。<br className="hidden md:block" />
                        歴史ある地域の伝統産業との泥臭い対話からスタートしました。
                    </p>
                </FadeIn>

                <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-16 pb-12">
                    {timeline.map((item, i) => (
                        <FadeIn key={i} delay={i * 0.1} className="relative pl-8 md:pl-12 group">
                            {/* Glowing timeline node */}
                            <div className="absolute w-3 h-3 bg-ignitera-500 rounded-full -left-[6.5px] top-2 shadow-[0_0_15px_#ff4d00]" />
                            <div className="absolute w-1.5 h-1.5 bg-white rounded-full -left-[3.5px] top-[11px]" />

                            {/* Fiber optic trace line on hover */}
                            <div className="absolute left-[-1px] top-0 bottom-[-4rem] w-[2px] bg-gradient-to-b from-ignitera-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 shadow-[0_0_10px_#ff4d00]" />

                            <div className="text-sm font-bold text-ignitera-500 mb-2 drop-shadow-[0_0_5px_rgba(255,77,0,0.6)] font-mono">{item.year}</div>
                            <h3 className="text-2xl font-medium text-white mb-3 group-hover:text-ignitera-500 transition-colors">{item.title}</h3>
                            <p className="text-zinc-400 font-light leading-relaxed glass-panel p-6 mt-4 group-hover:shadow-[0_8px_30px_rgba(255,77,0,0.15)] transition-all relative overflow-hidden">
                                <span className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-ignitera-500 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[trace-y_2s_linear_infinite]" />
                                {item.desc}
                            </p>
                        </FadeIn>
                    ))}
                </div>
            </section>
        </div>
    );
}
