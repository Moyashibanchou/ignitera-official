"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const colors = {
    orange: "hover:text-ignitera-500 hover:drop-shadow-[0_0_8px_rgba(255,77,0,0.8)] transition-all",
};

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="fixed top-0 left-0 right-0 bg-[#000000]/60 backdrop-blur-xl z-50 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl font-medium tracking-tighter text-white glow-text"
                    >
                        IGNITERA
                    </motion.div>
                </Link>
                <nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
                    <Link href="/methodology" className={`${pathname === '/methodology' ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]' : ''} ${colors.orange}`}>Methodology</Link>
                    <Link href="/culture" className={`${pathname === '/culture' ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]' : ''} ${colors.orange}`}>Culture</Link>
                    <Link href="/roadmap" className={`${pathname === '/roadmap' ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]' : ''} ${colors.orange}`}>Roadmap</Link>
                    <Link href="/founder" className={`${pathname === '/founder' ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]' : ''} ${colors.orange}`}>Founder</Link>
                </nav>
            </div>
        </header>
    );
}
