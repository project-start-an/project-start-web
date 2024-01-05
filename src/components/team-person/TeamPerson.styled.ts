import styled from "styled-components";

// Define the props type with the 'id' property as a string

const Wrapper = styled.div`
  height: 80%;
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  @media (width <= 768px) {
    width: 80%;
  }
`;

const ImageWrapper = styled.div`
  height: 45%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const TeamPersonImage = styled.img`
  height: 100%;
  width: 90%;

  @media (width <= 768px) {
    width: 50%;
  }
`;

const teamPersonInformationOuterWrapperStyle: React.CSSProperties = {
  width: "100%",
  height: "55%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "1rem",
};

const PersonContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  @media (width <= 768px) {
    max-width: 18rem;
  }
`;

const teamPersonAdditionInfoOuterWrapperStyle = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const teamPersonIconsWrapperStyle = {
  width: "10%",
  marginRight: "3%",
};

const LinkedInIcon = styled.div`
  cursor: pointer;
  transition: opacity 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.7;
  }
`;

const InfoRow = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-family: Ubuntu, sans-serif;
  font-style: normal;
  font-size: 1rem;
  line-height: normal;
`;

const PersonName = styled(InfoRow)`
  font-weight: 600;
  font-size: 1.25rem;
`;

const PersonPosition = styled(InfoRow)`
  color: #065a82;
  font-style: italic;
`;

const AdditionalInfoRow = styled(InfoRow)`
  width: 90%;
  justify-content: flex-start;
  font-size: 0.875rem;
`;

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
