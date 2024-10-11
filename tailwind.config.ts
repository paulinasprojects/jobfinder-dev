import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        md: "16px",
        xxs: "13px",
      },
      gridTemplateColumns: {
        15: "repeat(2, 373px)",
        17: "repeat(1, 300px)",
        20: "repeat(2, 290px)",
        25: "repeat(3, 290px)",
        30: "repeat(3, 256px)",
        35: "repeat(3, 200px)",
        40: "repeat(2, 400px)",
        45: "repeat(3, 105px)",
        150: "repeat(2, 145px)",
        160: "repeat(2, 110px)",
        170: "repeat(6, 110px)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        greenCard: "#C7F4C2",
        purpleCard: "#D7D0FF",
        yellowCard: "#FDDD8C",
        pinkCard: "#FFBBD7",
        greenButtonColor: "#0BAB7C",
        neutralColor: "#92929D",
        neutral3Color: "#696974",
        neutralWhite: "#F5F5F8",
        neutralWhite200: "#E2E2EA",
        cardColor: "#1c1c24",
        cardColorTwo: "#21212b",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
