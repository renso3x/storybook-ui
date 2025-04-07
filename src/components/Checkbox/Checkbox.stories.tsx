import { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./Checkbox";

export default {
  title: "component/Checkbox",
  component: Checkbox,
  argTypes: {
    title: {
      control: {
        type: "text",
      },
      description: "Tooltip title",
    },
    label: {
      control: {
        type: "text",
      },
      description: "Checkbox label",
    },
    tooltipPlacement: {
      control: {
        type: "select",
        options: [
          "bottom-end",
          "bottom-start",
          "bottom",
          "left-end",
          "left-start",
          "left",
          "right-end",
          "right-start",
          "right",
          "top-end",
          "top-start",
          "top",
        ],
      },
      description: "tooltip placement",
    },
  },
} as Meta;

type Story = StoryObj<typeof Checkbox>;

export const Primary: Story = {
  args: {
    title: "Mark as done",
    label: "Done",
    tooltipPlacement: "top-start",
  },
};
