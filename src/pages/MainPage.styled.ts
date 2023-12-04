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
  height: "calc(100vh - 64px)",
  // id === "home"
  //   ? "calc(100vh - 64px)"
  //   : "100vh",

  "@media (max-width: 768px)": {
    width: "100%",
    height:
      id === "ourTeam"
        ? "130vh"
        : id === "getStarted"
          ? "90vh"
          : id === "services"
            ? "120vh"
            : "92vh",
  },
}));

export { ResponsiveSection };
