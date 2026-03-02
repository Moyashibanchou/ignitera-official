"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function EnterpriseRegistrationForm() {
    return (
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
                見落とされた『隠れた天才』を、その手に。
            </h2>
            <p className="text-gray-400 mb-8">
                履歴書や面接では見抜けない、候補者の真のポテンシャルを可視化します。以下のフォームより事前登録（無料）にお進みください。
            </p>
            <a
                href="https://forms.gle/Lej96gQzpg1WQEUVA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-orange-500 rounded-full transition-all duration-300 hover:bg-orange-400 hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] hover:-translate-y-1"
            >
                企業向け事前登録へ進む
                <ArrowRight className="ml-2 w-5 h-5" />
            </a>
        </div>
    );
}
