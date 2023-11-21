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
                    Eye-catching&nbsp;
                  </span>
                  designs
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
                    Custom
                  </span>
                  -made solutions just for{" "}
                  <span
                    style={{
                      fontWeight: "600",
                    }}
                  >
                    &nbsp;you
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
                    No&nbsp;
                  </span>{" "}
                  more manual{" "}
                  <span
                    style={{
                      fontWeight: "600",
                    }}
                  >
                    &nbsp;tasks
                  </span>
                </FieldWrapper>
                <FieldWrapper>
                  <IconWrapper>
                    <img src={Checkmark} alt="checkmark" />
                  </IconWrapper>
                  Being more{" "}
                  <span
                    style={{
                      fontWeight: "600",
                    }}
                  >
                    &nbsp;recognizable
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
                    Reliable&nbsp;
                  </span>{" "}
                  maintainance and support
                </FieldWrapper>
                <FieldWrapper>
                  <IconWrapper>
                    <img src={Checkmark} alt="checkmark" />
                  </IconWrapper>
                  Using{" "}
                  <span
                    style={{
                      fontWeight: "600",
                    }}
                  >
                    &nbsp;latest&nbsp;
                  </span>{" "}
                  technology and{" "}
                  <span
                    style={{
                      fontWeight: "600",
                    }}
                  >
                    &nbsp;trends
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
