import { Meta, StoryObj } from "@storybook/react";
import Switch from "./Switch";

const meta = {
  title: "component/Switch",
  component: Switch,
  argTypes: {
    label: { control: { type: "text" } },
    checked: { control: "boolean" },
    onChange: { action: "toggled" },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof Text>;

export const DefaultOn: Story = {
  args: {
    label: "switcher",
    checked: true,
  },
};

export const DefaultOff: Story = {
  args: {
    label: "lights",
    checked: false,
  },
};
