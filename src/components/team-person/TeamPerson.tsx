import { useRef } from "react";
//vis assets
import EmailSvg from "../../assets/Email.svg";
import LinkedInSvg from "../../assets/LinkedIn.svg";
import TelephonSvg from "../../assets/Phone.svg";
import {
  TeamPersonImage,
  teamPersonIconsWrapperStyle,
  Wrapper,
  ImageWrapper,
  PersonName,
  PersonPosition,
  AdditionalInfoRow,
  PersonContentWrapper,
} from "./TeamPerson.styled";

type TeamMember = {
  name: string;
  position: string;
  email: string;
  linkedInName: string;
  linkedInLink: string;
  svg: string;
  mobileNumber: string;
};

function TeamPerson({
  name,
  position,
  email,
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
    navigator.clipboard
      .writeText(email)
      .then(() => console.log("Email is copied!"));
  };

  return (
    <Wrapper>
      <ImageWrapper>
        <TeamPersonImage src={svg} alt="person image" />
      </ImageWrapper>
      <PersonContentWrapper>
        <PersonName>{name}</PersonName>
        <PersonPosition>{position}</PersonPosition>

        <AdditionalInfoRow onClick={() => handleEmailClick(email)}>
          <img src={EmailSvg} style={teamPersonIconsWrapperStyle} alt="email" />
          <span>{email}</span>
        </AdditionalInfoRow>
        <AdditionalInfoRow
          ref={containerRef}
          onClick={() => handleContainerClick(linkedInLink)}
        >
          <img
            src={LinkedInSvg}
            style={teamPersonIconsWrapperStyle}
            alt="linkedIn"
          />
          <span>{linkedInName}</span>
        </AdditionalInfoRow>
        <AdditionalInfoRow>
          <img
            src={TelephonSvg}
            style={teamPersonIconsWrapperStyle}
            alt="phone"
          />
          <span>{mobileNumber}</span>
        </AdditionalInfoRow>
      </PersonContentWrapper>
    </Wrapper>
  );
}

export default TeamPerson;
