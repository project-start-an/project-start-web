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

const MiddleSectionWrapper = styled("div")({
  height: "100%",
  width: "60%",
  // background: "lightblue",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "5rem",

  "@media (max-width: 768px)": {
    width: "78%",
    // backgroundColor: 'blue'
  },
});

const MiddleSectionInnerWrapper = styled("div")({
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "80%",
  flexDirection: "column",
  gap: "2rem",
});

const MiddleSectionTitle = styled("div")({
  color: "#000",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  fontFamily: "Ubuntu",
  fontSize: "min(7vw, 4.375rem)",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "84px",
  marginBottom: "1rem",

  "@media (max-width: 768px)": {
    fontSize: "8vw",
    fontWeight: "600",
  },
});

const MiddleSectionDescription = styled("div")({
  color: "#000",
  textAlign: "center",
  fontFamily: "Ubuntu",
  fontSize: "min(3vw, 2rem)",
  fontStyle: "italic",
  fontWeight: "400",
  lineHeight: "normal",

  "@media (max-width: 768px)": {
    fontSize: "5.2vw",
    fontWeight: "500",
  },
});

const BottomPolygonWrapper = styled("div")({
  alignSelf: "center",
  height: "10%",
  marginLeft: "30%",
});

const BottomPolygonStyle: React.CSSProperties = {
  height: "calc(100% + 5rem)",
};

const ButtonWrapper = styled("div")({
  height: "20%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
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
    fontSize: "1.4rem",
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
  ButtonWrapper,
  Button,
  BottomPolygonWrapper,
  BottomPolygonStyle,
  MiddleSectionWrapper,
  MiddleSectionInnerWrapper,
  MiddleSectionTitle,
  MiddleSectionDescription,
};
