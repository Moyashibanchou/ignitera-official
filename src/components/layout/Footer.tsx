import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 py-12 px-6 text-sm text-gray-500 font-light mt-auto">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex gap-8">
                    <Link href="#" className="hover:text-gray-900 transition-colors">Privacy</Link>
                    <Link href="#" className="hover:text-gray-900 transition-colors">Terms</Link>
                    <Link href="/contact" className="hover:text-gray-900 transition-colors">Contact</Link>
                </div>
                <div className="flex gap-8">
                    <a href="#" className="hover:text-[#4285F4] transition-colors">Twitter</a>
                    <a href="#" className="hover:text-[#EA4335] transition-colors">LinkedIn</a>
                </div>
                <div>
                    &copy; {new Date().getFullYear()} IGNITERA. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
