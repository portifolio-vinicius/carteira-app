export const colors = {
  primary: "#7C3AED",
  secondary: "#03dac6",
  danger: "#B00020",
  white: "#fff",
  textPrimary: "#1C1C1C",
  textMuted: "#616161",
  textSubtle: "#757575",
  textPlaceholder: "#9E9E9E",
  textLabel: "#424242",
  textDisabled: "#B0BEC5",
  border: "#E0E0E0",
  background: "#F5F5F5",
  surface: "#fff",
  errorRed: "#F44336",
  errorRedDark: "#B71C1C",
  errorRedBg: "#FFEBEE",
  successGreen: "#4CAF50",
  successGreenBg: "#E8F5E9",
  warningOrange: "#FF9800",
  infoBlue: "#1976D2",
  infoBlueDark: "#0D47A1",
  infoBlueBg: "#E3F2FD",
  primaryLight: "#EDE7F6",
  primarySwitch: "#BB86FC",
  gray50: "#F8FAFC",
  gray100: "#F1F5F9",
  gray200: "#E2E8F0",
  gray600: "#475569",
} as const;

export const spacing = {
  xs: 4,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
} as const;

export const typography = {
  sizeXs: 12,
  sizeSm: 13,
  sizeMd: 14,
  size15: 15,
  sizeLg: 18,
  sizeXl: 24,
  sizeXxl: 26,
  weight500: "500" as const,
  weight600: "600" as const,
  weight700: "700" as const,
  weightBold: "bold" as const,
} as const;

export const radius = {
  sm: 5,
  md: 8,
  lg: 10,
  xl: 16,
  xxl: 24,
  full: 40,
} as const;

export const shadows = {
  sm: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  md: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 6,
  },
} as const;

export type GradientVariant = "growth" | "wealth" | "trust";

export const gradients = {
  growth: {
    colors: ["#00B66E", "#00D4AA", "#00F5E6"],
    locations: [0, 0.5, 1],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
  },
  wealth: {
    colors: ["#D4AF37", "#F4C400", "#FFE246"],
    locations: [0, 0.5, 1],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
  },
  trust: {
    colors: ["#1E3A8A", "#3B82F6", "#60A5FA"],
    locations: [0, 0.5, 1],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
  },
} as const;
