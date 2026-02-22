"use client";
import React, { useState } from "react";
import FadeIn from "@/components/shared/FadeIn";

export default function ContactPage() {
    const [focused, setFocused] = useState<string | null>(null);

    const CustomInput = ({ id, label, type = "text" }: { id: string, label: string, type?: string }) => (
        <div className="relative mb-12">
            <label
                className={`absolute left-0 transition-all duration-300 font-light ${focused === id || (typeof window !== 'undefined' && (document.getElementById(id) as HTMLInputElement)?.value) ? '-top-5 text-xs text-ignitera-500 drop-shadow-[0_0_8px_rgba(255,77,0,0.4)]' : 'top-1 text-zinc-500 text-lg'}`}
                htmlFor={id}
            >
                {label}
            </label>
            <input
                type={type}
                id={id}
                onFocus={() => setFocused(id)}
                onBlur={(e) => {
                    if (!e.target.value) setFocused(null);
                }}
                className="w-full bg-transparent border-b border-white/10 py-2 focus:outline-none focus:border-ignitera-500 focus:shadow-[0_1px_5px_rgba(255,77,0,0.3)] transition-all text-lg font-light text-white"
            />
        </div>
    );

    return (
        <div className="min-h-screen bg-transparent text-zinc-300 flex flex-col justify-center py-24 px-6 font-sans selection:bg-ignitera-500 selection:text-white relative">

            {/* Dark background grid for contact */}
            <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#050505]">
                <div className="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] rounded-[100%] mix-blend-screen blur-[120px] opacity-[0.08] bg-ignitera-500" />
                <div className="absolute inset-0 opacity-[0.2]" style={{ backgroundImage: "radial-gradient(#3f3f46 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
            </div>

            <div className="max-w-6xl mx-auto w-full relative z-10 pt-16">
                <FadeIn>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-2 h-2 rounded-full bg-ignitera-500 animate-[pulse-slow_8s_ease-in-out_infinite] shadow-[0_0_10px_#ff4d00]" />
                        <p className="text-ignitera-500 font-medium tracking-wide uppercase">Contact</p>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-20 text-white glow-text">
                        対話を、始めよう。
                    </h1>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <FadeIn delay={0.1}>
                        <form className="max-w-md glass-panel p-10 relative overflow-hidden group" onSubmit={(e) => e.preventDefault()}>
                            {/* Shimmer on hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                                <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-transparent via-ignitera-500 to-transparent -translate-y-full group-hover:animate-[trace-y_3s_linear_infinite]" />
                            </div>

                            <CustomInput id="name" label="お名前" />
                            <CustomInput id="email" label="メールアドレス" type="email" />

                            <div className="relative mb-12 mt-4">
                                <label
                                    className={`absolute left-0 transition-all duration-300 font-light ${focused === 'message' || (typeof document !== 'undefined' && (document.getElementById('message') as HTMLTextAreaElement)?.value) ? '-top-5 text-xs text-ignitera-500 drop-shadow-[0_0_8px_rgba(255,77,0,0.4)]' : 'top-1 text-zinc-500 text-lg'}`}
                                    htmlFor="message"
                                >
                                    お問い合わせ内容
                                </label>
                                <textarea
                                    id="message"
                                    rows={3}
                                    onFocus={() => setFocused('message')}
                                    onBlur={(e) => {
                                        if (!e.target.value) setFocused(null);
                                    }}
                                    className="w-full bg-transparent border-b border-white/10 py-2 focus:outline-none focus:border-ignitera-500 focus:shadow-[0_1px_5px_rgba(255,77,0,0.3)] transition-all text-lg font-light text-white resize-none"
                                />
                            </div>

                            <button type="submit" className="w-full px-8 py-4 bg-white/5 border border-white/10 hover:border-ignitera-500/50 hover:bg-ignitera-500/10 hover:shadow-[0_0_20px_rgba(255,77,0,0.2)] text-white rounded-full font-medium transition-all duration-300 mt-4 backdrop-blur-sm">
                                送信する
                            </button>
                        </form>
                    </FadeIn>

                    <FadeIn delay={0.2} className="md:border-l md:border-white/10 md:pl-20 flex flex-col justify-center mt-12 md:mt-0 relative">
                        {/* Glowing separator line */}
                        <div className="hidden md:block absolute top-[20%] bottom-[20%] left-[-1px] w-[1px] bg-gradient-to-b from-transparent via-ignitera-500 to-transparent opacity-50 shadow-[0_0_5px_#ff4d00]" />

                        <div className="space-y-12">
                            <div>
                                <h3 className="text-sm font-medium text-zinc-500 mb-2">OFFICE</h3>
                                <p className="text-lg text-white font-light leading-relaxed">
                                    〒100-0005<br />
                                    東京都千代田区丸の内 1-x-x<br />
                                    IGNITERA ビルディング 32F
                                </p>
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-zinc-500 mb-2">EMAIL</h3>
                                <p className="text-lg text-white font-light transition-colors hover:text-ignitera-500 hover:drop-shadow-[0_0_8px_rgba(255,77,0,0.8)] cursor-pointer">
                                    hello@ignitera.example.com
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </div>
    );
}
