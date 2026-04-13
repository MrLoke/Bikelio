import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Dimensions, Image, StyleSheet } from "react-native";
import { Button, H1, Text, View, YStack } from "tamagui";

const { height } = Dimensions.get("window");

const HeroScreen = () => {
  const router = useRouter();
  const bgColor = "#0d130d";

  return (
    <View f={1} bg={bgColor}>
      {/* PHOTO */}
      <View h={height * 0.7} w="100%" pos="absolute" t={0}>
        <Image
          source={require("@/assets/images/hero-image.webp")}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        />

        {/* GRADIENT (trick - blending a photo into the background) */}
        <LinearGradient
          // Transition from full transparency to the app's background color
          colors={["transparent", "rgba(20, 34, 20, 0.29)", bgColor]}
          locations={[0, 0.7, 1]} // Where exactly should the dimming begin
          style={StyleSheet.absoluteFill}
        />
      </View>

      {/* CONTENT - Placed on top, at the bottom of the screen */}
      <YStack f={1} jc="flex-end" p="$6" pb="$12" gap="$5">
        <YStack gap="$2">
          <H1 color="white" size="$11" lh={60}>
            Twoja jazda,{"\n"}
            <Text color="#A3E635">Twoje zasady.</Text>
          </H1>
          <Text color="white" opacity={0.6} fontSize="$5" lh={20}>
            Monitoruj statystyki, odkrywaj trasy i wykonuj swoje codzienne cele.
          </Text>
        </YStack>

        <Button
          bg="#A3E635"
          size="$6"
          br="$10"
          onPress={() => router.push("/(auth)/login")}
        >
          <Text fow="bold" col={bgColor}>
            ZACZNIJ TERAZ
          </Text>
        </Button>
      </YStack>
    </View>
  );
};

export default HeroScreen;
