import { Meta, StoryObj } from "@storybook/react";
import Radio from "./Radio";

const meta = {
  title: "Component/Radio",
  component: Radio,
  argTypes: {
    label: {
      control: "text",
    },
    value: {
      control: "text",
    },
    checked: {
      control: "boolean",
    },
  },
} as Meta<typeof Radio>;
type Story = StoryObj<typeof meta>;
export default meta;

export const Primary: Story = {
  args: {
    label: "Primary",
    value: "primary",
    checked: false,
  },
};
