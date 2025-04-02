import React from "react";
import { IconsMap, IconName } from "./type";

interface IconProps {
  name: IconName; // Restrict to known icon names
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  width = 24,
  height = 24,
  fill = "black",
  stroke = "black",
}) => {
  if (!name) return null;

  const SelectedIcon = IconsMap[name];

  if (!SelectedIcon) {
    console.error(`Icon "${name}" not found.`);
    return null;
  }

  return (
    <SelectedIcon width={width} height={height} fill={fill} stroke={stroke} />
  );
};

export default Icon;
