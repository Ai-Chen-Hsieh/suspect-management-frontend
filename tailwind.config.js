/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        container:
          "rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px",
        card: "rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px",
      },
      backgroundColor: {
        primary: "#e9e9e9",
        active: "#d8d8d8",
        btnPrimary: "#114466",
        btnSecondary: "#114466",
        orange: "#ffa07a",
        pink: "#ffd9ec",
        green: "#98fb98",
      },
    },
  },
  plugins: [],
};
