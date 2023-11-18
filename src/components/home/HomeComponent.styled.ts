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
  height: "10%",
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
});

const SidePolygonWrapper = styled("div")({
  height: "100%",
  width: "5%",
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
});

const leftAssetStyle: React.CSSProperties = {
  height: "100%",
  width: "100%",
  objectFit: "contain",
};

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
});

const BottomPolygonWrapper = styled("div")({
  alignSelf: "center",
  height: "10%",
});

const ButtonWrapper = styled("div")({
  height: "20%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
});

type BtnProps = {
  onHoverBackgroundColor: string;
  normalViewFontSize: number;
  mobileViewFontSize: number;
};

const Button = styled("div")<BtnProps>(
  ({ onHoverBackgroundColor, normalViewFontSize, mobileViewFontSize }) => ({
    height: "58%",
    width: "36%",
    display: "flex",
    borderRadius: "0.6em",
    color: "#FFFFFF",
    fontFamily: "Ubuntu",
    fontWeight: "500",
    fontSize: normalViewFontSize + "vw",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#065A82",
    border: "0.15em solid #065A82",
    cursor: "pointer",
    "@media (max-width: 768px)": {
      fontSize: mobileViewFontSize + "vw",
      fontWeight: "600",
    },
    "&:hover": {
      color: "rgb(0 0 0 / 90%)",
      backgroundColor: onHoverBackgroundColor, // backgroundColor: "#D7E6F0",
    },
  }),
);

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
  leftAssetStyle,
  rightAssetStyle,
  BottomPolygonWrapper,
};
