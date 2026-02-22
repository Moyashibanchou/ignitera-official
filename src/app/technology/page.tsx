import FadeIn from "@/components/shared/FadeIn";
import Link from "next/link";

export default function TechnologyPage() {
    const technologies = [
        {
            title: "AI & Data Analytics",
            desc: "データの力で伝統を更新する技術。酒蔵DXの吸水率算出アルゴリズム等をモデルに、暗黙知を体系化し、次なる革新の土台を構築します。",
            color: "group-hover:text-ignitera-500 drop-shadow-[0_0_8px_rgba(255,77,0,0.4)]",
            bgColor: "group-hover:bg-ignitera-500 group-hover:shadow-[0_0_15px_#ff4d00]"
        },
        {
            title: "System Architecture",
            desc: "堅牢でスケーラブルな基盤構築。止まらないシステムと柔軟な拡張性を両立し、急速なビジネスの成長を根底から支え続けます。",
            color: "group-hover:text-ignitera-500 drop-shadow-[0_0_8px_rgba(255,77,0,0.4)]",
            bgColor: "group-hover:bg-ignitera-500 group-hover:shadow-[0_0_15px_#ff4d00]"
        },
        {
            title: "User Experience",
            desc: "人間に寄り添うインターフェース設計。複雑なシステムを限りなく存在感のないものに昇華させ、本質的な目的達成に集中させます。",
            color: "group-hover:text-ignitera-500 drop-shadow-[0_0_8px_rgba(255,77,0,0.4)]",
            bgColor: "group-hover:bg-ignitera-500 group-hover:shadow-[0_0_15px_#ff4d00]"
        }
    ];

    return (
        <div className="min-h-screen bg-transparent text-zinc-300 font-sans selection:bg-ignitera-500 selection:text-white relative">

            {/* Dark background grid for technology */}
            <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#050505]">
                <div className="absolute top-[40%] right-[20%] w-[50vw] h-[50vw] rounded-[100%] mix-blend-screen blur-[120px] opacity-[0.08] bg-ignitera-500" />
                <div className="absolute inset-0 opacity-[0.2]" style={{ backgroundImage: "radial-gradient(#3f3f46 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
            </div>

            <section className="py-32 px-6 max-w-7xl mx-auto relative z-10">
                <FadeIn>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-2 h-2 rounded-full bg-ignitera-500 animate-[pulse-slow_8s_ease-in-out_infinite] shadow-[0_0_10px_#ff4d00]" />
                        <p className="text-ignitera-500 font-medium tracking-wide uppercase">Technology</p>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-8 text-white glow-text">複雑なものを、<br />シンプルに。</h1>
                    <p className="text-xl text-zinc-400 font-light max-w-3xl leading-relaxed mb-24">
                        テクノロジーは、人間の可能性を拡張するための道具です。<br className="hidden md:block" />IGNITERAは、高度な技術を誰もが直感的に使える形にデザインします。
                    </p>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
                    {technologies.map((tech, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <div className="group cursor-default h-full flex flex-col glass-panel p-8 relative overflow-hidden hover:shadow-[0_8px_40px_rgba(255,77,0,0.15)] transition-all duration-500">
                                {/* Shimmer hover effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                                    <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-ignitera-500 to-transparent -translate-y-full group-hover:animate-[trace-y_2s_linear_infinite]" />
                                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-ignitera-500 to-transparent -translate-x-full group-hover:animate-[trace_2s_linear_infinite]" />
                                </div>

                                <div className={`w-12 h-12 rounded-full bg-white/5 border border-white/10 mb-8 flex items-center justify-center transition-all duration-300 ${tech.bgColor}`}>
                                    <div className={`w-3 h-3 rounded-full bg-zinc-600 transition-colors ${tech.bgColor ? 'group-hover:bg-white' : ''} group-hover:shadow-[0_0_10px_rgba(255,255,255,0.8)]`} />
                                </div>
                                <h3 className={`text-2xl font-medium mb-4 text-white transition-colors duration-300 ${tech.color}`}>{tech.title}</h3>
                                <p className="text-zinc-400 leading-relaxed font-light mb-8 flex-grow">{tech.desc}</p>
                                <div className="mt-auto relative z-10">
                                    <Link href="/contact" className="text-sm font-medium text-zinc-300 group-hover:text-ignitera-500 transition-colors flex items-center gap-2">
                                        詳細を見る <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                                    </Link>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </section>
        </div>
    );
}
