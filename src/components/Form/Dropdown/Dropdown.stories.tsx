import { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "component/Dropdown",
  component: Dropdown,
  argTypes: {
    formLabel: { type: "string" },
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  render: () => {
    return (
      <Dropdown
        value={"10"}
        onChange={(value) => console.log(value)}
        formLabel="Title"
        items={["10", "20", "30"]}
      />
    );
  },
};

export const ErrorDropDown: Story = {
  render: () => {
    return (
      <Dropdown
        value={"30"}
        onChange={(value) => console.log(value)}
        formLabel="Title"
        error={true}
        items={["10", "20", "30"]}
      />
    );
  },
};
