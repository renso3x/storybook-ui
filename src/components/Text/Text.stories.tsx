import { Meta, StoryObj } from "@storybook/react";
import Text from "./Text";

const meta = {
  title: "component/Text",
  component: Text,
  args: {},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof Text>;

export const Heading: Story = {
  args: {
    variant: "h1",
    type: "heading",
    children: "Heading",
  },
};

export const Body: Story = {
  args: {
    type: "body",
    children: "Body",
    sx: {
      fontStyle: "italic",
    },
  },
};

export const Label: Story = {
  args: {
    type: "label",
    children: "Label",
  },
};
