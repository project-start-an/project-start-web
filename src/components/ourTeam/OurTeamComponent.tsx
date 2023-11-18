// Import your styles
import TeamPersonWrapper from "../../styles/styled-components/TeamPersonWrapper";
import TeamData from "../../data/TeamData/teamData";
import { TeamWrapper, Title, Wrapper } from "./OurTeam.styled";

function OurTeamComponent() {
  return (
    <Wrapper>
      {/* title */}
      <Title color="black">Our Team</Title>
      {/* main content */}
      <TeamWrapper>
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
      </TeamWrapper>
    </Wrapper>
  );
}

export default OurTeamComponent;
