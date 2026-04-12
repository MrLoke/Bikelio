import type { CheckboxProps } from "tamagui";
import { Checkbox, Label, Theme, XStack } from "tamagui";

export const CheckboxWithLabel = ({
  size,
  icon,
  label,
  disabled,
  checked,
  ...checkboxProps
}: CheckboxProps & {
  icon: React.ReactNode;
  label?: string;
  checked?: boolean;
}) => {
  const id = `checkbox-${(size || "").toString().slice(1)}`;
  const accentColor = "#A3E635";
  console.log("checked", checked);

  return (
    <Theme name={disabled ? "gray" : null}>
      <XStack width={300} alignItems="center" gap="$4">
        <Checkbox
          id={id}
          size={size}
          borderColor={checked ? accentColor : "transparent"}
          bw={2}
          disabled={disabled}
          {...checkboxProps}
        >
          <Checkbox.Indicator>{icon}</Checkbox.Indicator>
        </Checkbox>

        <Label
          size={size}
          col="white"
          lh={30}
          htmlFor={id}
          pressStyle={{ color: "rgba(224, 220, 220, 0.84)" }}
          opacity={disabled ? 0.5 : 1}
        >
          {label}
        </Label>
      </XStack>
    </Theme>
  );
};
