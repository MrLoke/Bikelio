import { FloatingInputAnimated } from "@/components/ui/FloatingInputAnimated";
import { Ionicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { Button, H2, SizableText, Text, View, XStack, YStack } from "tamagui";

const LoginScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // FIXIT: move this to tamagui config
  const bgColor = "#0d130d";
  const accentColor = "#A3E635";

  return (
    <View f={1} bg={bgColor}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          {/* ------ HEADER ------ */}
          <YStack p="$5" pt="$12" gap="$2">
            <Button
              icon={<Ionicons name="arrow-back" size={24} color="white" />}
              circular
              bg="rgba(255,255,255,0.05)"
              onPress={() => router.back()}
              als="flex-start"
              mb="$4"
              pressStyle={{ bg: "rgba(255, 255, 255, 0.2)" }}
            />
            <H2 col="white" fow="bold">
              Hello again,{"\n"}
              <Text col={accentColor}>we missed you!</Text>
            </H2>
            <SizableText col="white" opacity={0.5} size="$4">
              Log in using the methods below.
            </SizableText>
          </YStack>

          {/* ------ SOCIAL BUTTONS ------ */}
          <YStack px="$5" gap="$4" mt="$4">
            <XStack gap="$3">
              <Button
                f={1}
                icon={<AntDesign name="google" size={24} color="black" />}
                bg="white"
                br="$10"
              />
              <Button
                f={1}
                icon={<AntDesign name="apple" size={24} color="black" />}
                bg="#fff"
                br="$10"
              />
              <Button
                f={1}
                icon={<MaterialIcons name="facebook" size={24} color="black" />}
                bg="#fff"
                br="$10"
              />
            </XStack>

            <XStack ai="center" gap="$4" py="$2">
              <View f={1} h={1} bg="white" opacity={0.1} />
              <SizableText size="$2" col="white" opacity={0.5}>
                OR LOGIN WITH EMAIL
              </SizableText>
              <View f={1} h={1} bg="white" opacity={0.1} />
            </XStack>
          </YStack>

          {/* ------ FORM ------ */}
          <YStack px="$5" gap="$4" mt="$2">
            <YStack>
              <FloatingInputAnimated
                label="E-mail address"
                fontSize="$5"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                icon={<Ionicons name="mail" size={20} color="black" />}
              />
            </YStack>

            <YStack>
              <FloatingInputAnimated
                label="Password"
                fontSize="$5"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                icon={<MaterialIcons name="lock" size={24} color="black" />}
              />
            </YStack>

            <Button
              p={0}
              bg="transparent"
              borderWidth={0}
              pressStyle={{ opacity: 0.5, bg: "transparent" }}
              als="flex-end"
            >
              <Text col={accentColor} gap="$2" opacity={0.8}>
                Forgot your password?
              </Text>
            </Button>

            <Button
              bg={accentColor}
              size="$6"
              br="$10"
              onPress={() => console.log("Logowanie...")}
              w="100%"
            >
              <Button.Text
                fontWeight="bold"
                textTransform="uppercase"
                color={bgColor}
                textAlign="center"
              >
                Sign In
              </Button.Text>
            </Button>
          </YStack>

          {/* ------ STOPKA ------ */}
          <XStack jc="center" p="$6" ai="center" gap="$2">
            <Text col="white" opacity={0.6}>
              Don&apos;t have an account?
            </Text>
            <Button
              p={0}
              bg="transparent"
              borderWidth={0}
              pressStyle={{ opacity: 0.5, bg: "transparent" }}
              onPress={() => router.push("/(auth)/register")}
            >
              <Text col={accentColor} fow="bold">
                Create account
              </Text>
            </Button>
          </XStack>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;
