import { createStitches } from "@stitches/react";

import type { ScaleValue } from "@stitches/react";

const stitches = createStitches({
   media: {
      sm: "(min-width: 640px)",
      md: "(min-width: 768px)",
      lg: "(min-width: 1024px)",
      xl: "(min-width: 1280px)",
      "2xl": "(min-width: 1536px)",
      "3xl": "(min-width: 1920px)"
   },
   theme: {
      colors: {
         primary: "#1a73e8",
         accent: "#fbff0d",

         black: "#000",
         white: "#fff",

         slate50: "#f8fafc",
         slate100: "#f1f5f9",
         slate200: "#e2e8f0",
         slate300: "#cbd5e1",
         slate400: "#94a3b8",
         slate500: "#64748b",
         slate600: "#475569",
         slate700: "#334155",
         slate800: "#1e293b",
         slate900: "#0f172a",

         gray50: "#f9fafb",
         gray100: "#f3f4f6",
         gray200: "#e5e7eb",
         gray300: "#d1d5db",
         gray400: "#9ca3af",
         gray500: "#6b7280",
         gray600: "#4b5563",
         gray700: "#374151",
         gray800: "#1f2937",
         gray900: "#111827",

         zinc50: "#fafafa",
         zinc100: "#f4f4f5",
         zinc200: "#e4e4e7",
         zinc300: "#d4d4d8",
         zinc400: "#a1a1aa",
         zinc500: "#71717a",
         zinc600: "#52525b",
         zinc700: "#3f3f46",
         zinc800: "#27272a",
         zinc900: "#18181b",

         neutral50: "#fafafa",
         neutral100: "#f5f5f5",
         neutral200: "#e5e5e5",
         neutral300: "#d4d4d4",
         neutral400: "#a3a3a3",
         neutral500: "#737373",
         neutral600: "#525252",
         neutral700: "#404040",
         neutral800: "#262626",
         neutral900: "#171717",

         stone50: "#fafaf9",
         stone100: "#f5f5f4",
         stone200: "#e7e5e4",
         stone300: "#d6d3d1",
         stone400: "#a8a29e",
         stone500: "#78716c",
         stone600: "#57534e",
         stone700: "#44403c",
         stone800: "#292524",
         stone900: "#1c1917",

         red50: "#fef2f2",
         red100: "#fee2e2",
         red200: "#fecaca",
         red300: "#fca5a5",
         red400: "#f87171",
         red500: "#ef4444",
         red600: "#dc2626",
         red700: "#b91c1c",
         red800: "#991b1b",
         red900: "#7f1d1d",

         orange50: "#fff7ed",
         orange100: "#ffedd5",
         orange200: "#fed7aa",
         orange300: "#fdba74",
         orange400: "#fb923c",
         orange500: "#f97316",
         orange600: "#ea580c",
         orange700: "#c2410c",
         orange800: "#9a3412",
         orange900: "#7c2d12",

         amber50: "#fffbeb",
         amber100: "#fef3c7",
         amber200: "#fde68a",
         amber300: "#fcd34d",
         amber400: "#fbbf24",
         amber500: "#f59e0b",
         amber600: "#d97706",
         amber700: "#b45309",
         amber800: "#92400e",
         amber900: "#78350f",

         yellow50: "#fefce8",
         yellow100: "#fef9c3",
         yellow200: "#fef08a",
         yellow300: "#fde047",
         yellow400: "#facc15",
         yellow500: "#eab308",
         yellow600: "#ca8a04",
         yellow700: "#a16207",
         yellow800: "#854d0e",
         yellow900: "#713f12",

         lime50: "#f7fee7",
         lime100: "#ecfccb",
         lime200: "#d9f99d",
         lime300: "#bef264",
         lime400: "#a3e635",
         lime500: "#84cc16",
         lime600: "#65a30d",
         lime700: "#4d7c0f",
         lime800: "#3f6212",
         lime900: "#365314",

         green50: "#f0fdf4",
         green100: "#dcfce7",
         green200: "#bbf7d0",
         green300: "#86efac",
         green400: "#4ade80",
         green500: "#22c55e",
         green600: "#16a34a",
         green700: "#15803d",
         green800: "#166534",
         green900: "#14532d",

         emerald50: "#ecfdf5",
         emerald100: "#d1fae5",
         emerald200: "#a7f3d0",
         emerald300: "#6ee7b7",
         emerald400: "#34d399",
         emerald500: "#10b981",
         emerald600: "#059669",
         emerald700: "#047857",
         emerald800: "#065f46",
         emerald900: "#064e3b",

         teal50: "#f0fdfa",
         teal100: "#ccfbf1",
         teal200: "#99f6e4",
         teal300: "#5eead4",
         teal400: "#2dd4bf",
         teal500: "#14b8a6",
         teal600: "#0d9488",
         teal700: "#0f766e",
         teal800: "#115e59",
         teal900: "#134e4a",

         cyan50: "#ecfeff",
         cyan100: "#cffafe",
         cyan200: "#a5f3fc",
         cyan300: "#67e8f9",
         cyan400: "#22d3ee",
         cyan500: "#06b6d4",
         cyan600: "#0891b2",
         cyan700: "#0e7490",
         cyan800: "#155e75",
         cyan900: "#164e63",

         sky50: "#f0f9ff",
         sky100: "#e0f2fe",
         sky200: "#bae6fd",
         sky300: "#7dd3fc",
         sky400: "#38bdf8",
         sky500: "#0ea5e9",
         sky600: "#0284c7",
         sky700: "#0369a1",
         sky800: "#075985",
         sky900: "#0c4a6e",

         blue50: "#eff6ff",
         blue100: "#dbeafe",
         blue200: "#bfdbfe",
         blue300: "#93c5fd",
         blue400: "#60a5fa",
         blue500: "#3b82f6",
         blue600: "#2563eb",
         blue700: "#1d4ed8",
         blue800: "#1e40af",
         blue900: "#1e3a8a",

         indigo50: "#eef2ff",
         indigo100: "#e0e7ff",
         indigo200: "#c7d2fe",
         indigo300: "#a5b4fc",
         indigo400: "#818cf8",
         indigo500: "#6366f1",
         indigo600: "#4f46e5",
         indigo700: "#4338ca",
         indigo800: "#3730a3",
         indigo900: "#312e81",

         violet50: "#f5f3ff",
         violet100: "#ede9fe",
         violet200: "#ddd6fe",
         violet300: "#c4b5fd",
         violet400: "#a78bfa",
         violet500: "#8b5cf6",
         violet600: "#7c3aed",
         violet700: "#6d28d9",
         violet800: "#5b21b6",
         violet900: "#4c1d95",

         purple50: "#faf5ff",
         purple100: "#f3e8ff",
         purple200: "#e9d5ff",
         purple300: "#d8b4fe",
         purple400: "#c084fc",
         purple500: "#a855f7",
         purple600: "#9333ea",
         purple700: "#7e22ce",
         purple800: "#6b21a8",
         purple900: "#581c87",

         fuchsia50: "#fdf4ff",
         fuchsia100: "#fae8ff",
         fuchsia200: "#f5d0fe",
         fuchsia300: "#f0abfc",
         fuchsia400: "#e879f9",
         fuchsia500: "#d946ef",
         fuchsia600: "#c026d3",
         fuchsia700: "#a21caf",
         fuchsia800: "#86198f",
         fuchsia900: "#701a75",

         pink50: "#fdf2f8",
         pink100: "#fce7f3",
         pink200: "#fbcfe8",
         pink300: "#f9a8d4",
         pink400: "#f472b6",
         pink500: "#ec4899",
         pink600: "#db2777",
         pink700: "#be185d",
         pink800: "#9d174d",
         pink900: "#831843",

         rose50: "#fff1f2",
         rose100: "#ffe4e6",
         rose200: "#fecdd3",
         rose300: "#fda4af",
         rose400: "#fb7185",
         rose500: "#f43f5e",
         rose600: "#e11d48",
         rose700: "#be123c",
         rose800: "#9f1239",
         rose900: "#881337",

         lightBlue50: "#f0f9ff",
         lightBlue100: "#e0f2fe",
         lightBlue200: "#bae6fd",
         lightBlue300: "#7dd3fc",
         lightBlue400: "#38bdf8",
         lightBlue500: "#0ea5e9",
         lightBlue600: "#0284c7",
         lightBlue700: "#0369a1",
         lightBlue800: "#075985",
         lightBlue900: "#0c4a6e",

         warmGray50: "#fafaf9",
         warmGray100: "#f5f5f4",
         warmGray200: "#e7e5e4",
         warmGray300: "#d6d3d1",
         warmGray400: "#a8a29e",
         warmGray500: "#78716c",
         warmGray600: "#57534e",
         warmGray700: "#44403c",
         warmGray800: "#292524",
         warmGray900: "#1c1917",

         trueGray50: "#fafafa",
         trueGray100: "#f5f5f5",
         trueGray200: "#e5e5e5",
         trueGray300: "#d4d4d4",
         trueGray400: "#a3a3a3",
         trueGray500: "#737373",
         trueGray600: "#525252",
         trueGray700: "#404040",
         trueGray800: "#262626",
         trueGray900: "#171717",

         coolGray50: "#f9fafb",
         coolGray100: "#f3f4f6",
         coolGray200: "#e5e7eb",
         coolGray300: "#d1d5db",
         coolGray400: "#9ca3af",
         coolGray500: "#6b7280",
         coolGray600: "#4b5563",
         coolGray700: "#374151",
         coolGray800: "#1f2937",
         coolGray900: "#111827",

         blueGray50: "#f8fafc",
         blueGray100: "#f1f5f9",
         blueGray200: "#e2e8f0",
         blueGray300: "#cbd5e1",
         blueGray400: "#94a3b8",
         blueGray500: "#64748b",
         blueGray600: "#475569",
         blueGray700: "#334155",
         blueGray800: "#1e293b",
         blueGray900: "#0f172a"
      },
      space: {
         "0": "0px",
         px: "1px",
         "1": "0.25rem",
         "2": "0.5rem",
         "3": "0.75rem",
         "4": "1rem",
         "5": "1.25rem",
         "6": "1.5rem",
         "7": "1.75rem",
         "8": "2rem",
         "9": "2.25rem",
         "10": "2.5rem",
         "11": "2.75rem",
         "12": "3rem",
         "14": "3.5rem",
         "16": "4rem",
         "20": "5rem",
         "24": "6rem",
         "28": "7rem",
         "32": "8rem",
         "36": "9rem",
         "40": "10rem",
         "44": "11rem",
         "48": "12rem",
         "52": "13rem",
         "56": "14rem",
         "60": "15rem",
         "64": "16rem",
         "72": "18rem",
         "80": "20rem",
         "96": "24rem",
         "108": "28rem",
         "116": "32rem",
         "128": "36rem",
         "256": "44rem",
         "512": "60rem",
         "0.5": "0.125rem",
         "1.5": "0.375rem",
         "2.5": "0.625rem",
         "3.5": "0.875rem"
      },
      borderWidths: {
         "0": "0px",
         "1": "0.25rem",
         "2": "0.5rem",
         "3": "0.75rem",
         "4": "1rem",
         "5": "1.25rem",
         "6": "1.5rem",
         "7": "1.75rem",
         "8": "2rem",
         "9": "2.25rem",
         "10": "2.5rem",
         "11": "2.75rem",
         "12": "3rem",
         "14": "3.5rem",
         "16": "4rem",
         "20": "5rem",
         "24": "6rem",
         "28": "7rem",
         "32": "8rem",
         "36": "9rem",
         "40": "10rem",
         "44": "11rem",
         "48": "12rem",
         "52": "13rem",
         "56": "14rem",
         "60": "15rem",
         "64": "16rem",
         "72": "18rem",
         "80": "20rem",
         "96": "24rem",
         "108": "28rem",
         "116": "32rem",
         "128": "36rem",
         "256": "44rem",
         "512": "60rem",
         px: "1px",
         "0.5": "0.125rem",
         "1.5": "0.375rem",
         "2.5": "0.625rem",
         "3.5": "0.875rem"
      },
      radii: {
         none: "0px",
         sm: "0.125rem",
         base: "0.25rem",
         md: "0.375rem",
         lg: "0.5rem",
         xl: "0.75rem",
         "2xl": "1rem",
         "3xl": "1.5rem",
         full: "9999px"
      },
      lineHeights: {
         xs: "1rem",
         sm: "1.25rem",
         base: "1.5rem",
         lg: "1.75rem",
         xl: "1.75rem",
         "2xl": "2rem",
         "3xl": "2.25rem",
         "4xl": "2.5rem",
         "5xl": "1rem",
         "6xl": "1rem",
         "7xl": "1rem",
         "8xl": "1rem",
         "9xl": "1rem"
      },
      fontSizes: {
         xs: "0.75rem",
         sm: "0.875rem",
         base: "1rem",
         lg: "1.125rem",
         xl: "1.25rem",
         "2xl": "1.5rem",
         "3xl": "1.875rem",
         "4xl": "2.25rem",
         "5xl": "3rem",
         "6xl": "3.75rem",
         "7xl": "4.5rem",
         "8xl": "6rem",
         "9xl": "8rem"
      },
      fontWeights: {
         thin: "100",
         extralight: "200",
         light: "300",
         normal: "400",
         medium: "500",
         semibold: "600",
         bold: "700",
         extrabold: "800",
         black: "900"
      },
      fonts: {
         sans: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
         serif: "'Playfair Display', ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
         mono: "'SF Mono', 'JetBrainsMono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
         oswald: "Oswald",
         bebas: "Bebas Neue",
         pacifico: "Pacifico"
      },
      sizes: {
         "0": "0px",
         "1": "0.25rem",
         "2": "0.5rem",
         "3": "0.75rem",
         "4": "1rem",
         "5": "1.25rem",
         "6": "1.5rem",
         "7": "1.75rem",
         "8": "2rem",
         "9": "2.25rem",
         "10": "2.5rem",
         "11": "2.75rem",
         "12": "3rem",
         "14": "3.5rem",
         "16": "4rem",
         "20": "5rem",
         "24": "6rem",
         "28": "7rem",
         "32": "8rem",
         "36": "9rem",
         "40": "10rem",
         "44": "11rem",
         "48": "12rem",
         "52": "13rem",
         "56": "14rem",
         "60": "15rem",
         "64": "16rem",
         "72": "18rem",
         "80": "20rem",
         "96": "24rem",
         "108": "28rem",
         "116": "32rem",
         "128": "36rem",
         "256": "44rem",
         "512": "60rem",
         px: "1px",
         "0.5": "0.125rem",
         "1.5": "0.375rem",
         "2.5": "0.625rem",
         "3.5": "0.875rem"
      }
   },
   utils: {
      backdropBlur: (mix: string) => {
         const [color, opacity, blur] = mix.split(" ");

         return {
            backgroundColor: `rgba(${color}, ${opacity})`,
            backdropFilter: `blur(${blur}px)`
         };
      },
      px: (space: ScaleValue<"space"> | `${number}px`) => ({
         paddingLeft: space,
         paddingRight: space
      }),
      py: (space: ScaleValue<"space"> | `${number}px`) => ({
         paddingTop: space,
         paddingBottom: space
      }),
      mx: (space: ScaleValue<"space"> | `${number}px`) => ({
         marginLeft: space,
         marginRight: space
      }),
      my: (space: ScaleValue<"space"> | `${number}px`) => ({
         marginTop: space,
         marginBottom: space
      }),
      gridCols: (value: number | "none") => ({
         gridTemplateColumns: value === "none" ? "none" : `repeat(${value}, minmax(0, 1fr))`
      }),
      gridColSpan: (value: number | "none") => ({
         gridColumn: value === "none" ? "none" : `span ${value} / span ${value}`
      }),
      gridColStart: (value: number | "none") => ({
         gridColumnStart: value === "none" ? "none" : value
      }),
      gridColEnd: (value: number | "none") => ({
         gridColumnEnd: value === "none" ? "none" : value
      }),
      gridRows: (value: number | "none") => ({
         gridTemplateRows: value === "none" ? "none" : `repeat(${value}, minmax(0, 1fr))`
      }),
      gridRowSpan: (value: number | "none") => ({
         gridRow: value === "none" ? "none" : `span ${value} / span ${value}`
      }),
      gridRowStart: (value: number | "none") => ({
         gridRowStart: value === "none" ? "none" : value
      }),
      gridRowEnd: (value: number | "none") => ({
         gridRowEnd: value === "none" ? "none" : value
      }),
      shadow: (value: "sm" | "md" | "lg" | "xl" | "none") => {
         if (value === "sm") {
            return {
               boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);"
            };
         }

         if (value === "md") {
            return {
               boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);"
            };
         }

         if (value === "lg") {
            return {
               boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);"
            };
         }

         if (value === "xl") {
            return {
               boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);"
            };
         }

         return {
            boxShadow: value
         };
      }
   }
});

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } =
   stitches;
