import React from "react";

import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

const Toggle = () => {
  return <Switch {...label} defaultChecked />;
};

export default Toggle;
