import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { YStack, styled } from "tamagui";

const InnerContainer = styled(YStack, {
  flex: 1,
  padding: "$4",
});

export const KeyboardSafeView = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // FIXIT: remove the comments, its for development
  return (
    <KeyboardAvoidingView
      // KEY: On Android, 'header' or 'padding' often works better with Expo
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      // On Android we add an offset if you have a navigation/status bar
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <ScrollView
        // flexGrow: 1 allows content to fill the screen but also scroll
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        // We turn off bounces on Android to keep the view stable
        bounces={Platform.OS === "ios"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <InnerContainer>{children}</InnerContainer>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
