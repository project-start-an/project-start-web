import ServicesBanner from "../../assets/ServicesCompAssets/service-banner.png";
import ServicesData from "../../data/ServicesData/ServicesData";
import Checkmark from "../../assets/checkmark.svg";
import { FieldWrapper, IconWrapper } from "../why-need-us/WhyNeedUs.styled";

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
