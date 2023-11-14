//visual assets
import rightAsset from "../../assets/IntroCompAssets/Webinar (1) 1.svg";
import leftAsset from "../../assets/IntroCompAssets/home_text.svg";

import {
  introSectionsOuterDividerStyle,
  introSectionsInnerDividerStyle,
  leftAssetStyle,
  leftImageAssetStyle,
  rightAssetStyle,
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
};

const HorizontalWrapperStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flex: 1,
  height: "40%",
};

const LeftPolygonStyle = {
  height: "100%",
  width: "5rem",
};

const UpPolygonWrapperStyle = {
  alignSelf: "center",
  height: "10%",
};

const UpPolygonStyle = {
  height: "10rem",
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
        <img src={LeftPoligon} style={LeftPolygonStyle} />
        {/* left section */}
        <div style={introSectionsOuterDividerStyle}>
          <div style={introSectionsInnerDividerStyle}>
            <div style={leftAssetStyle}>
              <img
                src={leftAsset}
                style={leftImageAssetStyle}
                alt="welcome text"
              />
            </div>
          </div>
        </div>
        {/* right section */}
        <div style={introSectionsOuterDividerStyle}>
          <div style={introSectionsInnerDividerStyle}>
            <img src={rightAsset} style={rightAssetStyle} alt="Image asset" />
          </div>
        </div>
        <img src={RighPolygon} style={LeftPolygonStyle} />
      </div>
      <div style={BottomPolygonWrapperStyle}>
        <img src={BottomPolygon} />
      </div>
    </div>
  );
}

export default HomeComponent;
