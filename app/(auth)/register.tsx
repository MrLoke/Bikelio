import { CheckboxWithLabel } from "@/components/ui/CheckboxWithLabel";
import { FloatingInputAnimated } from "@/components/ui/FloatingInputAnimated";
import { Ionicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { Button, H2, SizableText, Text, View, XStack, YStack } from "tamagui";

const RegisterScreen = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkedTerms, setCheckedTerms] = useState(false);

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
          <YStack p="$5" pt="$12" gap="$4">
            <Button
              icon={<Ionicons name="arrow-back" size={24} color="white" />}
              circular
              bg="rgba(255,255,255,0.05)"
              onPress={() => router.back()}
              als="flex-start"
              pressStyle={{ bg: "rgba(255, 255, 255, 0.2)" }}
            />
            <H2 col="white" fow="bold" mt="$2">
              Create an account and{"\n"}
              <Text col={accentColor}>start your adventure!</Text>
            </H2>
            <SizableText col="white" opacity={0.5} size="$4">
              Register account using the methods below.
            </SizableText>
          </YStack>

          {/* ------ SOCIAL BUTTONS ------ */}
          <YStack px="$5" gap="$4">
            <XStack gap="$3" jc="center">
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

            <XStack ai="center" gap="$4" py="$4">
              <View f={1} h={1} bg="white" opacity={0.1} />
              <SizableText size="$2" col="white" opacity={0.5}>
                OR REGISTER WITH EMAIL
              </SizableText>
              <View f={1} h={1} bg="white" opacity={0.1} />
            </XStack>
          </YStack>

          {/* ------ FORM ------ */}
          <YStack px="$5" gap="$4">
            <YStack>
              <FloatingInputAnimated
                label="Username"
                fontSize="$5"
                value={username}
                onChangeText={setUsername}
                keyboardType="default"
                icon={<MaterialIcons name="person" size={24} color="black" />}
              />
            </YStack>

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

            <YStack gap="$2">
              <CheckboxWithLabel
                size="$4"
                icon={<AntDesign name="check" size={14} color="black" />}
                label="Accept terms and conditions"
                checked={checkedTerms}
                onCheckedChange={() => setCheckedTerms(!checkedTerms)}
                // pressStyle={{ opacity: 0.5, bg: "transparent" }}
              />
              <Text col="white" ml={40} opacity={0.8}>
                Read more about our{" "}
                <Text
                  col={accentColor}
                  textDecorationLine="underline"
                  fow="bold"
                >
                  Terms of Service
                </Text>{" "}
                and{" "}
                <Text
                  col={accentColor}
                  textDecorationLine="underline"
                  fow="bold"
                >
                  Privacy Policy.
                </Text>
              </Text>
            </YStack>

            <Button
              bg={accentColor}
              size="$6"
              br="$10"
              mt="$4"
              w="100%"
              onPress={() => {
                console.log("supabase");
              }}
            >
              <Button.Text
                color={bgColor}
                fontWeight="bold"
                textTransform="uppercase"
                textAlign="center"
              >
                Create an account
              </Button.Text>
            </Button>
          </YStack>

          {/* ------ FOOTER ------ */}
          <XStack jc="center" p="$6" ai="center" gap="$2">
            <Text col="white" opacity={0.6}>
              Already have an account?
            </Text>
            <Button
              p={0}
              bg="transparent"
              borderWidth={0}
              pressStyle={{ opacity: 0.5, bg: "transparent" }}
              onPress={() => router.push("/(auth)/login")}
            >
              <Text col={accentColor} fow="bold">
                Sign in
              </Text>
            </Button>
          </XStack>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default RegisterScreen;
