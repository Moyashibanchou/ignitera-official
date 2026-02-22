import FadeIn from "@/components/shared/FadeIn";

export default function FounderPage() {
    return (
        <div className="min-h-screen bg-transparent text-zinc-300 font-sans selection:bg-ignitera-500 selection:text-white pt-32 pb-40 px-6 flex flex-col justify-center items-center text-center relative">

            {/* Dark background grid for founder */}
            <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#050505]">
                <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[60vw] h-[40vw] rounded-[100%] mix-blend-screen blur-[150px] opacity-[0.08] bg-ignitera-500" />
                <div className="absolute inset-0 opacity-[0.2]" style={{ backgroundImage: "radial-gradient(#3f3f46 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
            </div>

            <div className="max-w-4xl mx-auto w-full relative z-10">
                <FadeIn>
                    <div className="flex items-center gap-3 mb-12 justify-center">
                        <div className="w-2 h-2 rounded-full bg-ignitera-500 animate-[pulse-slow_8s_ease-in-out_infinite] shadow-[0_0_10px_#ff4d00]" />
                        <p className="text-ignitera-500 font-medium tracking-wide text-sm uppercase">Founder Intent</p>
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight text-white mb-24 glow-text">
                        「見せかけの経歴」から、<br />
                        「本物の想いと行動」が<br />
                        報われる世界へ。
                    </h1>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <div className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed md:leading-loose max-w-3xl mx-auto space-y-12 text-left p-12 glass-panel relative group">

                        {/* Shimmer on hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-ignitera-500 to-transparent -translate-x-full group-hover:animate-[trace_3s_linear_infinite]" />
                        </div>

                        <p>
                            面接の数十分では、その候補者が深夜までコードや資料と向き合った「泥臭さ」は測れません。面接用に取り繕ったエントリーシートや暗記された自己PRが、そのまま現場のタフなパフォーマンスに直結しないことは、誰もが気づいている<strong className="text-white font-medium drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">「公然の秘密」</strong>でした。
                        </p>
                        <p>
                            私たちは、この「なんとなくの印象」で人生の貴重なファーストキャリアが決定され、ミスマッチによる早期離職が後を絶たない現代の採用インフラに、心底怒りを覚えました。
                        </p>
                        <div className="relative pl-8 py-4 my-12">
                            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-ignitera-500 to-transparent shadow-[0_0_10px_#ff4d00]" />
                            <p className="text-white font-medium text-2xl leading-normal drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
                                行動は、決して嘘をつかない。
                            </p>
                        </div>
                        <p>
                            努力の総量と、試行錯誤のプロセスを客観的なデータとして可視化すること。そしてそれを求める組織と、数学的・文化の文脈で結びつけること。
                        </p>
                        <p>
                            IGNITERAは、単なるWebサービスではありません。真の意味で「人が最もポテンシャルを発揮できる場所」を創出するための、私たちの静かで、しかし決して燃え尽きることのない覚悟です。
                        </p>
                    </div>

                    <div className="mt-20 text-left max-w-3xl mx-auto flex items-center gap-6 pt-12 border-t border-white/10">
                        <div className="w-16 h-16 rounded-full bg-zinc-800 border-2 border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]"></div>
                        <div>
                            <p className="font-medium text-xl text-white tracking-wide glow-text">IGNITERA Founder</p>
                            <p className="text-ignitera-500 text-sm mt-1 uppercase tracking-widest font-mono">代表取締役 / Founder & CEO</p>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
}
