//visual assets
import ourTeam from "../assets/OurTeamAssets/Our team.svg";

// Import your styles
import TeamPersonWrapper from "./components/TeamPersonWrapper";
import { styled } from "@mui/material";

//team data
import TeamData from "./components/TeamData/teamData";

const ResponsiveTeamTitleVisualAsset = styled("div")({
  // Add your default styles for the containing div here
  width: "14%",
  height: "40%",

  "@media (max-width: 768px)": {
    width: "40%",
    height: "40%",
  },

  "& img": {
    width: "100%",
    height: "100%",
  },
});

const ResponsivePageTitleHeader = styled("div")({
  height: "15%",
  width: "90%",
  marginLeft: "6%",
  display: "flex",
  alignItems: "flex-end",

  "@media (max-width: 768px)": {
    height: "15%",
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

function ContactPage() {
  return (
    <ResponsiveInnerWrapper>
      {/* title */}
      <ResponsivePageTitleHeader>
        <ResponsiveTeamTitleVisualAsset>
          <img src={ourTeam} alt="Our team" />
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

export default ContactPage;
