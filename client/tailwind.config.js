module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: 'var(--font-display)',
      },
      colors: {
        scipred: 'var(--color-scipred)',
        scipblue: 'var(--color-scipblue)',
      },
    },
  },
  plugins: [],
}