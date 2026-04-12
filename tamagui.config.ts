import { createAnimations } from "@tamagui/animations-react-native";
import { config } from "@tamagui/config/v3";
import { createTamagui } from "tamagui";

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
  animations,
});

type Conf = typeof tamaguiConfig;
declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}

export default tamaguiConfig;
