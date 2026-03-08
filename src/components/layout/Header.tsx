"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
const colors = {
    orange: "hover:text-ignitera-500 hover:drop-shadow-[0_0_8px_rgba(255,77,0,0.8)] transition-all",
};

export default function Header() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { user, isLoaded } = useUser();

    const [dashboardUrl, setDashboardUrl] = useState("/dashboard");

    useEffect(() => {
        if (isLoaded && user) {
            const role = user.publicMetadata?.role;
            if (role === "company") {
                setDashboardUrl("/company/dashboard");
            } else {
                setDashboardUrl("/dashboard");
            }
        }
    }, [isLoaded, user]);

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

                {/* Auth Buttons & Mobile Menu Toggle */}
                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-4">
                        <SignedOut>
                            <SignInButton mode="modal">
                                <span className="px-4 py-2 text-sm font-bold text-zinc-400 hover:text-white transition-colors cursor-pointer inline-block">
                                    ログイン
                                </span>
                            </SignInButton>
                        </SignedOut>
                        <SignedIn>
                            <Link href={dashboardUrl} className="px-4 py-2 text-sm font-bold text-zinc-400 hover:text-white transition-colors cursor-pointer inline-block mr-2">
                                マイページ
                            </Link>
                            <UserButton appearance={{ elements: { avatarBox: "w-10 h-10 border-2 border-orange-500/50 hover:border-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.2)]" } }} />
                        </SignedIn>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <SignedIn>
                            <UserButton appearance={{ elements: { avatarBox: "w-8 h-8 border border-orange-500/50" } }} />
                        </SignedIn>
                        <button
                            className="text-white p-2"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
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
                        <SignedOut>
                            <div className="px-8 py-6 flex flex-col gap-4 border-t border-white/5 mt-auto">
                                <SignInButton mode="modal">
                                    <span className="block w-full py-3 text-center font-bold text-zinc-400 bg-white/5 hover:bg-white/10 transition-colors rounded-lg border border-white/10 cursor-pointer">
                                        ログイン
                                    </span>
                                </SignInButton>
                            </div>
                        </SignedOut>
                        <SignedIn>
                            <div className="px-8 py-6 flex flex-col gap-4 border-t border-white/5 mt-auto">
                                <Link href={dashboardUrl} onClick={() => setIsMobileMenuOpen(false)}>
                                    <div className="w-full py-3 text-center font-bold text-white bg-orange-600/20 border border-orange-500/50 rounded-lg shadow-[0_0_15px_rgba(249,115,22,0.3)] cursor-pointer">
                                        マイページ
                                    </div>
                                </Link>
                            </div>
                        </SignedIn>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
