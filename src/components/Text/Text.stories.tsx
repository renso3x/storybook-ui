import { Meta, StoryObj } from "@storybook/react";
import Text from "./Text";

const meta = {
  title: "component/Text",
  component: Text,
  args: {},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof Text>;

export const h1: Story = {
  args: {
    variant: "h1",
    children: "Heading1",
  },
};

export const h2: Story = {
  args: {
    variant: "h2",
    children: "Heading2",
  },
};

export const h3: Story = {
  args: {
    variant: "h3",
    children: "Heading3",
  },
};

export const body: Story = {
  args: {
    variant: "body1",
    fontWeight: "bold",
    children: "body",
  },
};

export const SubTitle1: Story = {
  args: {
    variant: "subtitle1",
    children: "subtitle1",
  },
};

export const SubTitle2: Story = {
  args: {
    variant: "subtitle2",
    children: "subtitle2",
  },
};
