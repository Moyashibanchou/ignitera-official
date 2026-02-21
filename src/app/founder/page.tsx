import FadeIn from "@/components/shared/FadeIn";

export default function FounderPage() {
    return (
        <div className="min-h-screen bg-[#FFFFFF] text-[#3C4043] font-sans selection:bg-[#34A853] selection:text-white pt-32 pb-40 px-6 flex flex-col justify-center items-center text-center">
            <div className="max-w-4xl mx-auto w-full">
                <FadeIn>
                    <p className="text-[#34A853] font-medium tracking-wide mb-12 text-sm uppercase">Founder Intent</p>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight text-[#3C4043] mb-24">
                        「見せかけの経歴」から、<br />
                        「本物の想いと行動」が<br />
                        報われる世界へ。
                    </h1>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <div className="text-lg md:text-xl text-gray-500 font-light leading-relaxed md:leading-loose max-w-3xl mx-auto space-y-12 text-left">
                        <p>
                            面接の数十分では、その候補者が深夜までコードや資料と向き合った「泥臭さ」は測れません。面接用に取り繕ったエントリーシートや暗記された自己PRが、そのまま現場のタフなパフォーマンスに直結しないことは、誰もが気づいている<strong className="text-[#3C4043] font-medium">「公然の秘密」</strong>でした。
                        </p>
                        <p>
                            私たちは、この「なんとなくの印象」で人生の貴重なファーストキャリアが決定され、ミスマッチによる早期離職が後を絶たない現代の採用インフラに、心底怒りを覚えました。
                        </p>
                        <p className="pl-6 border-l-2 border-[#34A853] text-[#3C4043] font-medium text-2xl leading-normal py-2 my-12">
                            行動は、決して嘘をつかない。
                        </p>
                        <p>
                            努力の総量と、試行錯誤のプロセスを客観的なデータとして可視化すること。そしてそれを求める組織と、数学的・文化の文脈で結びつけること。
                        </p>
                        <p>
                            IGNITERAは、単なるWebサービスではありません。真の意味で「人が最もポテンシャルを発揮できる場所」を創出するための、私たちの静かで、しかし決して燃え尽きることのない覚悟です。
                        </p>
                    </div>
                    <div className="mt-32 text-left max-w-3xl mx-auto flex items-center gap-6 pt-12 border-t border-gray-100">
                        <div className="w-16 h-16 rounded-full bg-gray-100 as-placeholder"></div>
                        <div>
                            <p className="font-medium text-xl text-[#3C4043] tracking-wide">IGNITERA Founder</p>
                            <p className="text-gray-400 text-sm mt-1 uppercase tracking-widest">代表取締役 / Founder & CEO</p>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
}
