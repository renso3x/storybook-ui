import { Meta, StoryObj } from "@storybook/react";
import Switch from "./Switch";

const meta = {
  title: "component/Switch",
  component: Switch,
  argTypes: {
    checked: { control: "boolean" },
    onChange: { action: "changed" },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof Switch>;

export const Toggle: Story = {
  args: {
    label: "Toggle",
    checked: false,
  },
};
