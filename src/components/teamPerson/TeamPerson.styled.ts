import { styled } from "@mui/material";

// Define the props type with the 'id' property as a string

const Wrapper = styled("div")({
  height: "80%",
  width: "25%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "2rem",

  "@media (max-width: 768px)": {
    width: "80%", // Apply 'flexDirection: column' for mobile view
  },
});

const ImageWrapper = styled("div")({
  height: "45%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
});

const TeamPersonImage = styled("img")({
  // width: "64%",
  // height: "45%",
  // display: "flex",
  height: "100%",
  width: "90%",
  "@media (max-width: 768px)": {
    width: "50%",
  },
});

const teamPersonInformationOuterWrapperStyle: React.CSSProperties = {
  width: "100%",
  height: "55%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "1rem",
};

const PersonContentWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: "1rem",
  width: "100%",

  "@media (max-width: 768px)": {
    maxWidth: "18rem",
  },
});

const teamPersonAdditionInfoOuterWrapperStyle = {
  width: "100%",
  // height: "16%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const teamPersonIconsWrapperStyle = {
  width: "10%",
  // height: "70%",
  marginRight: "3%",
  // backgroundColor:'red'
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

const InfoRow = styled("div")({
  width: "90%",
  // height: "20%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#000",
  fontFamily: "Ubuntu",
  fontStyle: "normal",
  fontSize: "1rem",
  lineHeight: "normal",
});

const PersonName = styled(InfoRow)({
  fontWeight: "600",
  fontSize: "1.25rem",
});

const PersonPosition = styled(InfoRow)({
  color: "#065A82",
  fontStyle: "italic",
});

const AdditionalInfoRow = styled(InfoRow)({
  width: "90%",
  justifyContent: "flex-start",
  fontSize: "0.875rem",
});

export {
  InfoRow,
  PersonName,
  PersonPosition,
  AdditionalInfoRow,
  Wrapper,
  TeamPersonImage,
  ImageWrapper,
  teamPersonInformationOuterWrapperStyle,
  PersonContentWrapper,
  teamPersonAdditionInfoOuterWrapperStyle,
  teamPersonIconsWrapperStyle,
  LinkedInIcon,
};
