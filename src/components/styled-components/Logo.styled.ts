import styled from "styled-components";

const Logo = styled.h2`
  color: #2092f5;
  font-family: Ubuntu, sans-serif;
  font-weight: 600;
  width: 30%;
  text-align: center;
`;

const NavLogo = styled(Logo)`
  transition:
    transform 0.3s ease,
    color 0.3s ease;

  @media (width <= 768px) {
    text-align: end;
  }

  &:hover {
    transform: scale(1.2) translateX(15%); /* Increase the size on hover */
    font-weight: bold;
  }
`;

export { Logo, NavLogo };
