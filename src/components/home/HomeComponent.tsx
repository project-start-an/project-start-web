import LeftPolygon from "../../assets/left-polygon.svg";
import RighPolygon from "../../assets/right-polygon.svg";
import BottomPolygon from "../../assets/bottom-polygon.svg";
import WebinarGif from "../../assets/HomeCompAssets/webinar-gif.gif";

import {
  BottomPolygonWrapper,
  HorizontalWrapper,
  LeftSection,
  MainWrapper,
  RightSection,
  SidePolygonStyle,
  SidePolygonWrapper,
  TitleBlueText,
  TitleText,
  rightAssetStyle,
  HomePageTitlesWrapperStyled,
} from "./HomeComponent.styled";
import { ButtonWrapper, DarkButton } from "../styled-components/Button.styled";

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
          <ButtonWrapper position="flex-start">
            <DarkButton onClick={handleNavLinkClick}>Get started</DarkButton>
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
