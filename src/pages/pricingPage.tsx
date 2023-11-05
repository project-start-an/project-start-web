import pricingBanner from "../assets/pricing_banner.png";
import PageWrapperStyle from "./styled-components/PageTitleWrapper";

import { styled } from "@mui/material";

//vis assets
import PricingSvg from "../assets/PricingCompAssstes/Pricing.svg";
import ResponsiveInnerWrapper from "./styled-components/InnerWrapper";

import PricingData from "./components/Pricings/PricingData";

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
      borderRadius: "0.4rem",
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",

      "@media (max-width: 768px)": {
        height: "15%",
        alignItems: "center",
      },
    }),
  );

  return (
    <div style={backgroundImageStyle}>
      <ResponsiveInnerWrapper>
        {/* page title */}
        <div style={PageWrapperStyle}>
          <img src={PricingSvg} alt="Pricing" />
        </div>
        {/* content  */}
        <ResponsivePricingContentWrapper>
          {PricingData.map((item) => {
            return (
              <ResponsivePricingBox
                height={item.height}
                width={item.width}
                background={item.background}
              >
                {/* {item.price} */}
              </ResponsivePricingBox>
            );
          })}
        </ResponsivePricingContentWrapper>
      </ResponsiveInnerWrapper>
    </div>
  );
}

export default PricingPage;
