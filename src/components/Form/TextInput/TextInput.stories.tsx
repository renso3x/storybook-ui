import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
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
  render: () => {
    return <TextInput formLabel="Title*" error />;
  },
};

export const InputIcon: Story = {
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

export const InputGroup: Story = {
  args: {
    formLabel: "Rate",
    endAdornment: (
      <InputAdornment
        position="end"
        sx={{
          backgroundColor: "#f5f5f5",
          padding: "20px 12px",
          borderLeft: `1px solid #C6C6C6`,
        }}
      >
        $ / hour
      </InputAdornment>
    ),
  },
};

export const IconEndGroup: Story = {
  args: {
    formLabel: "Rate",
    endAdornment: (
      <InputAdornment
        position="end"
        sx={{
          padding: "20px 12px",
          borderLeft: `1px solid #C6C6C6`,
        }}
      >
        <CalendarMonthIcon />
      </InputAdornment>
    ),
  },
};
