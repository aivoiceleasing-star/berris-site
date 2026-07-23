/** Brand tokens extracted verbatim from the old compiled styles.css. */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md}'],
  theme: {
    extend: {
      colors: {
        base: '#F5F7FB',
        blue: '#2F6FB0',
        navy: '#14305A',
        'navy-deep': '#0E2244',
        ink: '#1B2430',
        stone: '#5B6675',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      maxWidth: {
        content: '1240px',
      },
    },
  },
  plugins: [],
};
