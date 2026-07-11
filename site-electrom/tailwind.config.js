/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          petrol: '#0C1713', // Verde Petróleo Escuro (Base)
          blue: '#7AA2E4', // Azul Sereno (Destaque Principal)
          white: '#FFFFFF', // Branco Puro
          dark: '#060C0A', // Fundo mais escuro para contrastes
          gold: '#FFB800', // Energy Gold (Dourado de energia solar)
          cyan: '#00F0FF', // Electric Cyan (Azul elétrico de alta tensão)
          amber: '#FF7A00', // Solar Amber
        },
        // Mapeamentos para facilidade de uso
        primary: '#7AA2E4',
        secondary: '#0C1713',
        background: '#0C1713',
        text: '#FFFFFF',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'Helvetica', 'Arial', 'sans-serif'],
        primary: ['var(--font-inter)', 'Helvetica', 'Arial', 'sans-serif'],
        secondary: ['var(--font-space-grotesk)', 'Helvetica', 'Arial', 'sans-serif'],
      },
      animation: {
        'shimmer': 'shimmer 2.5s infinite linear',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    }
  },
  plugins: []
}
