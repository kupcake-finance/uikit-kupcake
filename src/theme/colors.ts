import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#000",
  primaryBright: "#06c",
  primaryDark: "#06c",
  secondary: "#b08540",
  success: "#00c7c6",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#fff",
  backgroundDisabled: "#13253e",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#fff",
  text: "#FCFCFC",
  textDisabled: "#505e71",
  textSubtle: "#06c",
  borderColor: "#2f415b",
  card: "#f2f2f2",
  menu: "#333333",
  darkblue: "#003d8c",
  darkyellow: "#0e0e0e",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#524B63",
  darkblue: "#003d8c",
  darkyellow: "#0e0e0e",
  card: "#fff",
  menu: "#333333",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
