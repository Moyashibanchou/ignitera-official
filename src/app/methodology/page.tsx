import FadeIn from "@/components/shared/FadeIn";
import { Activity, ArrowDown } from "lucide-react";
import AdvancedStatusBoard from "@/components/methodology/AdvancedStatusBoard";
import ProprietaryEngineCore from "@/components/methodology/ProprietaryEngineCore";
import IntegrationsMarquee from "@/components/methodology/IntegrationsMarquee";

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

                {/* Behavioral Log Analysis */}
                <FadeIn delay={0.05}>
                    <section className="mb-24">
                        <div className="mb-8 pb-4 border-b border-white/10">
                            <div className="text-[10px] text-zinc-500 mb-4 font-mono">
                                // ELIMINATING_SUBJECTIVE_BIAS... [OK]
                            </div>
                            <h2 className="text-xl md:text-2xl font-mono text-ignitera-500 tracking-widest uppercase">
                                [ MODULE 0 ] : BEHAVIORAL LOG ANALYSIS
                            </h2>
                        </div>

                        <div className="mb-12">
                            <h3 className="text-xl md:text-2xl font-medium mb-6 text-white tracking-tight">
                                自己申告の「ガクチカ」は、もう要らない。
                            </h3>
                            <div className="text-sm text-zinc-400 leading-relaxed space-y-4">
                                <p>
                                    IGNITERAの45項目のステータスは、面接の受け答えや自己評価アンケートからは算出されません。<br />
                                    評価の源泉は、すべて実際のプロジェクトで記録された「行動ログ」です。
                                </p>
                                <p>
                                    タスクの初動スピード、チャットでの論理的伝達力、コードの品質、トラブル時の軌道修正力。<br />
                                    運営とチームメンバーによる実務を通じた多角的な観測データが、独自のアルゴリズムによってあなたの「本当のポテンシャル」へと変換されます。
                                </p>
                            </div>
                        </div>

                        {/* Data Flow Pipeline */}
                        <div className="flex flex-col md:flex-row items-center justify-between xl:justify-center gap-4 xl:gap-6 font-mono w-full">
                            <div className="border border-white/10 bg-white/5 px-4 py-2 text-xs text-center w-full md:w-auto whitespace-nowrap">
                                <span className="text-zinc-500 mr-2 block lg:inline">[ RAW_DATA ]</span>
                                <span className="text-zinc-300">実際のプロジェクト行動ログ</span>
                            </div>

                            <div className="text-zinc-600 animate-pulse rotate-90 md:rotate-0 select-none">
                                &gt;&gt;&gt;
                            </div>

                            <div className="border border-white/10 bg-white/5 px-4 py-2 text-xs text-center w-full md:w-auto whitespace-nowrap">
                                <span className="text-ignitera-500 mr-2 block lg:inline">[ ENGINE ]</span>
                                <span className="text-zinc-300">IGNITERA 多層解析アルゴリズム</span>
                            </div>

                            <div className="text-zinc-600 animate-pulse rotate-90 md:rotate-0 select-none">
                                &gt;&gt;&gt;
                            </div>

                            <div className="border border-white/10 bg-white/5 px-4 py-2 text-xs text-center w-full md:w-auto whitespace-nowrap">
                                <span className="text-cyan-500 mr-2 block lg:inline">[ OUTPUT ]</span>
                                <span className="text-zinc-300">45次元の客観的ステータス</span>
                            </div>
                        </div>
                    </section>
                </FadeIn>

                {/* Meta-Cognition Calibration */}
                <FadeIn delay={0.08}>
                    <section className="mb-24">
                        <div className="mb-8 pb-4 border-b border-white/10">
                            <div className="font-mono text-[10px] text-zinc-500 mb-4">
                                // CALCULATING_COGNITIVE_DELTA... [ ACTIVE ]
                            </div>
                            <h2 className="text-xl md:text-2xl font-mono text-cyan-400 tracking-widest uppercase">
                                [ MODULE 0.5 ] : META-COGNITION CALIBRATION
                            </h2>
                        </div>

                        <div className="mb-12">
                            <h3 className="text-xl md:text-2xl font-medium mb-6 text-white tracking-tight">
                                「自分を客観視できているか」すらも、データになる。
                            </h3>
                            <div className="text-sm text-zinc-400 leading-relaxed break-keep space-y-4">
                                <p>
                                    IGNITERAの評価エンジンは、単に行動ログを記録するだけではありません。<br />
                                    プロジェクト完了後に入力される「自己評価（Self-Assessment）」と、運営・チームメンバーからの「客観評価（Behavioral Logs）」をシステム上でクロスチェック。
                                </p>
                                <p>
                                    両者の『ギャップ（差分）』を解析することで、あなたが自身の強みや弱みをどれほど正確に把握できているか（＝メタ認知力）を浮き彫りにします。<br />自己認識の解像度こそが、圧倒的な成長のトリガーとなります。
                                </p>
                            </div>
                        </div>

                        {/* Cross Check Visualization */}
                        <div className="font-mono border border-white/10 p-6 bg-black/40 relative">
                            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8 relative">
                                {/* Left: Subjective Data */}
                                <div className="border border-white/10 bg-black/50 p-4 text-center w-full md:w-64 relative z-10">
                                    <div className="text-white mb-2">[ INPUT: A ] 自己評価データ</div>
                                    <span className="text-xs text-zinc-500 block">プロジェクトを通じた自己認識・振り返り</span>
                                </div>

                                {/* Center: Cross Icon */}
                                <div className="text-cyan-500 z-10 flex items-center justify-center bg-black/80 rounded-full p-2 border border-cyan-500/30">
                                    <Activity className="w-6 h-6 animate-pulse" />
                                </div>

                                {/* Right: Objective Data */}
                                <div className="border border-white/10 bg-black/50 p-4 text-center w-full md:w-64 relative z-10">
                                    <div className="text-white mb-2">[ INPUT: B ] チーム/運営の行動ログ</div>
                                    <span className="text-xs text-zinc-500 block">実務でのパフォーマンス・360度評価</span>
                                </div>

                                {/* Connecting line for desktop */}
                                <div className="hidden md:block absolute top-1/2 left-[20%] right-[20%] h-[1px] bg-white/10 -z-0"></div>
                            </div>

                            {/* Down Arrow */}
                            <div className="flex justify-center mb-8">
                                <ArrowDown className="w-5 h-5 text-zinc-500 animate-bounce" />
                            </div>

                            {/* Bottom: Output */}
                            <div className="flex justify-center">
                                <div className="border border-ignitera-500 bg-ignitera-500/10 text-ignitera-400 p-4 text-center w-full md:w-auto shadow-[0_0_15px_rgba(255,77,0,0.15)] relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-ignitera-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                    <div className="text-sm font-bold uppercase tracking-wider relative z-10">[ OUTPUT ] 認知ギャップ係数（メタ認知力）の算出</div>
                                </div>
                            </div>
                        </div>
                    </section>
                </FadeIn>

                {/* 45 Dimensional Data Matrix */}
                <FadeIn delay={0.1}>
                    <section className="mb-32">
                        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                            <h2 className="text-xl md:text-2xl font-mono text-white tracking-widest uppercase">
                                [ MODULE 1 ] : 45-Dimensional Data Matrix
                            </h2>
                            <span className="font-mono text-xs text-ignitera-500 animate-pulse hidden md:block">
                                STATUS: SCANNING_BEHAVIORAL_LOGS...
                            </span>
                        </div>
                        <AdvancedStatusBoard />
                        <div className="mt-8 p-4 font-mono border border-white/5 bg-black/40 text-center text-xs text-zinc-500 rounded-sm relative overflow-hidden group">
                            <div className="absolute inset-0 bg-ignitera-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                            &gt; SYSTEM_NOTE: これら3レイヤー・45項目の行動データに「企業固有の価値観ベクトル」を掛け合わせ、マッチング適合度を動的に算出・可視化します。
                        </div>
                    </section>
                </FadeIn>

                {/* Visual Blackbox UI replaces explicit Data Arch & Math */}
                <FadeIn delay={0.2}>
                    <IntegrationsMarquee />
                    <ProprietaryEngineCore />
                </FadeIn>
            </div>
        </div>
    );
}
