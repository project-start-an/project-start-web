import servicesBanner from "../../assets/service_banner.png";
import { styled } from "@mui/material";

//vis assets
import ResponsiveInnerWrapper from "../../styles/styled-components/InnerWrapper";
import {
  ResponsivePageTitleHeader,
  ResponsiveTeamTitleVisualAsset,
} from "../contact/ContactComponent";
import ServicesData from "../../data/ServicesData/ServicesData";

export const ResponsiveServicesBoxInfoBtnWrapper = styled("div")({
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

export const ResponsiveServicesBoxInfoBtn = styled("div")<BtnProps>(
  ({ onHoverBackgroundColor, normalViewFontSize, mobileViewFontSize }) => ({
    height: "58%",
    width: "36%",
    display: "flex",
    borderRadius: "0.6em",
    color: "#FFFFFF",
    fontFamily: "Ubuntu",
    fontWeight: "500",
    // fontSize: "1vw",
    fontSize: normalViewFontSize + "vw",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#065A82",
    border: "0.15em solid #065A82",
    cursor: "pointer",

    "@media (max-width: 768px)": {
      // fontSize: "3.8vw",
      fontSize: mobileViewFontSize + "vw",
      fontWeight: "600",
    },

    "&:hover": {
      // opacity: 0.7,
      color: "rgb(0 0 0 / 90%)",
      backgroundColor: onHoverBackgroundColor,
      // backgroundColor: "#D7E6F0",
    },
  }),
);

function ServiceComponent() {
  const backgroundImageStyle = {
    backgroundImage: `url(${servicesBanner})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  };

  const ResponsiveServicesContentWrapper = styled("div")({
    height: "70%",
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    // backgroundColor: 'red',

    "@media (max-width: 768px)": {
      alignItems: "center",
      flexDirection: "column",
    },
  });

  const ResponsiveServicesBoxWrapper = styled("div")({
    height: "80%",
    width: "26%",
    display: "flex",
    borderRadius: "0.5em",
    backgroundColor: "#D7E6F0",
    flexDirection: "column",
    boxShadow: "rgba(0, 0, 0, 0.25) 0.8px 2px 6px 2px",

    "@media (max-width: 768px)": {
      height: "28%",
      width: "76%",
    },
  });

  const ResponsiveServicesBoxHeaderVisAsset = styled("div")({
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

  const ResponsiveServicesBoxHeaderVisAssetWrapperStyle = styled("div")({
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

  const ResponsiveServicesBoxTitleHeader = styled("div")({
    height: "10%",
    width: "100%",
    display: "flex",
    fontFamily: "Ubuntu",
    fontWeight: "600",
    fontSize: "1.3vw",
    alignItems: "flex-end",
    justifyContent: "center",
    // backgroundColor: 'red',

    "@media (max-width: 768px)": {
      fontSize: "4.5vw",
    },
  });

  const ResponsiveServicesBoxContentWrapper = styled("div")({
    height: "55%",
    width: "100%",
    display: "flex",
    fontFamily: "Ubuntu",
    fontWeight: "600",
    fontSize: "1.3vw",
    alignItems: "flex-end",
    justifyContent: "center",
    // backgroundColor: 'green',

    "@media (max-width: 768px)": {},
  });

  const CustomResponsiveTeamTitleVisualAsset = styled(
    ResponsiveTeamTitleVisualAsset,
  )({
    color: "white",
    "@media (max-width: 768px)": {
      color: "black",
    },
  });

  return (
    <div style={backgroundImageStyle}>
      <ResponsiveInnerWrapper>
        <ResponsivePageTitleHeader height={8}>
          <CustomResponsiveTeamTitleVisualAsset>
            Our Services
          </CustomResponsiveTeamTitleVisualAsset>
        </ResponsivePageTitleHeader>
        <ResponsiveServicesContentWrapper>
          {ServicesData.map((item) => {
            return (
              <ResponsiveServicesBoxWrapper>
                <ResponsiveServicesBoxHeaderVisAsset>
                  <ResponsiveServicesBoxHeaderVisAssetWrapperStyle></ResponsiveServicesBoxHeaderVisAssetWrapperStyle>
                </ResponsiveServicesBoxHeaderVisAsset>
                <ResponsiveServicesBoxTitleHeader>
                  {item.name}
                </ResponsiveServicesBoxTitleHeader>
                <ResponsiveServicesBoxContentWrapper></ResponsiveServicesBoxContentWrapper>
                <ResponsiveServicesBoxInfoBtnWrapper>
                  <ResponsiveServicesBoxInfoBtn
                    onHoverBackgroundColor={"#D7E6F0"}
                    normalViewFontSize={1}
                    mobileViewFontSize={3.8}
                  >
                    More info
                  </ResponsiveServicesBoxInfoBtn>
                </ResponsiveServicesBoxInfoBtnWrapper>
              </ResponsiveServicesBoxWrapper>
            );
          })}
        </ResponsiveServicesContentWrapper>
      </ResponsiveInnerWrapper>
    </div>
  );
}

export default ServiceComponent;
