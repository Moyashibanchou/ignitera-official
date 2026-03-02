"use client";
import React, { useState } from "react";
import FadeIn from "@/components/shared/FadeIn";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await fetch('https://formspree.io/f/xzdaqqng', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setIsSuccess(true);
            } else {
                alert("送信エラーが発生しました。");
            }
        } catch (error) {
            alert("通信エラーが発生しました。");
        } finally {
            setIsSubmitting(false);
        }
    };

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
                    <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-20 text-white glow-text break-keep">
                        対話を、<br className="block md:hidden" />始めよう。
                    </h1>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <FadeIn delay={0.1}>
                        <AnimatePresence mode="wait">
                            {!isSuccess ? (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 1 }}
                                    exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
                                    className="max-w-md glass-panel p-10 relative overflow-hidden group"
                                    onSubmit={handleSubmit}
                                >
                                    {/* Shimmer on hover */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                                        <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-transparent via-ignitera-500 to-transparent -translate-y-full group-hover:animate-[trace-y_3s_linear_infinite]" />
                                    </div>

                                    <div className="mb-6">
                                        <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500" placeholder="お名前" />
                                    </div>
                                    <div className="mb-6">
                                        <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500" placeholder="メールアドレス" />
                                    </div>
                                    <div className="mb-8">
                                        <textarea name="message" required rows={5} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 resize-none" placeholder="お問い合わせ内容"></textarea>
                                    </div>

                                    <button type="submit" disabled={isSubmitting} className="w-full px-8 py-4 bg-white/5 border border-white/10 hover:border-ignitera-500/50 hover:bg-ignitera-500/10 hover:shadow-[0_0_20px_rgba(255,77,0,0.2)] text-white rounded-full font-medium transition-all duration-300 mt-4 backdrop-blur-sm disabled:opacity-50">
                                        {isSubmitting ? "送信中..." : "送信する"}
                                    </button>
                                </motion.form>
                            ) : (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="max-w-md glass-panel p-10 flex flex-col items-center justify-center text-center py-20"
                                >
                                    <CheckCircle className="w-16 h-16 text-green-500 mb-6 drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
                                    <h3 className="text-2xl font-bold text-white mb-2 tracking-widest">MESSAGE SENT</h3>
                                    <p className="text-zinc-400 break-keep">お問い合わせを送信しました。<br />担当者より順次ご返信いたします。</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </FadeIn>

                    <FadeIn delay={0.2} className="md:border-l md:border-white/10 md:pl-20 flex flex-col justify-center mt-12 md:mt-0 relative">
                        {/* Glowing separator line */}
                        <div className="hidden md:block absolute top-[20%] bottom-[20%] left-[-1px] w-[1px] bg-gradient-to-b from-transparent via-ignitera-500 to-transparent opacity-50 shadow-[0_0_5px_#ff4d00]" />

                        <div className="space-y-12">
                            <div>
                                <h3 className="text-sm font-medium text-zinc-500 mb-2">OFFICE</h3>
                                <p className="text-lg text-white font-light leading-relaxed break-keep">
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
