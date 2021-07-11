import { ButtonTheme, variants } from "./types";
import { lightColors, darkColors } from "../../theme/colors";

const { PRIMARY, SECONDARY, TERTIARY, TEXT, DANGER, SUBTLE, SUCCESS, WHITEBLUE, YELLOWBLUE, TRANSPARENT } = variants;

export const light: ButtonTheme = {
  [PRIMARY]: {
    background: lightColors.primary,
    backgroundActive: lightColors.primaryDark,
    backgroundHover: "#fff",
    border: 0,
    borderColorHover: "#06c",
    boxShadow: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
    boxShadowActive: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
    color: "#FFFFFF",
  },
  [SECONDARY]: {
    background: "transparent",
    backgroundActive: "transparent",
    backgroundHover: "transparent",
    border: `2px solid ${lightColors.primary}`,
    borderColorHover: lightColors.primaryBright,
    boxShadow: "none",
    boxShadowActive: "none",
    color: lightColors.primary,
  },
  [TERTIARY]: {
    background: lightColors.tertiary,
    backgroundActive: lightColors.tertiary,
    backgroundHover: lightColors.tertiary,
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "none",
    boxShadowActive: "none",
    color: lightColors.primary,
  },
  [TEXT]: {
    background: "transparent",
    backgroundActive: "transparent",
    backgroundHover: lightColors.tertiary,
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "none",
    boxShadowActive: "none",
    color: lightColors.primary,
  },
  [DANGER]: {
    background: lightColors.failure,
    backgroundActive: "#D43285", // darkten 10%
    backgroundHover: "#FF65B8", // lighten 10%
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "none",
    boxShadowActive: "none",
    color: "#FFFFFF",
  },
  [SUBTLE]: {
    background: lightColors.secondary, // #fcfcfc
    backgroundActive: lightColors.tertiary,
    backgroundHover: lightColors.darkyellow,
    border: "2px solid #fff",
    borderColorHover: "currentColor",
    boxShadow: "none",
    boxShadowActive: "none",
    color: lightColors.primary,
  },
  [SUCCESS]: {
    background: lightColors.success,
    backgroundActive: `${lightColors.success}D9`, // 70% opacity
    backgroundHover: `${lightColors.success}B3`, // 85% opacity
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "none",
    boxShadowActive: "none",
    color: "#FFFFFF",
  },
  [WHITEBLUE]: {
    background: lightColors.tertiary, // #fcfcfc
    backgroundActive: lightColors.tertiary,
    backgroundHover: "#ddd",
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "none",
    boxShadowActive: "none",
    color: lightColors.primary,
  },
  [YELLOWBLUE]: {
    background: lightColors.secondary, // #fcfcfc
    backgroundActive: lightColors.tertiary,
    backgroundHover: lightColors.darkyellow,
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "none",
    boxShadowActive: "none",
    color: lightColors.primary,
  },
  [TRANSPARENT]: {
    background: "transparent", // #fcfcfc
    backgroundActive: "transparent",
    backgroundHover: "transparent",
    border: 0,
    borderColorHover: "transparent",
    boxShadow: "none",
    boxShadowActive: "none",
    color: "#06C",
  },
};

export const dark: ButtonTheme = {
  [PRIMARY]: {
    ...light.primary,
  },
  [SECONDARY]: {
    ...light.secondary,
  },
  [TERTIARY]: {
    ...light.tertiary,
    background: darkColors.tertiary,
    backgroundActive: darkColors.tertiary,
    backgroundHover: darkColors.tertiary,
    color: darkColors.primary,
  },
  [TEXT]: {
    ...light.text,
    backgroundHover: darkColors.tertiary,
  },
  [DANGER]: {
    ...light.danger,
  },
  [SUBTLE]: {
    ...light.subtle,
  },
  [SUCCESS]: {
    ...light.success,
  },
  [WHITEBLUE]: {
    background: lightColors.tertiary, // #fcfcfc
    backgroundActive: lightColors.tertiary,
    backgroundHover: lightColors.darkblue,
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "none",
    boxShadowActive: "none",
    color: lightColors.primary,
  },
  [YELLOWBLUE]: {
    background: lightColors.secondary, // #fcfcfc
    backgroundActive: lightColors.tertiary,
    backgroundHover: lightColors.darkyellow,
    border: 0,
    borderColorHover: "currentColor",
    boxShadow: "none",
    boxShadowActive: "none",
    color: lightColors.primary,
  },
  [TRANSPARENT]: {
    background: "transparent", // #fcfcfc
    backgroundActive: "transparent",
    backgroundHover: "transparent",
    border: 0,
    borderColorHover: "transparent",
    boxShadow: "none",
    boxShadowActive: "none",
    color: "#06C",
  },
};
