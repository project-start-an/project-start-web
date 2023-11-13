import { styled } from "@mui/material";

//visual assets
import homeBanner from "../../assets/home_banner.png";
import rightAsset from "../../assets/IntroCompAssets/Webinar (1) 1.svg";
import leftAsset from "../../assets/IntroCompAssets/home_text.svg";

//styles
import InnerWrapperStyle from "../../styles/styled-components/InnerPageWrapper";

function HomeComponent() {
  const ResponsiveBackgroundBannerStyle = styled("div")({
    backgroundImage: `url(${homeBanner})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",

    "@media (max-width: 768px)": {},
  });

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
    justifyContent: "center",
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
