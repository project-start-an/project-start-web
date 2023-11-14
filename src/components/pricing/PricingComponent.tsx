import pricingBanner from "../../assets/pricing_banner.png";

import { styled } from "@mui/material";

//vis assets
import ResponsiveInnerWrapper from "../../styles/styled-components/InnerWrapper";
import {
  ResponsivePageTitleHeader,
  ResponsiveTeamTitleVisualAsset,
} from "../contact/ContactComponent";
import Checkmark from '../../assets/Checkmark.svg'

function PricingComponent() {
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

  const ResponsiveWhyYouNeedUsComponentStyle = styled("div")({
    // Add your default styles here
    height: "78%",
    width: "84%",
    display: "flex",
    borderRadius: "0.4em",

    backgroundColor: "#D7E6F0",
    alignItems: "center",
    boxShadow: "rgba(0, 0, 0, 0.25) 0.8px 2px 6px 2px",

    "@media (max-width: 768px)": {

    },
  });


  const ResponsiveWhyYouNeedUsComponentLefyColumnStyle = styled("div")({
    // Add your default styles here
    height: "100%",
    width: "55%",
    display: "flex",
    alignItems: "center",
    justifyContent: 'center',

    "@media (max-width: 768px)": {
      
    },
  });


  const ResponsiveWhyYouNeedUsComponentRightColumnStyle = styled("div")({
    // Add your default styles here
    height: "100%",
    width: "45%",
    display: "flex",
    alignItems: "center",
    justifyContent: 'center',

    "@media (max-width: 768px)": {
      
    },
  });

  const ResponsiveWhyYouNeedUsComponentRightColumnAssetWrapperStyle = styled("div")({
    // Add your default styles here
    height: "80%",
    width: "80%",
    display: "flex",
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: 'grey',
    background: 'url(https://s3-alpha-sig.figma.com/img/04f0/69bc/350d90c617635bdb1c6ab47221ad2e7b?Expires=1701043200&Signature=NSFQcvFYmAQgiPr-PtXbwuusx2i21v65JnZmui0ykYiMvsfIqPMhvRo8lgPh-GvW2EsliPEigpoyL6WloUbpbslq1O05fiE4CneG2Y6PX4dwnhGWOkGEUXH0LWjXOLUlMw1~VQoBa5SvKLUk40QGNeMBe7FfOTaBOHQOB9wl3LZk3u7uqgWeMlM1ilQ-Azfl4ocuwGpS6QoQ5HtSJbEOHY78ahsBOH7VUaVmQkbLtalD1lMVUmHK83Flaz5uEU5i1KOpmq~mvc0em7Q0hHn9pTpkGJu~Dm7oChmQXSAIQ9Dv-doDQvVYREd4pvBaVdxKjN138TpHWyWSOjAwjm-PyA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)',

    "@media (max-width: 768px)": {
      
    },
  });

  const ResponsiveWhyYouNeedUsComponentLefyColumnInnerWrapperStyle = styled("div")({
    // Add your default styles here
    height: "70%",
    width: "80%",
    display: "flex",
    // backgroundColor: "grey",
    alignItems: "center",
    justifyContent: 'center',
    flexDirection: 'column',

    "@media (max-width: 768px)": {
      
    },
  });

  const ResponsiveWhyYouNeedUsComponentLefyColumnFieldStyle = styled("div")({
    // Add your default styles here
    height: "16.666%",
    width: "100%",
    display: "flex",
    // backgroundColor: "grey",
    alignItems: "center",
    justifyContent: 'flex-start',
    fontFamily: 'Ubuntu',
    fontWeight: '500',

    fontSize: '1.2vw',
    "@media (max-width: 768px)": {
      
    },
  });



  // type InputPricingProps = {
  //   height: string;
  //   width: string;
  //   background: string;
  // };

  // const ResponsivePricingBox = styled("div")<InputPricingProps>(
  //   ({ height, width, background }) => ({
  //     height: height,
  //     width: width,
  //     backgroundColor: background,
  //     display: "flex",
  //     flexDirection: "column",
  //     borderRadius: "0.4rem",

  //     boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",

  //     "@media (max-width: 768px)": {
  //       height: "31%",
  //       width: "86%",
  //     },
  //   }),
  // );

  // const ResponsivePricingBoxTitle = styled("div")({
  //   height: "20%",
  //   width: "100%",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   fontFamily: "Ubuntu",
  //   fontWeight: "600",
  //   fontSize: "1.3vw",
  //   // backgroundColor: 'red',

  //   "@media (max-width: 768px)": {
  //     fontSize: "5vw",
  //   },
  // });

  // const ResponsivePricingBoxContentListing = styled("div")({
  //   height: "80%",
  //   width: "100%",
  //   display: "flex",
  //   alignItems: "center",
  //   flexDirection: "column",
  //   "@media (max-width: 768px)": {},
  // });

  // const ResponsivePricingBoxContentListingItem = styled("div")({
  //   height: "10%",
  //   width: "90%",
  //   display: "flex",
  //   alignItems: "center",
  //   fontFamily: "Ubuntu",
  //   fontWeight: "600",
  //   fontSize: "0.85vw",

  //   "@media (max-width: 768px)": {
  //     fontSize: "3.5vw",
  //   },
  // });

  const ResponsivePricingBoxContentListingItemIconWrapper = styled("div")({
    height: "100%",
    width: "12%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor:'red',
    "@media (max-width: 768px)": {},

    "& img": {
      width: "42%",
      height: "100%",
    },
  });


  return (
    <div style={backgroundImageStyle}>
      <ResponsiveInnerWrapper>
        {/* page title */}
        <ResponsivePageTitleHeader>
          <ResponsiveTeamTitleVisualAsset>
            Why you need us?
          </ResponsiveTeamTitleVisualAsset>
        </ResponsivePageTitleHeader>
        {/* content  */}
        <ResponsivePricingContentWrapper>
          <ResponsiveWhyYouNeedUsComponentStyle>
              <ResponsiveWhyYouNeedUsComponentLefyColumnStyle>
                    <ResponsiveWhyYouNeedUsComponentLefyColumnInnerWrapperStyle>
                          <ResponsiveWhyYouNeedUsComponentLefyColumnFieldStyle>
                              <ResponsivePricingBoxContentListingItemIconWrapper>
                                <img src={Checkmark} alt="checkmark" />
                              </ResponsivePricingBoxContentListingItemIconWrapper>
                              <span style={{fontWeight: '600'}}>Eye-catching&nbsp;</span>designs 
                          </ResponsiveWhyYouNeedUsComponentLefyColumnFieldStyle>
                          <ResponsiveWhyYouNeedUsComponentLefyColumnFieldStyle>
                              <ResponsivePricingBoxContentListingItemIconWrapper>
                                <img src={Checkmark} alt="checkmark" />
                              </ResponsivePricingBoxContentListingItemIconWrapper>
                              <span style={{fontWeight: '600'}}>Custom</span>-made solutions just for <span style={{fontWeight: '600'}}>&nbsp;you</span>
                          </ResponsiveWhyYouNeedUsComponentLefyColumnFieldStyle>
                          <ResponsiveWhyYouNeedUsComponentLefyColumnFieldStyle>
                                <ResponsivePricingBoxContentListingItemIconWrapper>
                                      <img src={Checkmark} alt="checkmark" />
                                </ResponsivePricingBoxContentListingItemIconWrapper>
                                <span style={{fontWeight: '600'}}>No&nbsp;</span> more manual <span style={{fontWeight: '600'}}>&nbsp;tasks</span> 
                          </ResponsiveWhyYouNeedUsComponentLefyColumnFieldStyle>
                          <ResponsiveWhyYouNeedUsComponentLefyColumnFieldStyle>
                                <ResponsivePricingBoxContentListingItemIconWrapper>
                                  <img src={Checkmark} alt="checkmark" />
                                </ResponsivePricingBoxContentListingItemIconWrapper>
                                Being more <span style={{fontWeight: '600'}}>&nbsp;recognizable</span>
                          </ResponsiveWhyYouNeedUsComponentLefyColumnFieldStyle>
                          <ResponsiveWhyYouNeedUsComponentLefyColumnFieldStyle>
                                <ResponsivePricingBoxContentListingItemIconWrapper>
                                  <img src={Checkmark} alt="checkmark" />
                                </ResponsivePricingBoxContentListingItemIconWrapper>
                               <span style={{fontWeight: '600'}}>Reliable&nbsp;</span> maintainance and  support 
                          </ResponsiveWhyYouNeedUsComponentLefyColumnFieldStyle>
                          <ResponsiveWhyYouNeedUsComponentLefyColumnFieldStyle>
                                <ResponsivePricingBoxContentListingItemIconWrapper>
                                  <img src={Checkmark} alt="checkmark" />
                                </ResponsivePricingBoxContentListingItemIconWrapper>
                                Using <span style={{fontWeight: '600'}}>&nbsp;latest&nbsp;</span> technology and <span style={{fontWeight: '600'}}>&nbsp;trends</span>
                          </ResponsiveWhyYouNeedUsComponentLefyColumnFieldStyle>
                    </ResponsiveWhyYouNeedUsComponentLefyColumnInnerWrapperStyle>
              </ResponsiveWhyYouNeedUsComponentLefyColumnStyle>
              <ResponsiveWhyYouNeedUsComponentRightColumnStyle>
                    <ResponsiveWhyYouNeedUsComponentRightColumnAssetWrapperStyle>

                    </ResponsiveWhyYouNeedUsComponentRightColumnAssetWrapperStyle>
              </ResponsiveWhyYouNeedUsComponentRightColumnStyle>
          
          </ResponsiveWhyYouNeedUsComponentStyle>
          {/* 
            HERE IS THE OLD VERSION
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
            })} */}
        </ResponsivePricingContentWrapper>
      </ResponsiveInnerWrapper>
    </div>
  );
}

export default PricingComponent;
