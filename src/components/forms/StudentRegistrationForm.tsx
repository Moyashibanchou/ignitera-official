"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { SignUpButton } from "@clerk/nextjs";

export default function StudentRegistrationForm() {
    return (
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
                準備はいいか。君の本当の価値を証明しよう。
            </h2>
            <p className="text-gray-400 mb-8">
                行動ログの解析とステータス可視化のための事前登録（完全無料）を行います。学生証の画像をご用意の上、お進みください。
            </p>
            <SignUpButton mode="modal" forceRedirectUrl="/onboarding">
                <button
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-orange-600 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.6)] border border-orange-400 hover:bg-orange-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.8)] hover:-translate-y-1"
                >
                    事前登録へ進む（無料）
                    <ArrowRight className="ml-2 w-5 h-5" />
                </button>
            </SignUpButton>
        </div>
    );
}
