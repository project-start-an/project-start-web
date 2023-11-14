import { styled } from "@mui/material";

type InputProps = {
    background: string;
    id: string;
};

const ResponsiveSection = styled("div")<InputProps>(({ background, id }) => ({
    backgroundColor: background,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // height: id === "ourTeam" ? "84vh" : "100vh",
    height: id === "home" ? "calc(100vh - 64px)" : "100vh",
  
    "@media (max-width: 768px)": {
      width: "100%",
      height:
        id === "ourTeam"
          ? "120vh"
          : id === "pricing"
          ? "180vh"
          : id === "services"
          ? "160vh"
          : "92vh",
    },
}));

export {
    ResponsiveSection
}