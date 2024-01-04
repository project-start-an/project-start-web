import styled from "styled-components";

type InputProps = {
  background: string;
  id: string;
};

const ResponsiveSection = styled.div<InputProps>`
  background-color: ${(props) => props.background};
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => (props.id === "home" ? "100vh" : "calc(100vh - 64px)")};

  @media (max-width: 768px) {
    width: 100%;
    height: ${(props) =>
      props.id === "ourTeam"
        ? "100%"
        : props.id === "home"
          ? "100vh"
          : "calc(100vh - 56px)"};
  }
`;

export { ResponsiveSection };
