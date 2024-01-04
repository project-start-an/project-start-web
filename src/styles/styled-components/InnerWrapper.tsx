import { styled } from "@mui/material";

const ResponsiveInnerWrapper = styled("div")({
  // Add your default styles here
  height: "100%",
  width: "80%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  // backgroundColor: 'grey',

  "@media (max-width: 768px)": {
    width: "100%", // Apply 'flexDirection: column' for mobile view
  },
});

export default ResponsiveInnerWrapper;
