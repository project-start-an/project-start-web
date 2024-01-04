import styled from "styled-components";

//#region Styled Components
const Wrapper = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 768px) {
    width: 100%;
    padding-bottom: 3rem;
  }
`;

type TitleInputProps = {
  color: string;
};

const Title = styled.h2<TitleInputProps>`
  color: ${(props) => props.color};
  font-family: "Ubuntu";
  font-size: 4vh;
  font-weight: 500;
  align-self: flex-start;

  @media (max-width: 768px) {
    align-self: center;
  }
`;

const TeamWrapper = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
    gap: 3rem;
  }
`;
//#endregion Styled Components

export { Wrapper, Title, TeamWrapper };
