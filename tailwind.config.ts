import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50:  '#f5f5f5',
          100: '#e8e8e8',
          200: '#d0d0d0',
          300: '#a8a8a8',
          400: '#808080',
          500: '#585858',
          600: '#404040',
          700: '#2a2a2a',
          800: '#1a1a1a',
          900: '#0d0d0d',
          950: '#080808',
          DEFAULT: '#0d0d0d',
        },
      },
      fontFamily: {
        sans: [
          'Noto Sans JP',
          'Hiragino Sans',
          'ヒラギノ角ゴ ProN W3',
          'メイリオ',
          'Meiryo',
          'sans-serif',
        ],
      },
      letterSpacing: {
        widest: '0.15em',
        'ultra': '0.25em',
        'mega': '0.35em',
      },
      animation: {
        'ticker': 'ticker 22s linear infinite',
        'ticker-slow': 'ticker 36s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        ticker: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
