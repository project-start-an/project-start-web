import { styled } from "@mui/material";

const ResponsiveBackgroundBannerStyle = styled("div")({
  // backgroundImage: `url(${homeBanner})`,
  // backgroundSize: "contain",
  // backgroundRepeat: "no-repeat",
  backgroundColor: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",

  "@media (max-width: 768px)": {},
});

export const IntroSectionsOuterDividerStyle = styled("div")({
  height: "100%",
  width: "40%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  // width: "40%",
  // backgroundColor: 'grey',

  "@media (max-width: 768px)": {},
});

const introSectionsInnerDividerStyle = {
  // height: "60%",
  // width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // backgroundColor: 'grey',
};

const leftAssetStyle = {
  // height: "70%",
  // width: "100%",
  display: "flex",
  // backgroundColor: 'grey',
  alignItems: "center",
  justifyContent: "center",
};

const rightAssetStyle = {
  // width: "100%",
  // height: "90%",
};

const imageAssetStyle1: React.CSSProperties = {
  height: "40%",
  marginTop: "15%",
  width: "100%",
  // backgroundColor: 'red',
  objectFit: "contain",
};

const imageAssetStyle: React.CSSProperties = {
  height: "100%",
  width: "72%",
  background:
    "url(https://s3-alpha-sig.figma.com/img/0f7d/fe21/5d31cb9ceecb5bed73672b0596cf8179?Expires=1701043200&Signature=bdF0L61A12e3c3iZdGKINzppMJ9X48GGHkZMJyoyMMZoQb297JI7nupXdl5i2RdMlc-xQSS4jx7DEbyDzL3JfUnSGoskcgZvkRpAZd6niXTzLrhNQBQ4e1fpsBabJ6pygTqA~tkYapfu3wYbaiLpk7-KycNyLkLTET3FoS90SHW0R1BRxobq0juQHMsV46baB57uHbMmSK9TRFt6XUHRxuJibtAikkT3g0-p3GPyOMOxQkIjCv~vu4m5OXIXIuW35QvgmL6q14ycmC1wiWdxSvmMAPH~VppYJh0l4ls3yesHYOBmoHzd9GPa-U0xhB0iXkUcbPdMkad3rt-Q3O0ASA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)",
};

const leftImageAssetStyle = {
  // width: "80%",
  // height: "66%",
};

export {
  ResponsiveBackgroundBannerStyle,
  introSectionsInnerDividerStyle,
  leftAssetStyle,
  rightAssetStyle,
  leftImageAssetStyle,
  imageAssetStyle,
  imageAssetStyle1,
};
