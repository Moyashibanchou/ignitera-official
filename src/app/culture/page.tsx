import FadeIn from "@/components/shared/FadeIn";

export default function CulturePage() {
    return (
        <div className="min-h-screen bg-[#FFFFFF] text-[#3C4043] font-sans selection:bg-[#EA4335] selection:text-white pt-24 pb-32 px-6">
            <div className="max-w-5xl mx-auto">
                <FadeIn>
                    <p className="text-[#EA4335] font-medium tracking-wide mb-6 text-sm uppercase">Culture & Matching</p>
                    <h1 className="text-5xl md:text-7xl font-normal tracking-tight mb-20 text-[#3C4043]">
                        文化診断と適合度
                    </h1>
                </FadeIn>

                <FadeIn delay={0.1}>
                    <section className="mb-32">
                        <h2 className="text-2xl font-medium mb-8 pb-4 border-b border-gray-100 text-[#3C4043]">適合度エンジン</h2>
                        <p className="text-xl text-gray-500 font-light leading-relaxed mb-10 max-w-3xl">
                            単に「優秀か」ではなく「自社で活躍できるか」。<br />
                            企業固有の開発・チーム文化の「重み付け」を定義し、学生の行動由来のパラメーターとベクトル計算を行うことで、解像度の極めて高いカルチャーフィット率を導き出します。
                        </p>
                    </section>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <section>
                        <h2 className="text-2xl font-medium mb-12 pb-4 border-b border-gray-100 text-[#3C4043]">競争優位性</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-[#3C4043] text-xs uppercase tracking-widest text-[#3C4043]">
                                        <th className="py-6 pr-6 font-medium w-64">プラットフォーム</th>
                                        <th className="py-6 px-6 font-medium">評価の根拠</th>
                                        <th className="py-6 px-6 font-medium">データの性質</th>
                                        <th className="py-6 px-6 font-medium">ポジション</th>
                                    </tr>
                                </thead>
                                <tbody className="text-[#3C4043] font-light text-sm">
                                    <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                                        <td className="py-8 pr-6 font-medium">既存の人材紹介・ナビサイト</td>
                                        <td className="py-8 px-6 text-gray-500">自己申告（ガクチカ・ES）、面接官の印象</td>
                                        <td className="py-8 px-6 text-gray-500">定性的・一過性・装飾可能</td>
                                        <td className="py-8 px-6 text-gray-500">「印象」仲介業</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                                        <td className="py-8 pr-6 font-medium">ビジネスSNS (LinkedIn等)</td>
                                        <td className="py-8 px-6 text-gray-500">職歴、推薦コメント、保有スキルタグ</td>
                                        <td className="py-8 px-6 text-gray-500">静的・過去の実績偏重</td>
                                        <td className="py-8 px-6 text-gray-500">プロフィール名鑑</td>
                                    </tr>
                                    <tr className="bg-[#EA4335]/5 border-b border-[#EA4335]">
                                        <td className="py-8 px-6 -ml-6 font-medium text-[#EA4335]"><span className="pl-6 block">IGNITERA</span></td>
                                        <td className="py-8 px-6 font-medium text-[#3C4043]">プラットフォーム内のリアルな行動ログ</td>
                                        <td className="py-8 px-6 font-medium text-[#3C4043]">動的・客観的・改ざん不可</td>
                                        <td className="py-8 px-6 font-medium text-[#3C4043]">『評価基盤インフラ』</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-8 text-sm text-gray-400 font-light">
                            ※ IGNITERAは「情報を検索するサイト」ではなく、客観事実を保証する「新しい社会インフラ」として機能します。
                        </p>
                    </section>
                </FadeIn>
            </div>
        </div>
    );
}
