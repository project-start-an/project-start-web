import Banner from "../../assets/WhyNeedUsCompAssets/banner.png";
import Checkmark from "../../assets/checkmark.svg";

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

const OfficeGif =
  "https://s3-alpha-sig.figma.com/img/04f0/69bc/350d90c617635bdb1c6ab47221ad2e7b?Expires=1701043200&Signature=NSFQcvFYmAQgiPr-PtXbwuusx2i21v65JnZmui0ykYiMvsfIqPMhvRo8lgPh-GvW2EsliPEigpoyL6WloUbpbslq1O05fiE4CneG2Y6PX4dwnhGWOkGEUXH0LWjXOLUlMw1~VQoBa5SvKLUk40QGNeMBe7FfOTaBOHQOB9wl3LZk3u7uqgWeMlM1ilQ-Azfl4ocuwGpS6QoQ5HtSJbEOHY78ahsBOH7VUaVmQkbLtalD1lMVUmHK83Flaz5uEU5i1KOpmq~mvc0em7Q0hHn9pTpkGJu~Dm7oChmQXSAIQ9Dv-doDQvVYREd4pvBaVdxKjN138TpHWyWSOjAwjm-PyA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

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
