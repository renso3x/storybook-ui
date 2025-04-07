import { ComponentProps } from "react";
import MuiCheckbox from "@mui/material/Checkbox";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

export type ToolTipPlacements = TooltipProps["placement"];

export type CheckboxProps = ComponentProps<typeof MuiCheckbox> & {
  tooltip?: boolean;
  label?: string;
  title?: string;
  tooltipPlacement?: ToolTipPlacements;
};

export const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} arrow />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.darkTeal[1000],
    color: "#fff",
    fontSize: "16px",
    padding: theme.spacing(1, 2),
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.darkTeal[1000],
  },
}));
