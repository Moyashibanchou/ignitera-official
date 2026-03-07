"use client";

import React, { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { supabase } from "@/lib/supabase";
import { motion } from "framer-motion";
import { ChevronRight, ShieldCheck, Loader2 } from "lucide-react";

export default function OnboardingPage() {
    const { user, isLoaded, isSignedIn } = useUser();
    const [name, setName] = useState("");
    const [university, setUniversity] = useState("");
    const [faculty, setFaculty] = useState("");
    const [department, setDepartment] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [selfPr, setSelfPr] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    if (!isLoaded) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <Loader2 className="w-8 h-8 text-orange-500 animate-spin" />
            </div>
        );
    }

    if (!isSignedIn) {
        return (
            <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center p-6 text-white text-xl">
                先にログインしてください。
            </div>
        );
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const { error } = await supabase.from("student_profiles").upsert({
                id: user.id,
                name: name,
                university: university,
                faculty: faculty,
                department: department,
                phone_number: phoneNumber,
                self_pr: selfPr,
                updated_at: new Date().toISOString(),
            });

            if (error) {
                console.error("Supabase Error:", error.message, error.details, error);
                throw error;
            }
            setStatus("success");

            // 少し待ってからダッシュボードにリダイレクトするなどの処理をここで追加できます
            setTimeout(() => {
                window.location.href = "/students";
            }, 2000);
        } catch (error: any) {
            console.error("Catch Error:", error?.message || error);
            setStatus("error");
        }
    };

    return (
        <div className="min-h-screen bg-[#050505] flex items-center justify-center py-24 px-4 relative overflow-hidden text-zinc-300 font-sans selection:bg-ignitera-500 selection:text-white">
            {/* Background Glow */}
            <div className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] rounded-full mix-blend-screen blur-[100px] opacity-[0.1] bg-orange-600 pointer-events-none" />
            <div className="absolute bottom-[20%] left-[10%] w-[30vw] h-[30vw] rounded-full mix-blend-screen blur-[120px] opacity-[0.05] bg-red-600 pointer-events-none" />

            <motion.div
                className="w-full max-w-lg relative z-10 p-8 rounded-3xl bg-white/[0.03] backdrop-blur-md border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center gap-2 mb-6 justify-center">
                    <ShieldCheck className="w-5 h-5 text-orange-500" />
                    <span className="text-orange-400 font-bold tracking-widest text-xs uppercase">Initial Setup</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-2 tracking-tight drop-shadow-[0_0_15px_rgba(255,77,0,0.3)]">
                    学生プロフィール登録
                </h1>
                <p className="text-center text-zinc-400 text-sm mb-10 leading-relaxed font-light">
                    あなたの「行動ログ」を企業へとつなぐため、<br />
                    基本情報を入力してください。
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2 ml-1" htmlFor="name">
                            Name (氏名)
                        </label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            placeholder="山田 太郎"
                            className="w-full px-5 py-4 bg-black/50 border border-white/10 rounded-xl text-white placeholder:text-zinc-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 transition-all font-medium"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2 ml-1" htmlFor="phone_number">
                            Phone (電話番号)
                        </label>
                        <input
                            id="phone_number"
                            type="tel"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                            placeholder="090-1234-5678"
                            className="w-full px-5 py-4 bg-black/50 border border-white/10 rounded-xl text-white placeholder:text-zinc-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 transition-all font-medium"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2 ml-1" htmlFor="university">
                            University (所属大学等)
                        </label>
                        <input
                            id="university"
                            type="text"
                            value={university}
                            onChange={(e) => setUniversity(e.target.value)}
                            required
                            placeholder="⚪︎⚪︎大学 ⚪︎⚪︎学部 ⚪︎年"
                            className="w-full px-5 py-4 bg-black/50 border border-white/10 rounded-xl text-white placeholder:text-zinc-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 transition-all font-medium"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2 ml-1" htmlFor="faculty">
                            Faculty (学部)
                        </label>
                        <input
                            id="faculty"
                            type="text"
                            value={faculty}
                            onChange={(e) => setFaculty(e.target.value)}
                            required
                            placeholder="理工学部"
                            className="w-full px-5 py-4 bg-black/50 border border-white/10 rounded-xl text-white placeholder:text-zinc-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 transition-all font-medium"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2 ml-1" htmlFor="department">
                            Department (学科)
                        </label>
                        <input
                            id="department"
                            type="text"
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                            required
                            placeholder="情報工学科"
                            className="w-full px-5 py-4 bg-black/50 border border-white/10 rounded-xl text-white placeholder:text-zinc-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 transition-all font-medium"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2 ml-1" htmlFor="self_pr">
                            Self PR (今のあなたの熱意・自己PR)
                        </label>
                        <textarea
                            id="self_pr"
                            value={selfPr}
                            onChange={(e) => setSelfPr(e.target.value)}
                            required
                            placeholder="現在熱中していることや、今後挑戦したい仕事について教えてください。"
                            rows={4}
                            className="w-full px-5 py-4 bg-black/50 border border-white/10 rounded-xl text-white placeholder:text-zinc-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 transition-all resize-none font-medium leading-relaxed"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={status === "loading" || status === "success"}
                        className={`w-full py-4 mt-4 flex justify-center items-center gap-2 rounded-xl font-bold text-lg transition-all duration-300 border ${status === "success"
                            ? "bg-green-600/20 text-green-400 border-green-500/50 shadow-[0_0_20px_rgba(34,197,94,0.3)]"
                            : "bg-orange-600 text-white hover:bg-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] border-orange-400"
                            } disabled:opacity-70 disabled:cursor-not-allowed`}
                    >
                        {status === "loading" ? (
                            <Loader2 className="w-6 h-6 animate-spin" />
                        ) : status === "success" ? (
                            "保存完了！"
                        ) : (
                            <>
                                保存して次へ
                                <ChevronRight className="w-5 h-5 -ml-1 mt-[1px]" />
                            </>
                        )}
                    </button>
                    {status === "success" && (
                        <p className="text-center text-green-400 text-xs font-bold tracking-wide mt-2">
                            情報の更新に成功しました。まもなく移動します。
                        </p>
                    )}
                    {status === "error" && (
                        <p className="text-center text-red-500 text-xs font-bold tracking-wide mt-2">
                            保存に失敗しました。時間をおいて再試行してください。
                        </p>
                    )}
                </form>
            </motion.div>
        </div >
    );
}
