import type { ComponentProps, ReactNode } from "react";
import React, { useEffect, useRef, useState } from "react";
import { Animated } from "react-native";
import { Input, Label, XStack, YStack } from "tamagui";

type FloatingInputAnimatedProps = ComponentProps<typeof Input> & {
  label: string;
  icon?: ReactNode;
};

export const FloatingInputAnimated = ({
  label,
  icon,
  value,
  onChangeText,
  ...props
}: FloatingInputAnimatedProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const progress = useRef(new Animated.Value(0)).current;
  const hasValue =
    typeof value === "number"
      ? true
      : typeof value === "string" || Array.isArray(value)
        ? value.length > 0
        : false;
  const isActive = isFocused || hasValue;
  const accentColor = "#A3E635";

  useEffect(() => {
    Animated.spring(progress, {
      toValue: isActive ? 1 : 0,
      damping: 20,
      mass: 1.2,
      stiffness: 250,
      useNativeDriver: true,
    }).start();
  }, [isActive, progress]);

  const labelTranslateX = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [25, 0],
  });

  const labelTranslateY = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -45],
  });

  const labelScale = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.9],
  });

  return (
    <YStack mt="$4" pos="relative">
      <XStack
        ai="center"
        px="$2.5"
        bg="rgb(255, 255, 255)"
        br="$10"
        bw={2}
        bc={isFocused ? accentColor : "rgba(255, 255, 255, 0.1)"}
        h={60}
      >
        <XStack mr="$2" jc="center">
          {icon}
        </XStack>

        <Animated.View
          pointerEvents="none"
          style={{
            position: "absolute",
            left: 15,
            transform: [
              { translateX: labelTranslateX },
              { translateY: labelTranslateY },
              { scale: labelScale },
            ],
          }}
        >
          <Label
            col={isActive ? accentColor : "#111"}
            fow={isActive ? "700" : undefined}
          >
            {label}
          </Label>
        </Animated.View>

        <Input
          f={1}
          value={value}
          onChangeText={onChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          bg="transparent"
          bw={0}
          h="100%"
          color="#111"
          p={0}
          {...props}
        />
      </XStack>
    </YStack>
  );
};
