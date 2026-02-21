import FadeIn from "@/components/shared/FadeIn";
import Link from "next/link";

export default function TechnologyPage() {
    const technologies = [
        {
            title: "AI & Data Analytics",
            desc: "データの力で伝統を更新する技術。酒蔵DXの吸水率算出アルゴリズム等をモデルに、暗黙知を体系化し、次なる革新の土台を構築します。",
            color: "group-hover:text-[#4285F4]",
            bgColor: "group-hover:bg-[#4285F4]"
        },
        {
            title: "System Architecture",
            desc: "堅牢でスケーラブルな基盤構築。止まらないシステムと柔軟な拡張性を両立し、急速なビジネスの成長を根底から支え続けます。",
            color: "group-hover:text-[#EA4335]",
            bgColor: "group-hover:bg-[#EA4335]"
        },
        {
            title: "User Experience",
            desc: "人間に寄り添うインターフェース設計。複雑なシステムを限りなく存在感のないものに昇華させ、本質的な目的達成に集中させます。",
            color: "group-hover:text-[#34A853]",
            bgColor: "group-hover:bg-[#34A853]"
        }
    ];

    return (
        <div className="min-h-[85vh] bg-white text-[#202124] font-sans selection:bg-[#4285F4] selection:text-white">
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <FadeIn>
                    <p className="text-[#4285F4] font-medium tracking-wide mb-4">Technology</p>
                    <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-8">複雑なものを、<br />シンプルに。</h1>
                    <p className="text-xl text-gray-500 font-light max-w-3xl leading-relaxed mb-24">
                        テクノロジーは、人間の可能性を拡張するための道具です。<br className="hidden md:block" />IGNITERAは、高度な技術を誰もが直感的に使える形にデザインします。
                    </p>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
                    {technologies.map((tech, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <div className="group cursor-default h-full flex flex-col">
                                <div className={`w-12 h-12 rounded-full bg-gray-100 mb-8 flex items-center justify-center transition-colors ${tech.bgColor} hover:bg-opacity-10`}>
                                    <div className={`w-3 h-3 rounded-full bg-gray-300 transition-colors ${tech.bgColor}`} />
                                </div>
                                <h3 className={`text-2xl font-medium mb-4 transition-colors ${tech.color}`}>{tech.title}</h3>
                                <p className="text-gray-500 leading-relaxed font-light mb-8 flex-grow">{tech.desc}</p>
                                <div className="mt-auto">
                                    <Link href="/contact" className="text-sm font-medium text-[#4285F4] hover:underline underline-offset-4">
                                        詳細を見る &rarr;
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
