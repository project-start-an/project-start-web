import ServicesBanner from "../../assets/ServicesCompAssets/service-banner.png";
import ServicesData from "../../data/ServicesData/ServicesData";
import Checkmark from "../../assets/checkmark.svg";
import { FieldWrapper, IconWrapper } from "../why-need-us/WhyNeedUs.styled";
import Carousel from "react-material-ui-carousel";
import { useMediaQuery } from "usehooks-ts";

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
} from "./Services.styled";
import { ButtonWrapper, DarkButton } from "../styled-components/Button.styled";

function ServicesComponent() {
  // Change to be tablet/mobile
  const isMobile = useMediaQuery("(max-width: 900px)");

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
              <ButtonWrapper position="center">
                <DarkButton>Get started</DarkButton>
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
                  <ButtonWrapper position="center">
                    <DarkButton>Get started</DarkButton>
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
