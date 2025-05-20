import { styled, Switch, SxProps, Theme } from "@mui/material";
import { ComponentProps } from "react";

export type SwitchProps = ComponentProps<typeof Switch> & {
  label?: string;
  formLabelSx?: SxProps<Theme>;
  switchSx?: SxProps<Theme>;
};

export const StyledSwitch = styled(Switch)(({ theme }) => ({
  width: 46,
  height: 26,
  padding: 0,
  display: "flex",
  marginRight: "5px",

  "& .MuiSwitch-switchBase": {
    padding: 1,
    "&.Mui-checked": {
      transform: "translateX(20px)",
      color: "#fff",

      "& + .MuiSwitch-track": {
        opacity: 1,
      },
      "&.Mui-disabled + .MuiSwitch-track": {},
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      // backgroundColor: "#BDBDBD", // ✅ unchecked + disabled
    },
  },

  "& .MuiSwitch-thumb": {
    backgroundColor: "#fff",
    width: 18, // ✅ smaller thumb
    height: 18,
    boxShadow: "none",
    margin: 3,
  },

  "& .MuiSwitch-track": {
    borderRadius: 13,
    backgroundColor: theme.palette.monochrome[300],
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 200,
    }),
  },
}));
