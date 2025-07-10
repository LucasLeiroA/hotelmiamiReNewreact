export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-body": "#1e1e1e",
          },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
};
