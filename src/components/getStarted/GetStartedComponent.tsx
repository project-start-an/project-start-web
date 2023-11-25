import UpPolygon from "../../assets/up-polygon.svg";
import LeftPolygon from "../../assets/left-polygon.svg";
import RighPolygon from "../../assets/right-polygon.svg";
import BottomPolygon from "../../assets/bottom-polygon.svg";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  return (
    <MainWrapper>
      <UpPolygonWrapper>
        <img src={UpPolygon} style={UpPolygonStyle} alt="polygon" />
      </UpPolygonWrapper>
      <HorizontalWrapper>
        <SidePolygonWrapper>
          <img src={LeftPolygon} style={SidePolygonStyle} alt="image" />
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
                onClick={() => navigate("/ContactUs")}
              >
                Get started
              </Button>
            </ButtonWrapper>
          </MiddleSectionInnerWrapper>
        </MiddleSectionWrapper>
        <SidePolygonWrapper>
          <img src={RighPolygon} style={SidePolygonStyle} alt="image" />
        </SidePolygonWrapper>
      </HorizontalWrapper>
      <BottomPolygonWrapper>
        <img src={BottomPolygon} style={BottomPolygonStyle} alt="image" />
      </BottomPolygonWrapper>
    </MainWrapper>
  );
}

export default GetStartedComponent;
