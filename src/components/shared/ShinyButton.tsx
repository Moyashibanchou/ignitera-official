"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function ShinyButton({ href, children, className = "" }: { href?: string; children: React.ReactNode; className?: string }) {
    const content = (
        <motion.div
            className="relative w-full h-full flex items-center justify-center font-medium px-8 py-4"
            whileHover="hover"
            initial="initial"
        >
            <span className="relative z-10">{children}</span>
            <motion.div
                className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] w-[50px]"
                variants={{
                    initial: { left: "-50px" },
                    hover: { left: "150%", transition: { duration: 0.6, ease: "easeInOut" } }
                }}
            />
        </motion.div>
    );

    const baseClass = `relative overflow-hidden inline-block ${className}`;

    if (href) {
        return (
            <Link href={href} className={baseClass}>
                {content}
            </Link>
        );
    }
    return (
        <button className={baseClass}>
            {content}
        </button>
    );
}
