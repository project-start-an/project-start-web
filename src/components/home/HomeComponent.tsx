//visual assets
import rightAsset from "../../assets/IntroCompAssets/Webinar (1) 1.svg";
import leftAsset from "../../assets/IntroCompAssets/home_text.svg";

import {
  introSectionsOuterDividerStyle,
  imageAssetStyle,
} from "./HomeComponent.styled";

import LeftPoligon from "../../assets/IntroCompAssets/LeftPoligon.svg";
import RighPolygon from "../../assets/IntroCompAssets/RightPoligon.svg";
import UpPolygon from "../../assets/IntroCompAssets/UpPolygon.svg";
import BottomPolygon from "../../assets/IntroCompAssets/BottomPolygon.svg";

const WrapperStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "stretch",
  width: "100%",
  height: "100%",
  gap: "1rem",
};

const HorizontalWrapperStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flex: 1,
  height: "40%",
  gap: "1rem",
  overflow: "hidden",
};

const LeftRightPolygonWrapperStyle = {
  height: "100%",
  width: "5%",
};

const LeftRightPolygonStyle = {
  height: "100%",
  width: "100%",
};

const UpPolygonWrapperStyle = {
  alignSelf: "center",
  height: "10%",
};

const UpPolygonStyle = {
  height: "100%",
};

const BottomPolygonWrapperStyle = {
  alignSelf: "center",
  height: "10%",
};

function HomeComponent() {
  return (
    <div style={WrapperStyle}>
      <div style={UpPolygonWrapperStyle}>
        <img src={UpPolygon} style={UpPolygonStyle} />
      </div>
      <div style={HorizontalWrapperStyle}>
        <div style={LeftRightPolygonWrapperStyle}>
          <img src={LeftPoligon} style={LeftRightPolygonStyle} />
        </div>
        {/* left section */}
        <div style={introSectionsOuterDividerStyle}>
          <img src={leftAsset} style={imageAssetStyle} alt="welcome text" />
        </div>
        {/* right section */}
        <div style={introSectionsOuterDividerStyle}>
          <img src={rightAsset} style={imageAssetStyle} alt="Image asset" />
        </div>
        <div style={LeftRightPolygonWrapperStyle}>
          <img src={RighPolygon} style={LeftRightPolygonStyle} />
        </div>
      </div>
      <div style={BottomPolygonWrapperStyle}>
        <img src={BottomPolygon} />
      </div>
    </div>
  );
}

export default HomeComponent;
