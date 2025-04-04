import { Chip, styled } from "@mui/material";

export const StyledChip = styled(Chip)(({ theme }) => ({
  backgroundColor: "transparent",
  "--primary": theme.palette.lightTeal[400],
  border: `1px solid var(--primary)`,
  color: "var(--primary)",
  borderRadius: 4,
}));
