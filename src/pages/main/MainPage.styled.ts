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
  height: ${(props) =>
    // Navbar height = 75.828px, margin-bottom of navbar = 5.6px (needed for nav shadow)
    // Home component accomodate navbar in it, others do not
    props.id === "home" ? "calc(100vh - 75.828px + 5.6px)" : "100vh"};

  @media (width <= 768px) {
    width: 100%;
    height: ${(props) =>
      props.id === "ourTeam"
        ? "100%"
        : props.id === "home"
          ? "calc(100vh - 75.828px)"
          : "100vh"};
  }
`;

export { ResponsiveSection };
