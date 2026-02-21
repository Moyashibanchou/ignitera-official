import FadeIn from "@/components/shared/FadeIn";

export default function MissionPage() {
    return (
        <div className="min-h-[85vh] bg-white text-[#202124] flex flex-col justify-center py-24 px-6 text-center font-sans selection:bg-[#EA4335] selection:text-white">
            <div className="max-w-4xl mx-auto">
                <FadeIn>
                    <p className="text-[#EA4335] font-medium tracking-wide mb-8 uppercase text-sm">Our Mission</p>
                    <h1 className="text-5xl md:text-7xl font-normal tracking-tight text-[#202124] mb-12">
                        情熱に、点火する。
                    </h1>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <div className="space-y-16 text-left max-w-2xl mx-auto mt-24">
                        <div>
                            <h2 className="text-2xl font-medium mb-4 text-[#202124]">Vision</h2>
                            <p className="text-xl text-gray-500 font-light leading-relaxed">
                                伝統と革新が共存する未来の創造。私たちは、過去から受け継がれた知恵を最新のテクノロジーと融合させ、持続可能な新しい価値を生み出します。
                            </p>
                        </div>

                        <div className="pt-8 border-t border-gray-100">
                            <h2 className="text-2xl font-medium mb-8 text-[#202124]">Value</h2>
                            <ul className="space-y-6 text-xl text-gray-500 font-light">
                                <li className="flex gap-4">
                                    <span className="text-[#EA4335] font-medium shrink-0">01</span>
                                    <span><strong>現場第一主義。</strong> <br className="md:hidden" />システムはオフィスではなく、現場のノイズの中で機能しなければならない。</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-[#EA4335] font-medium shrink-0">02</span>
                                    <span><strong>データへの誠実さ。</strong> <br className="md:hidden" />直感を否定するのではなく、直感を裏付ける冷徹な証拠を提供する。</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-[#EA4335] font-medium shrink-0">03</span>
                                    <span><strong>絶え間ない改善。</strong> <br className="md:hidden" />完成は存在しない。昨日のベストを今日のベースラインにする。</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
}
