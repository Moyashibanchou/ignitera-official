import Link from "next/link";
import { Instagram } from "lucide-react";

// カスタムXアイコン（Unicode 𝕏 を模したデザイン）
const CustomXIcon = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={className}
        style={style}
        fill="currentColor"
    >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.25 2.25h6.8l4.71 6.228L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
);

export default function Footer() {
    return (
        <footer className="bg-[#050505] border-t border-white/5 py-12 px-6 text-sm text-zinc-500 font-light mt-auto">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex gap-8">
                    <Link href="#" className="hover:text-zinc-300 transition-colors">Privacy</Link>
                    <Link href="#" className="hover:text-zinc-300 transition-colors">Terms</Link>
                    <Link href="/contact" className="hover:text-zinc-300 transition-colors">Contact</Link>
                </div>
                <div className="flex gap-8">
                    <a
                        href="https://x.com/ignitera777"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center p-2 rounded-full transition-all duration-300 hover:-translate-y-1"
                    >
                        <CustomXIcon
                            className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(249,115,22,0.8)]"
                        />
                    </a>
                    <a href="https://www.instagram.com/ignitera777/" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-all duration-300 hover:text-orange-500 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(249,115,22,0.5)] flex items-center justify-center p-2 rounded-full">
                        <Instagram className="w-5 h-5" />
                    </a>
                </div>
                <div>
                    &copy; {new Date().getFullYear()} IGNITERA. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
