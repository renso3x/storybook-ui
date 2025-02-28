import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "component/Button",
  component: Button,
  args: {},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "contained",
    children: "Primary",
  },
  argTypes: {
    children: {},
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    children: "Outlined",
  },
  argTypes: {},
};

export const Text: Story = {
  args: {
    variant: "text",
    children: "Text",
  },
  argTypes: {},
};
