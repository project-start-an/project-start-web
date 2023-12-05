import { styled } from "@mui/material";

const MainWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "stretch",
  width: "100%",
  height: "100%",
});

const UpPolygonWrapper = styled("div")({
  alignSelf: "center",
  height: "15%",
  "@media (max-width: 768px)": {
    display: "none",
  },
});

const UpPolygonStyle: React.CSSProperties = {
  height: "100%",
};

const HorizontalWrapper = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flex: 1,
  height: "40%",
  overflow: "hidden",

  "@media (max-width: 768px)": {
    flexDirection: "column-reverse",
  },
});

const SidePolygonWrapper = styled("div")({
  height: "100%",
  width: "5%",

  "@media (max-width: 768px)": {
    display: "none",
  },
});

const SidePolygonStyle: React.CSSProperties = {
  height: "100%",
  width: "100%",
};

const LeftSection = styled("div")({
  height: "100%",
  width: "35%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  marginTop: "5%",
  marginLeft: "5%",

  "@media (max-width: 768px)": {
    flexDirection: "column-reverse",
    justifyContent: "flex-end",
    width: "80%",
    marginTop: "0%",
    marginLeft: "0%",
  },
});

const HomePageTitlesWrapperStyled = styled("div")({
  "@media (max-width: 768px)": {
    marginTop: "10%",
    textAlign: "center",
  },
});

const TitleText = styled("span")({
  color: "#000",
  fontFamily: "Ubuntu",
  fontSize: "min(4vw, 3rem)",
  fontStyle: "normal",
  fontWeight: "400",

  "@media (max-width: 768px)": {
    fontSize: "6vw",
    fontWeight: "600",
  },
});

const TitleBlueText = styled(TitleText)({
  color: "#516A91",
  fontFamily: "Ubuntu",
  fontSize: "min(5.9vw, 4rem)",
  fontStyle: "normal",
  fontWeight: "500",

  "@media (max-width: 768px)": {
    fontSize: "8vw",
    fontWeight: "600",
  },
});

const rightAssetStyle: React.CSSProperties = {
  height: "100%",
  width: "100%",
  objectFit: "contain",
};

const RightSection = styled("div")({
  height: "100%",
  width: "35%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  marginRight: "5%",

  "@media (max-width: 768px)": {
    width: "82%",
    marginRight: "0%",
  },
});

const BottomPolygonWrapper = styled("div")({
  alignSelf: "center",
  height: "10%",
  "@media (max-width: 768px)": {
    display: "none",
  },
});

const ButtonWrapper = styled("div")({
  height: "20%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",

  "@media (max-width: 768px)": {
    height: "20%",
    justifyContent: "center",
  },
});

type BtnProps = {
  onHoverBackgroundColor: string;
};

const Button = styled("button")<BtnProps>(({ onHoverBackgroundColor }) => ({
  width: "12.5rem",
  padding: "1rem",
  height: "3.5rem",
  fontWeight: "600",
  borderRadius: "1rem",
  display: "flex",
  color: "#FFFFFF",
  fontFamily: "Ubuntu",
  // fontSize: normalViewFontSize + "vw",
  fontSize: "1.5rem",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#065A82",
  border: "0.15em solid #065A82",
  cursor: "pointer",
  "@media (max-width: 768px)": {
    // fontSize: mobileViewFontSize + "vw",
    width: "10.5rem",
  },
  "&:hover": {
    color: "rgb(0 0 0 / 90%)",
    backgroundColor: onHoverBackgroundColor, // backgroundColor: "#D7E6F0",
  },
}));

export {
  MainWrapper,
  UpPolygonWrapper,
  UpPolygonStyle,
  HorizontalWrapper,
  SidePolygonWrapper,
  SidePolygonStyle,
  LeftSection,
  RightSection,
  ButtonWrapper,
  Button,
  rightAssetStyle,
  BottomPolygonWrapper,
  TitleText,
  TitleBlueText,
  HomePageTitlesWrapperStyled,
};
