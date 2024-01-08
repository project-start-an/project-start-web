import styled from "styled-components";

//#region Styled Components
const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 0.5rem 0.5rem;
  background: #fff;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 25%);
  color: black;

  @media (width <= 768px) {
    box-shadow: none;
  }
`;

const Logo = styled.h2`
  color: #2092f5;
  font-family: Ubuntu, sans-serif;
  font-weight: 600;
  width: 30%;
  text-align: center;
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

const MenuIconWrapper = styled.div`
  display: none;
  cursor: pointer;
  width: 60%;
  justify-content: flex-end;

  @media (width <= 768px) {
    display: flex;
  }
`;

const NavLinksWrapper = styled.nav<{ $showMenu?: boolean }>`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (width <= 768px) {
    display: none;
  }
`;

const NavLinksMobileWrapper = styled(NavLinksWrapper)<{ $showMenu?: boolean }>`
  display: none;
  position: absolute;
  top: calc(75.828px + 10px); /* Position below the menu icon */
  left: 0;
  width: 100%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 15px; /* Adjusted padding for better spacing */
  background: #fff;
  box-shadow: 0 4px 6px rgb(0 0 0 / 10%);
  transition:
    opacity 0.3s ease,
    transform 0.3s ease; /* Added transition effects */

  @media (width <= 768px) {
    display: ${(props) => (props.$showMenu ? "flex" : "none")};
    flex-direction: column;
    text-align: center; /* Center-align text */
  }

  &:hover {
    opacity: 0.95; /* Slightly reduce opacity on hover */
    transform: translateY(2px); /* Add a subtle lift effect on hover */
  }
`;
//#endregion Styled Components

export {
  NavWrapper,
  Logo,
  NavLinksWrapper,
  NavLinksMobileWrapper,
  MenuIconWrapper,
};
