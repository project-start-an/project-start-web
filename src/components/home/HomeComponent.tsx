import LeftAsset from "../../assets/HomeCompAssets/home-text.svg";
import UpPolygon from "../../assets/HomeCompAssets/up-polygon.svg";
import LeftPolygon from "../../assets/HomeCompAssets/left-polygon.svg";
import RighPolygon from "../../assets/HomeCompAssets/right-polygon.svg";
import BottomPolygon from "../../assets/HomeCompAssets/bottom-polygon.svg";

const WebinarGif =
  "https://s3-alpha-sig.figma.com/img/0f7d/fe21/5d31cb9ceecb5bed73672b0596cf8179?Expires=1701043200&Signature=bdF0L61A12e3c3iZdGKINzppMJ9X48GGHkZMJyoyMMZoQb297JI7nupXdl5i2RdMlc-xQSS4jx7DEbyDzL3JfUnSGoskcgZvkRpAZd6niXTzLrhNQBQ4e1fpsBabJ6pygTqA~tkYapfu3wYbaiLpk7-KycNyLkLTET3FoS90SHW0R1BRxobq0juQHMsV46baB57uHbMmSK9TRFt6XUHRxuJibtAikkT3g0-p3GPyOMOxQkIjCv~vu4m5OXIXIuW35QvgmL6q14ycmC1wiWdxSvmMAPH~VppYJh0l4ls3yesHYOBmoHzd9GPa-U0xhB0iXkUcbPdMkad3rt-Q3O0ASA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4";

import {
  BottomPolygonWrapper,
  Button,
  ButtonWrapper,
  HorizontalWrapper,
  LeftSection,
  MainWrapper,
  RightSection,
  SidePolygonStyle,
  SidePolygonWrapper,
  UpPolygonStyle,
  UpPolygonWrapper,
  leftAssetStyle,
  rightAssetStyle,
} from "./HomeComponent.styled";

const handleNavLinkClick = () => {
  const targetElement = document.querySelector("#getStarted");
  if (targetElement) {
    const offset =
      targetElement.getBoundingClientRect().top + window.scrollY - 65;
    window.scrollTo({ top: offset, behavior: "smooth" });
  }
};

function HomeComponent() {
  return (
    <MainWrapper>
      <UpPolygonWrapper>
        <img src={UpPolygon} style={UpPolygonStyle} />
      </UpPolygonWrapper>
      <HorizontalWrapper>
        <SidePolygonWrapper>
          <img src={LeftPolygon} style={SidePolygonStyle} />
        </SidePolygonWrapper>
        {/* left section */}
        <LeftSection>
          <div>
            <img src={LeftAsset} style={leftAssetStyle} alt="welcome text" />
          </div>
          <ButtonWrapper>
            <Button
              onHoverBackgroundColor={"white"}
              normalViewFontSize={1.4}
              mobileViewFontSize={3.8}
              onClick={handleNavLinkClick}
            >
              Get started
            </Button>
          </ButtonWrapper>
        </LeftSection>
        {/* right section */}
        <RightSection>
          <img style={rightAssetStyle} src={WebinarGif} />
        </RightSection>
        <SidePolygonWrapper>
          <img src={RighPolygon} style={SidePolygonStyle} />
        </SidePolygonWrapper>
      </HorizontalWrapper>
      <BottomPolygonWrapper>
        <img src={BottomPolygon} />
      </BottomPolygonWrapper>
    </MainWrapper>
  );
}

export default HomeComponent;
