"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const colors = {
    blue: "hover:text-[#4285F4]",
    red: "hover:text-[#EA4335]",
    yellow: "hover:text-[#FBBC05]",
    green: "hover:text-[#34A853]",
};

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="fixed top-0 left-0 right-0 bg-[#FFFFFF]/90 backdrop-blur-md z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl font-medium tracking-tighter text-[#3C4043]"
                    >
                        IGNITERA
                    </motion.div>
                </Link>
                <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-500">
                    <Link href="/methodology" className={`transition-colors ${pathname === '/methodology' ? 'text-[#3C4043]' : ''} ${colors.blue}`}>Methodology</Link>
                    <Link href="/culture" className={`transition-colors ${pathname === '/culture' ? 'text-[#3C4043]' : ''} ${colors.red}`}>Culture</Link>
                    <Link href="/roadmap" className={`transition-colors ${pathname === '/roadmap' ? 'text-[#3C4043]' : ''} ${colors.yellow}`}>Roadmap</Link>
                    <Link href="/founder" className={`transition-colors ${pathname === '/founder' ? 'text-[#3C4043]' : ''} ${colors.green}`}>Founder</Link>
                </nav>
            </div>
        </header>
    );
}
