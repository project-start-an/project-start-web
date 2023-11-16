import { styled } from "@mui/material";

type InputProps = {
  background: string;
  id: string;
};

const ResponsiveSection = styled("div")<InputProps>(({ background, id }) => ({
  backgroundColor: background,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height:
    id === "home"
      ? "calc(100vh - 64px)"
      : id === "getStarted"
      ? "70vh"
      : "100vh",
  // height: id === "ourTeam" ? "84vh" : "100vh",

  "@media (max-width: 768px)": {
    width: "100%",
    height:
      id === "ourTeam"
        ? "120vh"
        : id === "getStarted"
        ? "180vh"
        : id === "services"
        ? "200vh"
        : "92vh",
  },
}));

export { ResponsiveSection };
