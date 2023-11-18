import { styled } from "@mui/material/styles";

type MainWrapperInputProps = {
  bannerImg: string;
};

const MainWrapper = styled("div")<MainWrapperInputProps>(({ bannerImg }) => ({
  backgroundImage: `url(${bannerImg})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  height: "100%",
  width: "100%",
}));

const InnerWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  height: "100%",
  width: "80%",
});

const Title = styled("h2")({
  color: "white",
  fontFamily: "Ubuntu",
  fontWeight: "500",
  alignSelf: "flex-start",
});

const ContentWrapper = styled("div")({
  height: "70%",
  width: "100%",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",

  "@media (max-width: 768px)": {
    alignItems: "center",
    flexDirection: "column",
  },
});

const BoxWrapper = styled("div")({
  height: "80%",
  width: "25%",
  borderRadius: "0.5em",
  backgroundColor: "#D7E6F0",
  boxShadow: "rgba(0, 0, 0, 0.25) 0.8px 2px 6px 2px",
  display: "flex",
  flexDirection: "column",

  "@media (max-width: 768px)": {
    height: "28%",
    width: "76%",
  },
});

const BoxHeaderVisAssetWrapper = styled("div")({
  height: "15%",
  width: "100%",
  position: "relative",
  // display: "flex",
  fontFamily: "Ubuntu",
  fontWeight: "600",
  fontSize: "1.3vw",
  alignItems: "flex-start",
  justifyContent: "center",
  "@media (max-width: 768px)": {
    fontSize: "4.5vw",
  },
});

const BoxHeaderVisAsset = styled("div")({
  position: "absolute",
  top: "-60%",
  left: "50%",
  transform: "translateX(-50%)",
  width: "34%",
  display: "flex",
  height: "160%",
  fontFamily: "Ubuntu",
  fontWeight: "600",
  fontSize: "1.3vw",
  alignItems: "center",
  justifyContent: "flex-start",
  backgroundColor: "white",
  // background: 'url(https://s3-alpha-sig.figma.com/img/31c0/12f2/3321997b7cdbe0b51c6951b732770aaa?Expires=1701043200&Signature=OErLsNF9q16cPbYQf4IXDNuwWe0HD0vpZem9wYhmWlByTOM24JFJNORR32qXJERHRZEk96mm2SZpniFx5T9ITfy94XLNfZp3inbW85TAVC4qaGTdPJD6xs5K7KOAWwkEdMT9EbqI6Tl6HiCalOAZAZmrEQg7VNK5Wifp~2neGyg1CYhAlsNVE2D4t9gcAb~W78Zi3XRJz3NwX3Svl3beEnO73XgoCtr3BtFn02O1XbAmY5OKFBt1XebfAG-rHyJCT2ornuZ48rqEbG0yNYL1HxOcNU0h9KQLTn~ackwE71dSjOjP6tjrdlz~xntJ7YhsvGncK~ZpXWKywtqqN30~4Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',
  borderRadius: "0.2em",
  zIndex: 1,
  "@media (max-width: 768px)": {
    fontSize: "4.5vw",
  },
});

const BoxTitle = styled("div")({
  height: "10%",
  width: "100%",
  display: "flex",
  fontFamily: "Ubuntu",
  fontWeight: "600",
  fontSize: "1.3vw",
  alignItems: "flex-end",
  justifyContent: "center",
  "@media (max-width: 768px)": {
    fontSize: "4.5vw",
  },
});

const BoxContentWrapper = styled("div")({
  height: "55%",
  width: "100%",
  display: "flex",
  fontFamily: "Ubuntu",
  fontWeight: "600",
  fontSize: "1.3vw",
  alignItems: "flex-end",
  justifyContent: "center",
  "@media (max-width: 768px)": {},
});

const BoxInfoBtnWrapper = styled("div")({
  height: "20%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // backgroundColor: 'blue',
  "@media (max-width: 768px)": {},
});

type BtnProps = {
  onHoverBackgroundColor: string;
  normalViewFontSize: number;
  mobileViewFontSize: number;
};

const BoxInfoBtn = styled("div")<BtnProps>(
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
  InnerWrapper,
  Title,
  ContentWrapper,
  BoxWrapper,
  BoxHeaderVisAssetWrapper,
  BoxHeaderVisAsset,
  BoxTitle,
  BoxContentWrapper,
  BoxInfoBtnWrapper,
  BoxInfoBtn,
};