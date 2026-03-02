import Link from "next/link";
import { Twitter, Instagram } from "lucide-react";

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
                    <a href="https://x.com/ignitera777" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-all duration-300 hover:text-orange-500 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(249,115,22,0.5)] flex items-center justify-center p-2 rounded-full">
                        <Twitter className="w-5 h-5" />
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
