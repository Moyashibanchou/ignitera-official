import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: {
        template: '%s | IGNITERA',
        default: 'IGNITERA | 行動ログから真のポテンシャルを可視化する次世代評価エンジン',
    },
    description: '学歴や面接という古い評価モデル（The Old Model）を破壊する。日常のワークスペースから無意識の行動ログを解析し、隠れた天才や真の実力値を可視化する、B2B/採用向け次世代評価プラットフォームです。',
    keywords: ["IGNITERA", "採用", "評価基準", "行動ログ", "HRテック", "ポテンシャル採用", "データ解析"],
    openGraph: {
        title: 'IGNITERA | 行動ログから真のポテンシャルを可視化する次世代評価エンジン',
        description: '学歴や面接という古い評価モデル（The Old Model）を破壊する。日常のワークスペースから無意識の行動ログを解析し、隠れた天才や真の実力値を可視化する、B2B/採用向け次世代評価プラットフォームです。',
        url: 'https://ignitera-official.vercel.app/',
        siteName: 'IGNITERA',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'IGNITERA Official',
            }
        ],
        locale: 'ja_JP',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'IGNITERA | 行動ログから真のポテンシャルを可視化する次世代評価エンジン',
        description: '学歴や面接という古い評価モデル（The Old Model）を破壊する。日常のワークスペースから無意識の行動ログを解析し、隠れた天才や真の実力値を可視化する、B2B/採用向け次世代評価プラットフォームです。',
        images: ['/og-image.png'],
    },
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
                <div className="pt-24 flex-1">
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    )
}
