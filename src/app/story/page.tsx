import FadeIn from "@/components/shared/FadeIn";

export default function StoryPage() {
    const timeline = [
        { year: "2024", title: "プロジェクト始動", desc: "地域の伝統産業との対話。長年の暗黙知と職人の感覚をデジタル化する構想が生まれました。" },
        { year: "2025", title: "データ基盤の実証実験", desc: "酒蔵における吸水率算出アルゴリズムのプロトタイプ運用を開始。初めての成功事例を確立。" },
        { year: "2026", title: "IGNITERA 設立", desc: "単なるDXから、業種を超えたイノベーションプラットフォームへと進化。新たなミッションを掲げて始動。" },
    ];

    return (
        <div className="min-h-[85vh] bg-white text-[#202124] font-sans selection:bg-[#FBBC05] selection:text-[#202124]">
            <section className="py-24 px-6 max-w-4xl mx-auto">
                <FadeIn>
                    <p className="text-[#FBBC05] font-medium tracking-wide mb-4">Our Story</p>
                    <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-8">
                        現場から生まれた、<br className="hidden md:block" />確かな一歩。
                    </h1>
                    <p className="text-xl text-gray-500 font-light leading-relaxed mb-24">
                        私たちの物語は、きれいなオフィスや会議室から始まったのではありません。<br className="hidden md:block" />
                        歴史ある地域の伝統産業との泥臭い対話からスタートしました。
                    </p>
                </FadeIn>

                <div className="relative border-l border-[#4285F4]/30 ml-4 md:ml-6 space-y-16 pb-12">
                    {timeline.map((item, i) => (
                        <FadeIn key={i} delay={i * 0.1} className="relative pl-8 md:pl-12">
                            <div className="absolute w-3 h-3 bg-[#4285F4] rounded-full -left-[6.5px] top-2 border-2 border-white" />
                            <div className="text-sm font-bold text-[#4285F4] mb-2">{item.year}</div>
                            <h3 className="text-2xl font-medium text-[#202124] mb-3">{item.title}</h3>
                            <p className="text-gray-500 font-light leading-relaxed">{item.desc}</p>
                        </FadeIn>
                    ))}
                </div>
            </section>
        </div>
    );
}
