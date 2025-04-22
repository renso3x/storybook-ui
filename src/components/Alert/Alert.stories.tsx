import { Meta, StoryObj } from "@storybook/react";

import Alert from "./Alert";
import Icon from "../Icon/Icon";
import { colors } from "../../themes/colors";

const meta: Meta<typeof Alert> = {
  title: "component/Alert",
  component: Alert,
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["filled", "outline"],
    },
    severity: {
      control: {
        type: "select",
      },
      options: ["warning", "error", "info", "success"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Filled: Story = {
  args: {
    variant: "filled",
    severity: "success",
    children: "This is an alert message",
    icon: <Icon name="CheckCircle" fill={colors.green[500]} />,
  },
};

export const Outline: Story = {
  args: {
    variant: "outlined",
    severity: "success",
    icon: false,
    children: "This is an alert message",
  },
};
