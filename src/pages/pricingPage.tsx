import pricingBanner from "../assets/pricing_banner.png";

import { styled } from "@mui/material";

//vis assets
import ResponsiveInnerWrapper from "./styled-components/InnerWrapper";
import Checkmark from "../assets/Checkmark.svg";

import PricingData from "./components/Pricings/PricingData";
import {
  ResponsivePageTitleHeader,
  ResponsiveTeamTitleVisualAsset,
} from "./contactPage";

function PricingPage() {
  const backgroundImageStyle = {
    backgroundImage: `url(${pricingBanner})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center bottom",
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  };

  const ResponsivePricingContentWrapper = styled("div")({
    // Add your default styles here
    height: "85%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    // backgroundColor: 'gray',
    alignItems: "center",

    "@media (max-width: 768px)": {
      width: "100%", // Apply 'flexDirection: column' for mobile view
      flexDirection: "column",
    },
  });

  type InputPricingProps = {
    height: string;
    width: string;
    background: string;
  };

  const ResponsivePricingBox = styled("div")<InputPricingProps>(
    ({ height, width, background }) => ({
      height: height,
      width: width,
      backgroundColor: background,
      display: "flex",
      flexDirection: "column",
      borderRadius: "0.4rem",

      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",

      "@media (max-width: 768px)": {
        height: "31%",
        width: "86%",
      },
    }),
  );

  const ResponsivePricingBoxTitle = styled("div")({
    height: "20%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Ubuntu",
    fontWeight: "600",
    fontSize: "1.3vw",
    // backgroundColor: 'red',

    "@media (max-width: 768px)": {
      fontSize: "5vw",
    },
  });

  const ResponsivePricingBoxContentListing = styled("div")({
    height: "80%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    "@media (max-width: 768px)": {},
  });

  const ResponsivePricingBoxContentListingItem = styled("div")({
    height: "10%",
    width: "90%",
    display: "flex",
    alignItems: "center",
    fontFamily: "Ubuntu",
    fontWeight: "600",
    fontSize: "0.85vw",

    "@media (max-width: 768px)": {
      fontSize: "3.5vw",
    },
  });

  const ResponsivePricingBoxContentListingItemIconWrapper = styled("div")({
    height: "100%",
    width: "12%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "@media (max-width: 768px)": {},

    "& img": {
      width: "60%",
      height: "100%",
    },
  });

  return (
    <div style={backgroundImageStyle}>
      <ResponsiveInnerWrapper>
        {/* page title */}
        <ResponsivePageTitleHeader>
          <ResponsiveTeamTitleVisualAsset>
            Pricing
          </ResponsiveTeamTitleVisualAsset>
        </ResponsivePageTitleHeader>
        {/* content  */}
        <ResponsivePricingContentWrapper>
          {PricingData.map((item) => {
            return (
              <ResponsivePricingBox
                height={item.height}
                width={item.width}
                background={item.background}
              >
                <ResponsivePricingBoxTitle>
                  {item.name}
                </ResponsivePricingBoxTitle>
                <ResponsivePricingBoxContentListing>
                  {item.features.map((item1) => {
                    return (
                      <ResponsivePricingBoxContentListingItem>
                        <ResponsivePricingBoxContentListingItemIconWrapper>
                          <img src={Checkmark} alt="checkmark" />
                        </ResponsivePricingBoxContentListingItemIconWrapper>
                        {item1.feature} - €{item1.price}
                      </ResponsivePricingBoxContentListingItem>
                    );
                  })}
                </ResponsivePricingBoxContentListing>
              </ResponsivePricingBox>
            );
          })}
        </ResponsivePricingContentWrapper>
      </ResponsiveInnerWrapper>
    </div>
  );
}

export default PricingPage;
