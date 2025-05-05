import { Meta, StoryObj } from "@storybook/react";
import TextInput from "./TextInput";
import { InputAdornment } from "@mui/material";
import Icon from "../../Icon/Icon";

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

export const WithAdornment: Story = {
  args: {
    formLabel: "Search",
    control: { name: "search" },
    startAdornment: (
      <InputAdornment position="start">
        <Icon name="Search" />
      </InputAdornment>
    ),
  },
};
