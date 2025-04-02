import { Meta, StoryObj } from "@storybook/react";
import Icon from "./Icon";
import { IconsMap, IconName } from "./type";

export default {
  title: "component/Icons",
  component: Icon,
  argTypes: {
    name: {
      control: {
        type: "select",
        options: Object.keys(IconsMap) as IconName[],
      },
    },
    width: {
      control: { type: "number", min: 16, max: 100 },
      defaultValue: 32,
    },
    height: {
      control: { type: "number", min: 16, max: 100 },
      defaultValue: 32,
    },
  },
} as Meta<typeof Icon>;

const Template = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
      {Object.keys(IconsMap).map((iconName) => (
        <div key={iconName} style={{ textAlign: "center" }}>
          <Icon
            name={iconName as IconName}
            width={40}
            height={40}
            fill="black"
          />
          <p style={{ fontSize: "12px", marginTop: "4px" }}>{iconName}</p>
        </div>
      ))}
    </div>
  );
};

export const AllIcons = Template.bind({});
