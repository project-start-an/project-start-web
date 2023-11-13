// Import your styles
import TeamPersonWrapper from "../../styles/styled-components/TeamPersonWrapper";
import { styled } from "@mui/material";

//team data
import TeamData from "../../data/TeamData/teamData";

export const ResponsiveTeamTitleVisualAsset = styled("div")({
  // Add your default styles for the containing div here
  width: "40%",
  height: "40%",
  fontFamily: "Ubuntu",
  fontWeight: "500",
  fontSize: "2.7vw",
  color: "black",

  "@media (max-width: 768px)": {
    width: "75%",
    height: "40%",
    fontSize: "10vw",
  },

  "& img": {
    width: "100%",
    height: "100%",
  },
});

export const ResponsivePageTitleHeader = styled("div")({
  height: "15%",
  width: "90%",
  marginLeft: "6%",
  display: "flex",
  alignItems: "center",

  "@media (max-width: 768px)": {
    height: "12%",
    alignItems: "center",
  },
});

const ResponsiveMnContWrapper = styled("div")({
  // Add your default styles here
  height: "76%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  // backgroundColor: 'grey',
  flexDirection: "row", // Apply 'flexDirection: column' for mobile view

  "@media (max-width: 768px)": {
    flexDirection: "column", // Apply 'flexDirection: column' for mobile view
    height: "100%",
  },
});

const ResponsiveInnerWrapper = styled("div")({
  // Add your default styles here
  height: "100%",
  width: "80%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",

  "@media (max-width: 768px)": {
    width: "100%", // Apply 'flexDirection: column' for mobile view
  },
});

function ContactComponent() {
  return (
    <ResponsiveInnerWrapper>
      {/* title */}
      <ResponsivePageTitleHeader>
        <ResponsiveTeamTitleVisualAsset>
          Our Team
        </ResponsiveTeamTitleVisualAsset>
      </ResponsivePageTitleHeader>
      {/* main content */}
      <ResponsiveMnContWrapper>
        {TeamData.map((item, key) => {
          return (
            <TeamPersonWrapper
              key={key}
              name={item.name}
              position={item.position}
              email={item.email}
              emailLink={item.emailLink}
              linkedInName={item.linkedInName}
              linkedInLink={item.linkedInLink}
              svg={item.svg}
              mobileNumber={item.mobileNumber}
            />
          );
        })}
      </ResponsiveMnContWrapper>
    </ResponsiveInnerWrapper>
  );
}

export default ContactComponent;
