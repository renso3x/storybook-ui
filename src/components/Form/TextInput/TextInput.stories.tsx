import { Meta, StoryObj } from "@storybook/react";
import TextInput from "./TextInput";

const meta = {
  title: "component/TextInput",
  component: TextInput,
  argTypes: {
    formLabel: {
      type: "string",
    },
    disabled: {
      type: "boolean",
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    formLabel: "Title *",
  },
};

export const DisabledText: Story = {
  args: {
    formLabel: "Title *",
    disabled: true,
  },
};

export const ErrorTextField: Story = {
  args: {
    formLabel: "Title *",
    error: {
      name: "Error",
      message: "Please enter title",
    },
  },
};
