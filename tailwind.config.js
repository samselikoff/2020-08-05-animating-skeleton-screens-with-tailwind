function px(pixels) {
  return `${pixels / 16}rem`;
}

module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: px(12),
      sm: px(14),
      base: px(15),
      lg: px(19),
      xl: px(20),
      "2xl": px(24),
      "3xl": px(30),
      "4xl": px(36),
      "5xl": px(48),
      "6xl": px(64),
    },

    extend: {
      screens: {
        xs: "480px",
      },

      animation: {
        pulse: "pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },

      keyframes: {
        pulse: {
          "0%, 100%": {
            opacity: 0,
          },
          "50%": {
            opacity: 1,
          },
        },
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
