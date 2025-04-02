import { Meta, StoryObj } from "@storybook/react";
import ButtonLink from "./Link";
import { expect, within } from "@storybook/test";

const meta = {
  title: "component/Link",
  component: ButtonLink,
  args: {},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof ButtonLink>;

export const Primary: Story = {
  args: {
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
