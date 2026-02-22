import FadeIn from "@/components/shared/FadeIn";
import TextAnimatedHero from "@/components/shared/TextAnimatedHero";
import ShinyButton from "@/components/shared/ShinyButton";
import React from "react";
import IgnitingTorchIcon from "@/components/shared/IgnitingTorchIcon";
import RoadmapSection from "@/components/landing/RoadmapSection";

export default function Home() {
    return (
        <main className="min-h-screen bg-[#FFFFFF] text-[#3C4043] font-sans selection:bg-[#4285F4] selection:text-white">
            {/* Hero Section */}
            <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-6 max-w-5xl mx-auto">
                <FadeIn>
                    <p className="text-[#4285F4] font-medium tracking-wide mb-6 text-sm uppercase">Definition & Vision</p>
                </FadeIn>

                <TextAnimatedHero />

                <FadeIn delay={0.4}>
                    <p className="text-xl md:text-2xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed mt-4">
                        「学歴・ガクチカ・面接」から「データ・証明・信頼」へ。<br />
                        評価基準のパラダイムを変革する。
                    </p>
                </FadeIn>
            </section>

            {/* Problem Statement */}
            <section className="py-32 px-6 bg-gray-50/80 backdrop-blur-sm border-t border-gray-100/50">
                <div className="max-w-5xl mx-auto text-center">
                    <FadeIn>
                        <h2 className="text-3xl md:text-5xl font-medium mb-12 tracking-tight">構造課題の指摘</h2>
                        <p className="text-xl text-gray-500 font-light leading-relaxed mb-16 max-w-3xl mx-auto">
                            既存の評価モデルは、候補者の「過去の一点」と「面接でのアピール力」に依存しています。<br />
                            これは本質的な<strong className="font-medium text-[#3C4043]">「行動データ不在」</strong>の構造的バグです。
                        </p>
                    </FadeIn>

                    {/* Diagrams of Old vs New */}
                    <FadeIn delay={0.2}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                            <div className="p-10 bg-white/80 backdrop-blur-md border border-gray-100 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow">
                                <h3 className="text-sm font-medium text-gray-400 mb-6 uppercase tracking-wider border-b border-gray-100 pb-2">The Old Model</h3>
                                <ul className="space-y-4 text-[#3C4043] font-light">
                                    <li className="flex items-center gap-3"><IgnitingTorchIcon isLit={false} /> <span className="pt-0.5">学歴（フィルタリング）</span></li>
                                    <li className="flex items-center gap-3"><IgnitingTorchIcon isLit={false} /> <span className="pt-0.5">ガクチカ（装飾された経験）</span></li>
                                    <li className="flex items-center gap-3"><IgnitingTorchIcon isLit={false} /> <span className="pt-0.5">面接（口頭ベースの印象）</span></li>
                                </ul>
                                <p className="mt-8 text-sm text-[#EA4335] font-medium">結果：行動データが完全に欠如し、ミスマッチが多発。</p>
                            </div>

                            <div className="p-10 bg-white/80 backdrop-blur-md border border-gray-100 border-t-4 border-t-[#4285F4] rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow">
                                <h3 className="text-sm font-medium text-[#4285F4] mb-6 uppercase tracking-wider border-b border-gray-100 pb-2">IGNITERA Model</h3>
                                <ul className="space-y-4 text-[#3C4043] font-light">
                                    <li className="flex items-center gap-3"><IgnitingTorchIcon isLit={true} delay={0.2} /> <span className="pt-0.5 font-medium text-gray-900">プロジェクト実行ログ</span></li>
                                    <li className="flex items-center gap-3"><IgnitingTorchIcon isLit={true} delay={0.5} /> <span className="pt-0.5 font-medium text-gray-900">継続的なスキル成長曲線</span></li>
                                    <li className="flex items-center gap-3"><IgnitingTorchIcon isLit={true} delay={0.8} /> <span className="pt-0.5 font-medium text-gray-900">組織との文化適合スコア</span></li>
                                </ul>
                                <p className="mt-8 text-sm text-[#34A853] font-medium">結果：事実とデータに基づく、透明で確実な評価。</p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Roadmap Section */}
            <RoadmapSection />

            {/* Solution Declaration */}
            <section className="py-40 px-6 backdrop-blur-sm">
                <div className="max-w-4xl mx-auto text-center">
                    <FadeIn>
                        <h2 className="text-3xl md:text-5xl font-medium mb-10 tracking-tight text-[#3C4043]">
                            行動ログ基盤の文化適合型<br className="hidden md:block" />評価制度へのシフト
                        </h2>
                        <p className="text-xl text-gray-500 font-light leading-relaxed mb-16">
                            私たちは、「人」を評価するのではなく、「行動の軌跡」を集積し、<br />
                            企業文化との親和性を算出する<strong className="font-medium text-[#3C4043]">『評価のインフラ』</strong>を提供します。
                        </p>
                        <ShinyButton href="/methodology" className="bg-[#4285F4] text-white rounded-full hover:bg-blue-600 shadow-[0_4px_14px_0_rgba(66,133,244,0.39)] hover:shadow-[0_6px_20px_rgba(66,133,244,0.23)]">
                            Explore Methodology
                        </ShinyButton>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}
