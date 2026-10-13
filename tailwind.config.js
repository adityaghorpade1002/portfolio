/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#030712',
          900: '#070d19',
          850: '#0c1322',
          800: '#111b2e',
          750: '#17233c',
          700: '#1e2d4a',
        },
        border: {
          subtle: '#1e293b',
          muted: '#2a374f',
          accent: '#3b82f6',
        },
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          cyan: '#06b6d4',
          sky: '#0ea5e9',
          emerald: '#10b981',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        'card-hover': '0 12px 32px -4px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(99, 102, 241, 0.3), 0 0 24px -4px rgba(99, 102, 241, 0.15)',
        'glow-sm': '0 0 16px -2px rgba(99, 102, 241, 0.25)',
        'glow-lg': '0 0 40px -4px rgba(99, 102, 241, 0.2)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'subtle-mesh': 'radial-gradient(at 10% 20%, rgba(99, 102, 241, 0.08) 0px, transparent 50%), radial-gradient(at 90% 80%, rgba(14, 165, 233, 0.06) 0px, transparent 50%)',
      }
    },
  },
  plugins: [],
}
