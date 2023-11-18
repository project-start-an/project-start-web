import UpPolygon from "../../assets/up-polygon.svg";
import LeftPolygon from "../../assets/left-polygon.svg";
import RighPolygon from "../../assets/right-polygon.svg";
import BottomPolygon from "../../assets/bottom-polygon.svg";

import {
  BottomPolygonStyle,
  BottomPolygonWrapper,
  HorizontalWrapper,
  MainWrapper,
  SidePolygonStyle,
  SidePolygonWrapper,
  UpPolygonStyle,
  UpPolygonWrapper,
  MiddleSectionWrapper,
  ButtonWrapper,
  Button,
  MiddleSectionTitle,
  MiddleSectionDescription,
  MiddleSectionInnerWrapper,
} from "./GetStarted.styled";

function GetStartedComponent() {
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
        <MiddleSectionWrapper>
          <MiddleSectionInnerWrapper>
            <div>
              <MiddleSectionTitle>Did we convince you?</MiddleSectionTitle>
              <MiddleSectionDescription>
                Let's start working together, shall we?
              </MiddleSectionDescription>
            </div>
            <ButtonWrapper>
              <Button
                onHoverBackgroundColor={"white"}
                normalViewFontSize={1.4}
                mobileViewFontSize={3.8}
              >
                Get started
              </Button>
            </ButtonWrapper>
          </MiddleSectionInnerWrapper>
        </MiddleSectionWrapper>
        <SidePolygonWrapper>
          <img src={RighPolygon} style={SidePolygonStyle} />
        </SidePolygonWrapper>
      </HorizontalWrapper>
      <BottomPolygonWrapper>
        <img src={BottomPolygon} style={BottomPolygonStyle} />
      </BottomPolygonWrapper>
    </MainWrapper>
  );
}

export default GetStartedComponent;