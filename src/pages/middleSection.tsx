import { styled } from "@mui/material";
import ResponsiveInnerWrapper from "./styled-components/InnerWrapper";

const ResponsiveMiddleSectionLeftWrapper = styled("div")({
  // Add your default styles here
  height: "100%",
  width: "50%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  // backgroundColor: 'grey',

  "@media (max-width: 768px)": {
    width: "100%",
  },
});

const ResponsiveMiddleSectionLeftTextWrapper = styled("div")({
  // Add your default styles here
  height: "30%",
  width: "80%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  // backgroundColor: 'blue',
  fontFamily: "Ubuntu",
  fontSize: "2vw",
  fontWeight: "500",

  "@media (max-width: 768px)": {
    height: "20%",
    fontSize: "5.5vw",
  },
});

const ResponsiveMiddleSectionLeftWrapperBtn = styled("div")({
  // Add your default styles here
  height: "8%",
  width: "24%",
  marginRight: "26%",
  display: "flex",
  borderRadius: "0.6em",
  color: "#FFFFFF",
  fontFamily: "Ubuntu",
  fontWeight: "500",
  fontSize: "1.4vw",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#065A82",
  border: "0.15em solid #065A82",
  cursor: "pointer",

  "@media (max-width: 768px)": {
    fontSize: "3.8vw",
    height: "6%",
    fontWeight: "600",
  },

  "&:hover": {
    // opacity: 0.7,
    color: "rgb(0 0 0 / 90%)",
    backgroundColor: "#FFFFFF",
  },
});

function MiddleSection() {
  return (
    <ResponsiveInnerWrapper>
      <ResponsiveMiddleSectionLeftWrapper>
        <ResponsiveMiddleSectionLeftTextWrapper>
          Be one step closer to achieving your dreams by answering COMPANY
          questions
        </ResponsiveMiddleSectionLeftTextWrapper>
        <ResponsiveMiddleSectionLeftWrapperBtn>
          Start
        </ResponsiveMiddleSectionLeftWrapperBtn>
      </ResponsiveMiddleSectionLeftWrapper>
    </ResponsiveInnerWrapper>
  );
}

export default MiddleSection;
