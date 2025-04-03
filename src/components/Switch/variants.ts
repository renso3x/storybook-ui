import { styled, Switch } from "@mui/material";

export const StyledSwitch = styled(Switch)(({ theme }) => ({
  width: 56,
  height: 28,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml,<svg height="10" width="14" fill="none" viewBox="0 0 14 10" xmlns="http://www.w3.org/2000/svg"><path d="M13.432 1.171L12.369 0.070999C12.3475 0.047752 12.3213 0.0292527 12.2922 0.0166834C12.2631 0.00411411 12.2317 -0.002249 12.2 -0.00200097C12.1682 -0.0028285 12.1367 0.00327229 12.1075 0.0158785C12.0783 0.0284847 12.0522 0.0472941 12.031 0.070999L4.66603 7.526L1.98603 4.833C1.96426 4.81006 1.93805 4.7918 1.90899 4.77932C1.87994 4.76683 1.84865 4.7604 1.81703 4.7604C1.7854 4.7604 1.75411 4.76683 1.72506 4.77932C1.696 4.7918 1.66979 4.81006 1.64803 4.833L0.573026 5.912C0.549985 5.93454 0.531678 5.96145 0.51918 5.99116C0.506682 6.02086 0.500244 6.05277 0.500244 6.085C0.500244 6.11723 0.506682 6.14913 0.51918 6.17884C0.531678 6.20855 0.549985 6.23546 0.573026 6.258L3.95403 9.658C4.13674 9.85899 4.38923 9.98273 4.66003 10.004C4.92574 9.97976 5.17402 9.86129 5.36003 9.67H5.36603L13.438 1.52C13.4805 1.47145 13.5034 1.40884 13.5023 1.34434C13.5012 1.27984 13.4761 1.21806 13.432 1.171Z" fill="white"/></svg>')`,
      },
      "& .MuiSwitch-thumb": {
        backgroundColor: theme.palette.midTeal[700],
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#1F647A66",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: "#2D2D2D",
    width: 25,
    height: 25,
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml,<svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1H13" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: "#D1D3D4",
    borderRadius: 20 / 2,
  },
}));
