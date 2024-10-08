const colourPalette = {
  candy_apple_red: {
    DEFAULT: "#fc2e20",
    100: "#380501",
    200: "#710902",
    300: "#a90e03",
    400: "#e11203",
    500: "#fc2e20",
    600: "#fc5a4e",
    700: "#fd837a",
    800: "#feaca7",
    900: "#fed6d3",
  },
  safety_orange: {
    DEFAULT: "#fd7f20",
    100: "#391901",
    200: "#713201",
    300: "#aa4a02",
    400: "#e26302",
    500: "#fd7f20",
    600: "#fd9a4d",
    700: "#feb37a",
    800: "#fecca6",
    900: "#ffe6d3",
  },
  amber: {
    DEFAULT: "#ffbf00",
    100: "#332600",
    200: "#664d00",
    300: "#997300",
    400: "#cc9900",
    500: "#ffbf00",
    600: "#ffcc33",
    700: "#ffd966",
    800: "#ffe699",
    900: "#fff2cc",
  },
  vivid_sky_blue: {
    DEFAULT: "#00d8ff",
    100: "#002b33",
    200: "#005766",
    300: "#008299",
    400: "#00adcc",
    500: "#00d8ff",
    600: "#33e0ff",
    700: "#66e8ff",
    800: "#99f0ff",
    900: "#ccf7ff",
  },
  deep_sky_blue: {
    DEFAULT: "#00bfff",
    100: "#002633",
    200: "#004d66",
    300: "#007399",
    400: "#0099cc",
    500: "#00bfff",
    600: "#33ccff",
    700: "#66d9ff",
    800: "#99e6ff",
    900: "#ccf2ff",
  },
  picton_blue: {
    DEFAULT: "#00a7ff",
    100: "#002133",
    200: "#004266",
    300: "#006399",
    400: "#0085cc",
    500: "#00a7ff",
    600: "#33b8ff",
    700: "#66c9ff",
    800: "#99dbff",
    900: "#ccedff",
  },
};

const extendedColours = {
  primary: colourPalette.picton_blue.DEFAULT,
  secondary: colourPalette.deep_sky_blue.DEFAULT,
  accent: colourPalette.amber.DEFAULT,
  contrast: colourPalette.candy_apple_red.DEFAULT,
  background: colourPalette.deep_sky_blue.DEFAULT,
  text: "#050315",
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        primary: extendedColours.primary,
        secondary: extendedColours.secondary,
        accent: extendedColours.accent,
        background: extendedColours.background,
        contrast: extendedColours.contrast,
        github: "#333",
        linkedin: "#0077b5",
        twitter: "#1da1f2",
        youtube: "#ff0000",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            color: extendedColours.text,
            '[class~="lead"], strong, dt, h1, h2, h3, h4, thead th': {
              color: extendedColours.text,
            },
            a: {
              color: extendedColours.secondary,
              "&:hover": {
                color: extendedColours.accent,
              },
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
