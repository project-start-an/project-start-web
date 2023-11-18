import { styled } from "@mui/material";

const MainWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "stretch",
  width: "100%",
  height: "100%",
  gap: "1rem",
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
  gap: "1rem",
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
  width: "40%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  marginTop: "5%",
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
  width: "40%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
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
  leftAssetStyle,
  rightAssetStyle,
  BottomPolygonWrapper,
};
