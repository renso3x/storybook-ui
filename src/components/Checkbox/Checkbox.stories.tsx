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
    checkboxSx: {
      control: {
        type: "object",
      },
      description: "Checkbox styles",
    },
    tooltipSx: {
      control: {
        type: "object",
      },
      description: "Tooltip styles",
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

export const CustomTooltip: Story = {
  args: {
    title: "Custom Tooltip",
    label: "Custom",
    tooltipPlacement: "top-start",
    checkboxSx: {
      "&.Mui-checked": {
        color: "blue",
      },
    },
    tooltipSx: {
      "& .MuiTooltip-tooltip": {
        backgroundColor: "blue",
        color: "white",
        fontSize: "16px",
        padding: "10px",
        borderRadius: "8px",
      },
      "& .MuiTooltip-arrow": {
        color: "blue",
      },
    },
  },
};
