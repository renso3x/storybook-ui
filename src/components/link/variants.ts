import { styled } from "@mui/material/styles";
import { Link } from "@mui/material";
import { colors } from "../../themes/colors";

export const StyledLink = styled(Link)(() => ({
  "--primary": colors.midTeal[700],
  color: "var(--primary)",
  fontWeight: "bold",
  textTransform: "none",
  textDecoration: "underline",
}));
