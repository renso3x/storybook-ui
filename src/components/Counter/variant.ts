import { styled } from "@mui/material";
import { CSSProperties } from "react";

export interface CounterProps {
  count: number;
  onChange: (value: number) => void;
  sx?: CSSProperties;
}

export const StyledCounter = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "16px",

  "& .count": {
    width: "60px",
    height: "40px",
    border: `1px solid ${theme.palette.monochrome[200]}`,
    borderRadius: "8px",
    textAlign: "center",
    fontSize: "14px",
    lineHeight: "40px",
  },
  "& .circleButton": {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    backgroundColor: theme.palette.midTeal[700],
    color: "white",
    fontSize: "20px",
    border: "none",
    cursor: "pointer",
  },
}));
