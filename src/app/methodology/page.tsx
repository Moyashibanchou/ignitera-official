import FadeIn from "@/components/shared/FadeIn";
import AdvancedStatusBoard from "@/components/methodology/AdvancedStatusBoard";
import ProprietaryEngineCore from "@/components/methodology/ProprietaryEngineCore";

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

                {/* Visual Blackbox UI replaces explicit Data Arch & Math */}
                <FadeIn delay={0.2}>
                    <ProprietaryEngineCore />
                </FadeIn>
            </div>
        </div>
    );
}
