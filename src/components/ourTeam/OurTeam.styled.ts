import { styled } from "@mui/material";

const Wrapper = styled("div")({
  // Add your default styles here
  height: "100%",
  width: "80%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  "@media (max-width: 768px)": {
    width: "100%", // Apply 'flexDirection: column' for mobile view
  },
});

type TitleInputProps = {
  color: string;
};

const Title = styled("h2")<TitleInputProps>(({ color }) => ({
  color: `${color}`,
  fontFamily: "Ubuntu",
  fontWeight: "500",
  alignSelf: "flex-start",
}));

const TeamWrapper = styled("div")({
  height: "80%",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "center",

  "@media (max-width: 768px)": {
    // Apply 'flexDirection: column' for mobile view
    flexDirection: "column",
    height: "100%",
  },
});

export { Wrapper, Title, TeamWrapper };
