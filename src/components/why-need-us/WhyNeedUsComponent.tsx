import Banner from "../../assets/WhyNeedUsCompAssets/banner.png";
import Checkmark from "../../assets/checkmark.svg";
import OfficeGif from "../../assets/WhyNeedUsCompAssets/office-gif.gif";

import {
  BoxWrapper,
  ContentWrapper,
  InnerWrapper,
  LeftSectionInnerWrapper,
  LeftSectionWrapper,
  MainWrapper,
  RightSectionWrapper,
  Title,
  ImageStyle,
  FieldWrapper,
  IconWrapper,
} from "./WhyNeedUs.styled";

function WhyNeedUsComponent() {
  return (
    <MainWrapper bannerImg={Banner}>
      <InnerWrapper>
        <Title color="black">Why you need us?</Title>
        <ContentWrapper>
          <BoxWrapper>
            <LeftSectionWrapper>
              <LeftSectionInnerWrapper>
                <FieldWrapper>
                  <IconWrapper>
                    <img src={Checkmark} alt="checkmark" />
                  </IconWrapper>
                  <span
                    style={{
                      fontWeight: "600",
                    }}
                  >
                    Eye-catching designs
                  </span>
                </FieldWrapper>
                <FieldWrapper>
                  <IconWrapper>
                    <img src={Checkmark} alt="checkmark" />
                  </IconWrapper>
                  <span
                    style={{
                      fontWeight: "600",
                    }}
                  >
                    Custom-made solutions just for you
                  </span>
                </FieldWrapper>
                <FieldWrapper>
                  <IconWrapper>
                    <img src={Checkmark} alt="checkmark" />
                  </IconWrapper>
                  <span
                    style={{
                      fontWeight: "600",
                    }}
                  >
                    No more manual tasks
                  </span>
                </FieldWrapper>
                <FieldWrapper>
                  <IconWrapper>
                    <img src={Checkmark} alt="checkmark" />
                  </IconWrapper>
                  <span
                    style={{
                      fontWeight: "600",
                    }}
                  >
                    Being more recognisable
                  </span>
                </FieldWrapper>
                <FieldWrapper>
                  <IconWrapper>
                    <img src={Checkmark} alt="checkmark" />
                  </IconWrapper>
                  <span
                    style={{
                      fontWeight: "600",
                    }}
                  >
                    Reliable maintainance and support
                  </span>
                </FieldWrapper>
                <FieldWrapper>
                  <IconWrapper>
                    <img src={Checkmark} alt="checkmark" />
                  </IconWrapper>
                  <span
                    style={{
                      fontWeight: "600",
                    }}
                  >
                    Using latest technology and trends
                  </span>
                </FieldWrapper>
              </LeftSectionInnerWrapper>
            </LeftSectionWrapper>
            <RightSectionWrapper>
              <img src={OfficeGif} style={ImageStyle} />
            </RightSectionWrapper>
          </BoxWrapper>
        </ContentWrapper>
      </InnerWrapper>
    </MainWrapper>
  );
}

export default WhyNeedUsComponent;
