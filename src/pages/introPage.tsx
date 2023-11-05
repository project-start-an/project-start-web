//visual assets
import rightAsset from "../assets/IntroCompAssets/Webinar (1) 1.svg";
import leftAsset from "../assets/IntroCompAssets/home_text.svg";

//styles
import InnerWrapperStyle from "./styled-components/InnerPageWrapper";

function IntroPage() {
  const introSectionsOuterDividerStyle = {
    height: "100%",
    width: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: 'grey',
  };

  const introSectionsInnerDividerStyle = {
    height: "60%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: 'grey',
  };

  const leftAssetStyle = {
    height: "70%",
    width: "100%",
    display: "flex",
    // backgroundColor: 'grey',
    alignItems: "center",
  };

  const rightAssetStyle = {
    width: "100%",
    height: "90%",
  };

  const leftImageAssetStyle = {
    width: "80%",
    height: "66%",
  };

  return (
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
  );
}

export default IntroPage;
