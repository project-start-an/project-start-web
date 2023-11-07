import { useRef } from "react";
//vis assets
import EmailSvg from "../../assets/Email.svg";
import LinkedInSvg from "../../assets/LinkedIn.svg";
import TelephonSvg from "../../assets/Phone.svg";
import { styled } from "@mui/material";

// Define the props type with the 'id' property as a string
type TeamMember = {
  name: string;
  position: string;
  email: string;
  emailLink: string;
  linkedInName: string;
  linkedInLink: string;
  svg: string;
  mobileNumber: string;
};

const ResponsiveTeamPersonElement = styled("div")({
  // Add your default styles here
  width: "25%",
  height: "80%",
  display: "flex",
  alignItems: "center",
  flexDirection: "column" as const,

  "@media (max-width: 768px)": {
    width: "70%", // Apply 'flexDirection: column' for mobile view
  },
});

const teamPersonImageStyle = {
  width: "64%",
  height: "44%",
  display: "flex",
  // backgroundColor:'red'
};

const teamPersonInformationOuterWrapperStyle = {
  width: "70%",
  height: "54%",
  display: "flex",
  flexDirection: "column" as const,
};

const teamPersonNameOuterWrapperStyle = {
  width: "100%",
  height: "20%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#000",
  fontFamily: "Ubuntu",
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "normal",
  // backgroundColor:'blue'
};

const teamPersonAdditionInfoOuterWrapperStyle = {
  width: "100%",
  height: "16%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const teamPersonIconsWrapperStyle = {
  width: "10%",
  height: "70%",
  marginRight: "3%",
  // backgroundColor:'red'
};

function TeamPersonWrapper({
  name,
  position,
  email,
  emailLink,
  linkedInName,
  linkedInLink,
  svg,
  mobileNumber,
}: TeamMember) {
  const containerRef = useRef(null);

  const handleContainerClick = (linkedInLink: string) => {
    window.open(linkedInLink);
  };

  const handleEmailClick = (email: string) => {
    // Copy the email to the clipboard
    navigator.clipboard.writeText(email).then(() => {});
  };

  const LinkedInIcon = styled("div")({
    cursor: "pointer",
    transition: "opacity 0.3s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      opacity: 0.7,
    },
  });

  return (
    <ResponsiveTeamPersonElement>
      <img src={svg} style={teamPersonImageStyle} alt="person image" />
      <div style={teamPersonInformationOuterWrapperStyle}>
        <div style={teamPersonNameOuterWrapperStyle}>
          <img src={name} alt="name" />
        </div>
        <div style={teamPersonAdditionInfoOuterWrapperStyle}>
          <img src={position} alt="position" />
        </div>
        <div
          style={{
            ...teamPersonAdditionInfoOuterWrapperStyle,
            justifyContent: "flex-start",
          }}
        >
          <img src={EmailSvg} style={teamPersonIconsWrapperStyle} alt="email" />
          <LinkedInIcon>
            <img
              src={email}
              alt="email"
              onClick={() => handleEmailClick(emailLink)}
            />
          </LinkedInIcon>
        </div>
        <div
          style={{
            ...teamPersonAdditionInfoOuterWrapperStyle,
            justifyContent: "flex-start",
          }}
          ref={containerRef}
          onClick={() => handleContainerClick(linkedInLink)}
        >
          <img
            src={LinkedInSvg}
            style={teamPersonIconsWrapperStyle}
            alt="linkedIn"
          />
          <LinkedInIcon>
            <img src={linkedInName} alt="linkedIn" />
          </LinkedInIcon>
        </div>
        <div
          style={{
            ...teamPersonAdditionInfoOuterWrapperStyle,
            justifyContent: "flex-start",
          }}
        >
          <img
            src={TelephonSvg}
            style={teamPersonIconsWrapperStyle}
            alt="phone"
          />
          <img src={mobileNumber} alt="mobile" />
        </div>
      </div>
    </ResponsiveTeamPersonElement>
  );
}

export default TeamPersonWrapper;
