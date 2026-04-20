import { createAnimations } from "@tamagui/animations-react-native";
import { config } from "@tamagui/config/v3";
import { createTamagui, createTokens } from "tamagui";

const tokens = createTokens({
  ...config.tokens,
  color: {
    ...config.tokens.color,
    primary: "#22c55e",
    primaryDark: "#15803d",
    secondary: "#0ea5e9",
    background: "#041b0f",
    text: "#ffffff",
    gray: "#9ca3af",
  },
});

const themes = {
  ...config.themes,
  customLight: {
    ...config.themes.light,
    background: "#ffffff",
    color: "#000000",
    primary: "#22c55e",
  },
  customDark: {
    ...config.themes.dark,
    background: "#041b0f",
    color: "#ffffff",
    primary: "#22c55e",
  },
};

const animations = createAnimations({
  quick: {
    type: "spring",
    damping: 20,
    mass: 1.2,
    stiffness: 250,
  },
  bouncy: {
    type: "spring",
    damping: 10,
    mass: 0.9,
    stiffness: 100,
  },
  lazy: {
    type: "spring",
    damping: 20,
    stiffness: 60,
  },
});

const tamaguiConfig = createTamagui({
  ...config,
  tokens,
  themes,
  animations,
});

type Conf = typeof tamaguiConfig;
declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}

export default tamaguiConfig;
