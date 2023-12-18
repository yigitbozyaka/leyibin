import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2A2F45',
        secondary: '#434964',
        tertiary: '#EEE0C9',
        quaternary: '#F1F0E8',
      }
    }
  },
  plugins: [require('tailwindcss-animated')],
}
export default config
