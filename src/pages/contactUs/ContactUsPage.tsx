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
} from "../../components/getStarted/GetStarted.styled";
import ContactFormComponent from "../../components/contactForm/ContactFormComponent";

function ContactUsPage() {
  return (
    <div style={{ height: "calc(81vh - 64px)" }}>
      <MainWrapper>
        <UpPolygonWrapper>
          <img src={UpPolygon} style={UpPolygonStyle} />
        </UpPolygonWrapper>
        <HorizontalWrapper>
          <SidePolygonWrapper>
            <img src={LeftPolygon} style={SidePolygonStyle} />
          </SidePolygonWrapper>
          <ContactFormComponent />
          <SidePolygonWrapper>
            <img src={RighPolygon} style={SidePolygonStyle} />
          </SidePolygonWrapper>
        </HorizontalWrapper>
        <BottomPolygonWrapper>
          <img src={BottomPolygon} style={BottomPolygonStyle} />
        </BottomPolygonWrapper>
      </MainWrapper>
    </div>
  );
}

export default ContactUsPage;
