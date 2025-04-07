import { Chip, styled, SxProps, Theme } from "@mui/material";
import { ComponentProps } from "react";

export type TagProps = ComponentProps<typeof Chip> & {
  sx: SxProps<Theme>;
};

export const StyledChip = styled(Chip)(({ theme }) => ({
  backgroundColor: "transparent",
  "--primary": theme.palette.lightTeal[400],
  border: `1px solid var(--primary)`,
  color: "var(--primary)",
  borderRadius: 4,
}));
