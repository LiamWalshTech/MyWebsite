/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        "candy-apple-red": "#FC2E20",
        "safety-orange": "#FD7F20",
        amber: "#FFBF00",
        "vivid-sky-blue": "#00D8FF",
        "deep-sky-blue": "#00BFFF",
        "picton-blue": "#00A7FF",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.pink[800]'),
              '&:hover': {
                color: theme('colors.pink[800]'),
              },
            },
            h1: {
              color: theme('colors.pink[800]'),
            },
            h2: {
              color: theme('colors.pink[800]'),
            },
            h3: {
              color: theme('colors.pink[800]'),
            },
          }
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
