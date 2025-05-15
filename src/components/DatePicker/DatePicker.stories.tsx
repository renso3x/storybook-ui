import { Meta, StoryObj } from "@storybook/react";
import DatePicker from "./DatePicker";

export default {
  title: "component/DatePicker",
  component: DatePicker,
  argTypes: {},
} as Meta;

type Story = StoryObj<typeof DatePicker>;

export const Primary: Story = {};
