/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f8fafc',
          100: '#f1f5f9',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        emerald: {
          500: '#10b981',
          600: '#059669',
          700: '#047857',
        },
        royal: {
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'executive': '0 10px 30px -10px rgba(15, 23, 42, 0.08), 0 4px 6px -2px rgba(15, 23, 42, 0.03)',
        'executive-hover': '0 20px 40px -15px rgba(15, 23, 42, 0.12), 0 8px 12px -4px rgba(15, 23, 42, 0.04)',
        'emerald-glow': '0 0 20px -5px rgba(5, 150, 105, 0.2)',
      }
    },
  },
  plugins: [],
}
