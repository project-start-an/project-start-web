import ServicesBanner from "../../assets/ServicesCompAssets/service-banner.png";
import ServicesData from "../../data/ServicesData/ServicesData";

import {
  BoxContentWrapper,
  BoxHeaderVisAsset,
  BoxHeaderVisAssetWrapper,
  BoxInfoBtn,
  BoxInfoBtnWrapper,
  BoxTitle,
  BoxWrapper,
  ContentWrapper,
  InnerWrapper,
  MainWrapper,
  Title,
} from "./Services.styled";

function ServicesComponent() {
  return (
    <MainWrapper bannerImg={ServicesBanner}>
      <InnerWrapper>
        <Title>Our Services</Title>
        <ContentWrapper>
          {ServicesData.map((item) => (
            <BoxWrapper>
              <BoxHeaderVisAssetWrapper>
                <BoxHeaderVisAsset></BoxHeaderVisAsset>
              </BoxHeaderVisAssetWrapper>
              <BoxTitle>{item.name}</BoxTitle>
              <BoxContentWrapper></BoxContentWrapper>
              <BoxInfoBtnWrapper>
                <BoxInfoBtn
                  onHoverBackgroundColor={"#D7E6F0"}
                  normalViewFontSize={1}
                  mobileViewFontSize={3.8}
                >
                  More info
                </BoxInfoBtn>
              </BoxInfoBtnWrapper>
            </BoxWrapper>
          ))}
        </ContentWrapper>
      </InnerWrapper>
    </MainWrapper>
  );
}

export default ServicesComponent;
