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
          petrol: '#0C1713', // Verde Petróleo Escuro
          blue: '#7AA2E4', // Azul Sereno
          white: '#FFFFFF' // Branco Puro
        },
        // Para fácil acesso
        primary: '#7AA2E4',
        secondary: '#0C1713',
        background: '#0C1713',
        text: '#FFFFFF'
      },
      fontFamily: {
        primary: ['Dosend', 'Helvetica', 'Arial', 'sans-serif'],
        secondary: ['Helvetica', 'Arial', 'sans-serif'],
        sans: ['Dosend', 'Helvetica', 'Arial', 'sans-serif']
      }
    }
  },
  plugins: []
}
