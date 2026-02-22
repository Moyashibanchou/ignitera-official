"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const colors = {
    orange: "hover:text-ignitera-500 hover:drop-shadow-[0_0_8px_rgba(255,77,0,0.8)] transition-all",
};

export default function Header() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: "Methodology", path: "/methodology" },
        { name: "Culture", path: "/culture" },
        { name: "Roadmap", path: "/roadmap" },
        { name: "Founder", path: "/founder" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 bg-[#000000]/60 backdrop-blur-xl z-50 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-2"
                    >
                        <img src="/logo.jpg" alt="IGNITERA Logo" className="h-[48px] md:h-[72px] w-auto object-contain rounded-md" />
                    </motion.div>
                </Link>

                {/* PC Navigation */}
                <nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.path}
                            className={`${pathname === link.path ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]' : ''} ${colors.orange}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation Dropdown */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden absolute top-24 left-0 w-full bg-[#050505] border-b border-white/10 shadow-2xl flex flex-col py-4"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`block px-8 py-4 text-lg font-medium border-b border-white/5 ${pathname === link.path
                                        ? 'text-ignitera-500 bg-white/[0.02]'
                                        : 'text-zinc-400 hover:text-white hover:bg-white/[0.02] transition-colors'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
