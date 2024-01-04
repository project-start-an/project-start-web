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
  height: id === "home" ? "100vh" : "calc(100vh - 64px)",
  "@media (max-width: 768px)": {
    width: "100%",
    height:
      id === "ourTeam"
        ? "100%"
        : id === "home"
          ? "100vh"
          : "calc(100vh - 56px)",
  },
}));

export { ResponsiveSection };
