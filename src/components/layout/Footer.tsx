import Link from "next/link";

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
                    <a href="#" className="hover:text-ignitera-500 hover:drop-shadow-[0_0_8px_rgba(255,77,0,0.8)] transition-all">Twitter</a>
                    <a href="#" className="hover:text-ignitera-500 hover:drop-shadow-[0_0_8px_rgba(255,77,0,0.8)] transition-all">LinkedIn</a>
                </div>
                <div>
                    &copy; {new Date().getFullYear()} IGNITERA. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
