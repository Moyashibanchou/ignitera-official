import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                ignitera: {
                    50: '#fff3ed',
                    100: '#ffe5d4',
                    200: '#ffcba9',
                    300: '#ffaa78',
                    400: '#ff7d3f',
                    500: '#ff4d00', // Neon Orange primary
                    600: '#ef3400',
                    700: '#c62200',
                    800: '#9d1b00',
                    900: '#7e1903',
                }
            },
            animation: {
                'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 20s ease-in-out infinite',
                'shimmer': 'shimmer 3s linear infinite',
                'pulse-fiber': 'pulse-fiber 2s linear infinite',
                'trace': 'trace 2s linear infinite',
                'trace-y': 'trace-y 2s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0) translateX(0)' },
                    '50%': { transform: 'translateY(-20px) translateX(20px)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '200% 0' },
                    '100%': { backgroundPosition: '-200% 0' },
                },
                'pulse-fiber': {
                    '0%': { strokeDashoffset: '100%' },
                    '100%': { strokeDashoffset: '-100%' }
                },
                trace: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' },
                },
                'trace-y': {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(100%)' },
                }
            }
        },
    },
    plugins: [],
}
export default config
