/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Counter from "./Counter";

const meta: Meta<typeof Counter> = {
  title: "Component/Counter",
  component: Counter,
  argTypes: {
    count: {
      type: "number",
    },
    onChange: {
      type: "function",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Counter>;

export const Primary: Story = {
  render: () => {
    const [count, setCount] = useState(1);

    return <Counter count={count} onChange={setCount} />;
  },
};
