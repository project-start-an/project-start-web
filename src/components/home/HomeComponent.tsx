//visual assets
import rightAsset from "../../assets/IntroCompAssets/Webinar (1) 1.svg";
import leftAsset from "../../assets/IntroCompAssets/home_text.svg";

//styles
import InnerWrapperStyle from "../../styles/styled-components/InnerPageWrapper";
import { 
  ResponsiveBackgroundBannerStyle, 
  introSectionsOuterDividerStyle, 
  introSectionsInnerDividerStyle, 
  leftAssetStyle, 
  leftImageAssetStyle, 
  rightAssetStyle } 
  from "./HomeComponent.styled";

function HomeComponent() {
  return (
    <ResponsiveBackgroundBannerStyle>
      <div style={InnerWrapperStyle}>
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
      </div>
    </ResponsiveBackgroundBannerStyle>
  );
}

export default HomeComponent;
