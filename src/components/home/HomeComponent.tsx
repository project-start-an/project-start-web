import UpPolygon from "../../assets/up-polygon.svg";
import LeftPolygon from "../../assets/left-polygon.svg";
import RighPolygon from "../../assets/right-polygon.svg";
import BottomPolygon from "../../assets/bottom-polygon.svg";
import WebinarGif from "../../assets/HomeCompAssets/webinar-gif.gif";

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
  TitleBlueText,
  TitleText,
  UpPolygonStyle,
  UpPolygonWrapper,
  rightAssetStyle,
  HomePageTitlesWrapperStyled
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
          <HomePageTitlesWrapperStyled>
            <TitleText>Together </TitleText>
            <TitleBlueText>We </TitleBlueText>
            <TitleText>digitalize </TitleText>
            <TitleText>your </TitleText>
            <TitleText>Business</TitleText>
            <TitleText>!</TitleText>
            {/* <img src={LeftAsset} style={leftAssetStyle} alt="welcome text" /> */}
          </HomePageTitlesWrapperStyled>
          <ButtonWrapper>
            <Button
              onHoverBackgroundColor={"white"}
              normalViewFontSize={1.4}
              mobileViewFontSize={4.6}
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
