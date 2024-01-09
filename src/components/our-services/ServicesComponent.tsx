import ServicesBanner from "../../assets/ServicesCompAssets/service-banner.png";
import ServicesData from "../../data/ServicesData/ServicesData";
import Checkmark from "../../assets/checkmark.svg";
import { FieldWrapper, IconWrapper } from "../why-need-us/WhyNeedUs.styled";
import useMediaQuery from "@mui/material/useMediaQuery";
import useTheme from "@mui/material/styles/useTheme";
import Carousel from "react-material-ui-carousel";

import {
  BoxContentWrapper,
  BoxHeaderVisAsset,
  BoxHeaderVisAssetWrapper,
  BoxTitle,
  BoxWrapper,
  ContentWrapper,
  InnerWrapper,
  MainWrapper,
  Title,
  ButtonWrapper,
  Button,
} from "./Services.styled";

function ServicesComponent() {
  const theme = useTheme();

  // Change to be tablet/mobile
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <MainWrapper bannerImg={ServicesBanner}>
      <InnerWrapper>
        <Title>Our Services</Title>
        <ContentWrapper>
          {ServicesData.map((item) => (
            <BoxWrapper>
              <BoxHeaderVisAssetWrapper>
                <BoxHeaderVisAsset>
                  <img src={item.image} alt="image" />
                </BoxHeaderVisAsset>
              </BoxHeaderVisAssetWrapper>
              <BoxTitle>{item.name}</BoxTitle>
              <BoxContentWrapper>
                {item.listings.map((item1) => {
                  return (
                    <FieldWrapper>
                      <IconWrapper>
                        <img src={Checkmark} alt="checkmark" />
                      </IconWrapper>
                      {item1}
                    </FieldWrapper>
                  );
                })}
              </BoxContentWrapper>
              <ButtonWrapper>
                <Button onHoverBackgroundColor={"#fff"}>Get started</Button>
              </ButtonWrapper>
            </BoxWrapper>
          ))}
        </ContentWrapper>
        {isMobile ? (
          <div style={{ width: "100%", height: "100%" }}>
            <Carousel
              cycleNavigation={false}
              navButtonsAlwaysVisible={false}
              fullHeightHover={false}
              animation="slide"
              indicators={true}
              height="66vh"
            >
              {ServicesData.map((item) => (
                <BoxWrapper>
                  <BoxHeaderVisAssetWrapper>
                    <BoxHeaderVisAsset>
                      <img src={item.image} alt="image" />
                    </BoxHeaderVisAsset>
                  </BoxHeaderVisAssetWrapper>
                  <BoxTitle>{item.name}</BoxTitle>
                  <BoxContentWrapper>
                    {item.listings.map((item1) => {
                      return (
                        <FieldWrapper>
                          <IconWrapper>
                            <img src={Checkmark} alt="checkmark" />
                          </IconWrapper>
                          {item1}
                        </FieldWrapper>
                      );
                    })}
                  </BoxContentWrapper>
                  <ButtonWrapper>
                    <Button onHoverBackgroundColor={"#fff"}>Get started</Button>
                  </ButtonWrapper>
                </BoxWrapper>
              ))}
            </Carousel>
          </div>
        ) : (
          ""
        )}
      </InnerWrapper>
    </MainWrapper>
  );
}

export default ServicesComponent;
