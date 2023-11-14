import { styled } from "@mui/material";
import homeBanner from "../../assets/home_banner.png";

const ResponsiveBackgroundBannerStyle = styled("div")({
  backgroundImage: `url(${homeBanner})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  display: "flex",
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  width: "100%",

  "@media (max-width: 768px)": {},
});

const introSectionsOuterDividerStyle = {
  height: "100%",
  width: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // backgroundColor: 'grey',
};

const introSectionsInnerDividerStyle = {
  height: "60%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // backgroundColor: 'grey',
};

const leftAssetStyle = {
  height: "70%",
  width: "100%",
  display: "flex",
  // backgroundColor: 'grey',
  alignItems: "center",
  justifyContent: "center",
};

const rightAssetStyle = {
  width: "100%",
  height: "90%",
};

const leftImageAssetStyle = {
  width: "80%",
  height: "66%",
};

export {
  ResponsiveBackgroundBannerStyle,
  introSectionsOuterDividerStyle,
  introSectionsInnerDividerStyle,
  leftAssetStyle,
  rightAssetStyle,
  leftImageAssetStyle,
};
