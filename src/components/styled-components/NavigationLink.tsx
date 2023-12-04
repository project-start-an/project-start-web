import { Link, styled } from "@mui/material";

const NavigationLink = styled(Link)({
  textDecoration: "none",
  color: "black",
  marginInline: "2.5rem",
  fontFamily: "Inter",
  fontWeight: "600",
  fontSize: "0.8vw",

  "@media (max-width: 768px)": {
    display: "none",
  },
});
export default NavigationLink;
