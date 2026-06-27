import { TextInput } from "react-native-paper";
import { Menu } from "react-native-paper";
import { useState } from "react";
import { Pressable } from "react-native";

export interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownProps {
  label: string;
  value: string;
  options: DropdownOption[];
  onSelect: (value: string) => void;
}

export default function Dropdown({
  label,
  value,
  options,
  onSelect,
}: DropdownProps) {
  const [visible, setVisible] = useState(false);

  const selected =
    options.find((o) => o.value === value)?.label ?? "";

  return (
    <>
      <Menu
        visible={visible}
        onDismiss={() => setVisible(false)}
        anchor={
          <Pressable onPress={() => setVisible(true)}>
            <TextInput
              mode="outlined"
              label={label}
              value={selected}
              editable={false}
              right={
                <TextInput.Icon icon="chevron-down" />
              }
            />
          </Pressable>
        }
      >
        {options.map((item) => (
          <Menu.Item
            key={item.value}
            title={item.label}
            onPress={() => {
              onSelect(item.value);
              setVisible(false);
            }}
          />
        ))}
      </Menu>
    </>
  );
}