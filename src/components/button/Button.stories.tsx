import { Meta, StoryObj } from "@storybook/react";
import Button from "./button";
import { expect, within } from "@storybook/test";
import { sharedTheme } from "../../themes/theme";

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
    onClick: () => console.log("Clicked"),
  },
  argTypes: {
    children: {},
    onClick: { action: "clicked" },
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const btn = canvas.getByRole("button", { name: "Primary" });

    expect(btn).toBeDefined();
    // userEvent.type(btn, "{enter}");
  },
};

export const Medium: Story = {
  args: {
    variant: "contained",
    size: "medium",
    children: "Medium",
  },
};

export const Small: Story = {
  args: {
    variant: "contained",
    size: "small",
    children: "small",
  },
};

export const CustomButton = {
  args: {
    variant: "outlined",
    size: "medium",
    children: "Custom Button",
    sx: {
      backgroundColor: `${sharedTheme.palette.common.white} !important`,
      border: `1px solid ${sharedTheme.palette.teal.main} !important`,
      color: `${sharedTheme.palette.monochrome.main} !important`,
    },
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    size: "medium",
    children: "Medium ",
  },
  argTypes: {},
};

export const Text: Story = {
  args: {
    variant: "text",
    children: "Button",
    href: "http://google.com",
  },
  argTypes: {
    children: {},
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const btn = canvas.getByRole("link", { name: "Button" });

    expect(btn).toHaveAttribute("href", "http://google.com");
  },
};

export const DisabledContained: Story = {
  args: {
    disabled: true,
    variant: "contained",
    children: "Disabled",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const btn = canvas.getByRole("button", { name: "Disabled" });

    await expect(btn).not.toBeEnabled();
  },
};

export const DisabledOutline: Story = {
  args: {
    disabled: true,
    variant: "outlined",
    children: "Disabled",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const btn = canvas.getByRole("button", { name: "Disabled" });

    await expect(btn).not.toBeEnabled();
  },
};

export const DisabledText: Story = {
  args: {
    disabled: true,
    variant: "text",
    children: "Disabled",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const btn = canvas.getByRole("button", { name: "Disabled" });

    await expect(btn).not.toBeEnabled();
  },
};
