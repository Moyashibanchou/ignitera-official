import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'IGNITERA',
    description: 'Igniting the Future, Together.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ja">
            <body className={`${inter.className} min-h-screen flex flex-col`}>
                <Header />
                <div className="pt-16 flex-1">
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    )
}
