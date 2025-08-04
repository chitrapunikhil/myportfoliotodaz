/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        xs: "475px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
        // Device-specific breakpoints
        "mobile-s": "320px",
        "mobile-m": "375px",
        "mobile-l": "425px",
        tablet: "768px",
        laptop: "1024px",
        "laptop-l": "1440px",
        desktop: "2560px",
        // Orientation-based
        landscape: { raw: "(orientation: landscape)" },
        portrait: { raw: "(orientation: portrait)" },
        // High DPI
        retina: { raw: "(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)" },
        // Foldable devices
        fold: "280px",
        // Ultra-wide
        ultrawide: "2560px",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
        // Fluid typography
        "fluid-xs": "clamp(0.75rem, 0.8vw, 0.875rem)",
        "fluid-sm": "clamp(0.875rem, 1vw, 1rem)",
        "fluid-base": "clamp(1rem, 1.2vw, 1.125rem)",
        "fluid-lg": "clamp(1.125rem, 1.4vw, 1.25rem)",
        "fluid-xl": "clamp(1.25rem, 1.6vw, 1.5rem)",
        "fluid-2xl": "clamp(1.5rem, 2vw, 2rem)",
        "fluid-3xl": "clamp(2rem, 3vw, 2.5rem)",
        "fluid-4xl": "clamp(2.5rem, 4vw, 3rem)",
        "fluid-5xl": "clamp(3rem, 5vw, 4rem)",
        "fluid-6xl": "clamp(4rem, 6vw, 5rem)",
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
        144: "36rem",
        // Fluid spacing
        "fluid-xs": "clamp(0.25rem, 0.5vw, 0.5rem)",
        "fluid-sm": "clamp(0.5rem, 1vw, 1rem)",
        "fluid-md": "clamp(1rem, 2vw, 1.5rem)",
        "fluid-lg": "clamp(1.5rem, 3vw, 2rem)",
        "fluid-xl": "clamp(2rem, 4vw, 3rem)",
        "fluid-2xl": "clamp(3rem, 6vw, 4rem)",
        "fluid-3xl": "clamp(4rem, 8vw, 6rem)",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
        "screen-3xl": "1920px",
      },
      minHeight: {
        "screen-small": "100vh",
        "screen-dynamic": "100dvh",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideLeft: {
          "0%": { transform: "translateX(20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideRight: {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        bounce: {
          "0%, 100%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "none",
            animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
          },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
        "slide-left": "slideLeft 0.5s ease-out",
        "slide-right": "slideRight 0.5s ease-out",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        bounce: "bounce 1s infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "inner-lg": "inset 0 2px 4px 0 rgb(0 0 0 / 0.1)",
        glow: "0 0 20px rgb(59 130 246 / 0.3)",
        "glow-lg": "0 0 40px rgb(59 130 246 / 0.3)",
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "3/2": "3 / 2",
        "2/3": "2 / 3",
        "9/16": "9 / 16",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
