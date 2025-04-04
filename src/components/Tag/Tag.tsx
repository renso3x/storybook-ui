import { ComponentProps } from "react";
import { Chip } from "@mui/material";
import { StyledChip } from "./variants";

type TagProps = ComponentProps<typeof Chip>;

const Tag = (props: TagProps) => {
  return <StyledChip {...props} />;
};

export default Tag;
