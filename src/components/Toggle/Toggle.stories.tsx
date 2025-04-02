import { Meta, StoryObj } from "@storybook/react";
import Toggle from "./Toggle";

const meta = {
  title: "component/Toggle",
  component: Toggle,
  args: {},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = { args: {} };
