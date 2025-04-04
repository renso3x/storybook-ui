import { Meta, StoryObj } from "@storybook/react";
import Tag from "./Tag";
import Icon from "../Icon/Icon";
import { colors } from "../../themes/colors";

const meta = {
  title: "component/Tag",
  component: Tag,
  args: {},
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    label: "My Tag",
  },
};

export const TagIcon: Story = {
  args: {
    label: "Add Vehicle",
    icon: (
      <div style={{ marginLeft: 5 }}>
        <Icon name="AddVehicle" fill={colors.lightTeal[400]} />
      </div>
    ),
    onClick: () => {
      console.log("Tag clicked");
    },
  },
};
