"use client";
import React, { useState } from "react";
import FadeIn from "@/components/shared/FadeIn";

export default function ContactPage() {
    const [focused, setFocused] = useState<string | null>(null);

    const CustomInput = ({ id, label, type = "text" }: { id: string, label: string, type?: string }) => (
        <div className="relative mb-12">
            <label
                className={`absolute left-0 transition-all duration-300 font-light ${focused === id || (typeof window !== 'undefined' && (document.getElementById(id) as HTMLInputElement)?.value) ? '-top-5 text-xs text-[#34A853]' : 'top-1 text-gray-400 text-lg'}`}
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
                className="w-full bg-transparent border-b border-gray-200 py-2 focus:outline-none focus:border-[#34A853] transition-colors text-lg font-light text-[#202124]"
            />
        </div>
    );

    return (
        <div className="min-h-[85vh] bg-white text-[#202124] flex flex-col justify-center py-24 px-6 font-sans selection:bg-[#34A853] selection:text-white">
            <div className="max-w-6xl mx-auto w-full">
                <FadeIn>
                    <p className="text-[#34A853] font-medium tracking-wide mb-4">Contact</p>
                    <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-20">
                        対話を、始めよう。
                    </h1>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <FadeIn delay={0.1}>
                        <form className="max-w-md" onSubmit={(e) => e.preventDefault()}>
                            <CustomInput id="name" label="お名前" />
                            <CustomInput id="email" label="メールアドレス" type="email" />

                            <div className="relative mb-12 mt-4">
                                <label
                                    className={`absolute left-0 transition-all duration-300 font-light ${focused === 'message' || (typeof document !== 'undefined' && (document.getElementById('message') as HTMLTextAreaElement)?.value) ? '-top-5 text-xs text-[#34A853]' : 'top-1 text-gray-400 text-lg'}`}
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
                                    className="w-full bg-transparent border-b border-gray-200 py-2 focus:outline-none focus:border-[#34A853] transition-colors text-lg font-light text-[#202124] resize-none"
                                />
                            </div>

                            <button type="submit" className="px-8 py-4 bg-[#202124] text-white rounded-full font-medium hover:bg-gray-800 transition-colors shadow-sm">
                                送信する
                            </button>
                        </form>
                    </FadeIn>

                    <FadeIn delay={0.2} className="md:border-l md:border-gray-100 md:pl-20 flex flex-col justify-center mt-12 md:mt-0">
                        <div className="space-y-12">
                            <div>
                                <h3 className="text-sm font-medium text-gray-400 mb-2">OFFICE</h3>
                                <p className="text-lg text-[#202124] font-light leading-relaxed">
                                    〒100-0005<br />
                                    東京都千代田区丸の内 1-x-x<br />
                                    IGNITERA ビルディング 32F
                                </p>
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-gray-400 mb-2">EMAIL</h3>
                                <p className="text-lg text-[#202124] font-light">
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
