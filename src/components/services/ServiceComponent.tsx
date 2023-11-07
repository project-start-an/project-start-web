import servicesBanner from "../../assets/service_banner.png";
import { styled } from "@mui/material";

//vis assets
import ResponsiveInnerWrapper from "../../styles/styled-components/InnerWrapper";
import {
  ResponsivePageTitleHeader,
  ResponsiveTeamTitleVisualAsset,
} from "../contact/ContactComponent";
import ServicesData from "../../data/ServicesData/ServicesData";

function ServiceComponent() {
  const backgroundImageStyle = {
    backgroundImage: `url(${servicesBanner})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  };

  const ResponsiveServicesContentWrapper = styled("div")({
    height: "84%",
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    paddingTop: "1.5%",

    "@media (max-width: 768px)": {
      alignItems: "center",
      flexDirection: "column",
    },
  });

  const ResponsiveServicesBoxWrapper = styled("div")({
    height: "70%",
    width: "29%",
    display: "flex",
    borderRadius: "0.5em",
    backgroundColor: "white",
    flexDirection: "column",
    boxShadow: "rgba(0, 0, 0, 0.14) 0.8px 2px 6px 2px",

    "@media (max-width: 768px)": {
      height: "29%",
      width: "76%",
    },
  });

  const ResponsiveServicesBoxTitleHeader = styled("div")({
    height: "10%",
    width: "100%",
    display: "flex",
    fontFamily: "Ubuntu",
    fontWeight: "600",
    fontSize: "1.3vw",
    alignItems: "flex-end",
    justifyContent: "center",
    // backgroundColor: 'red',

    "@media (max-width: 768px)": {
      fontSize: "4.5vw",
    },
  });

  const ResponsiveServicesBoxContentWrapper = styled("div")({
    height: "70%",
    width: "100%",
    display: "flex",
    fontFamily: "Ubuntu",
    fontWeight: "600",
    fontSize: "1.3vw",
    alignItems: "flex-end",
    justifyContent: "center",
    // backgroundColor: 'green',

    "@media (max-width: 768px)": {},
  });

  const ResponsiveServicesBoxInfoBtnWrapper = styled("div")({
    height: "20%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "@media (max-width: 768px)": {},
  });

  const ResponsiveServicesBoxInfoBtn = styled("div")({
    height: "58%",
    width: "36%",
    display: "flex",
    borderRadius: "0.6em",
    color: "#FFFFFF",
    fontFamily: "Ubuntu",
    fontWeight: "500",
    fontSize: "1vw",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#065A82",
    border: "0.15em solid #065A82",
    cursor: "pointer",

    "@media (max-width: 768px)": {
      fontSize: "3.8vw",
      fontWeight: "600",
    },

    "&:hover": {
      // opacity: 0.7,
      color: "rgb(0 0 0 / 90%)",
      backgroundColor: "#FFFFFF",
    },
  });

  const CustomResponsiveTeamTitleVisualAsset = styled(
    ResponsiveTeamTitleVisualAsset,
  )({
    color: "white",
    "@media (max-width: 768px)": {
      color: "black",
    },
  });

  return (
    <div style={backgroundImageStyle}>
      <ResponsiveInnerWrapper>
        <ResponsivePageTitleHeader>
          <CustomResponsiveTeamTitleVisualAsset>
            Our Services
          </CustomResponsiveTeamTitleVisualAsset>
        </ResponsivePageTitleHeader>
        <ResponsiveServicesContentWrapper>
          {ServicesData.map((item) => {
            return (
              <ResponsiveServicesBoxWrapper>
                <ResponsiveServicesBoxTitleHeader>
                  {item.name}
                </ResponsiveServicesBoxTitleHeader>
                <ResponsiveServicesBoxContentWrapper></ResponsiveServicesBoxContentWrapper>
                <ResponsiveServicesBoxInfoBtnWrapper>
                  <ResponsiveServicesBoxInfoBtn>
                    More info
                  </ResponsiveServicesBoxInfoBtn>
                </ResponsiveServicesBoxInfoBtnWrapper>
              </ResponsiveServicesBoxWrapper>
            );
          })}
        </ResponsiveServicesContentWrapper>
      </ResponsiveInnerWrapper>
    </div>
  );
}

export default ServiceComponent;
