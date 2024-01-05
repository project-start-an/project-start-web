import styled from "styled-components";

//#region Styled Components
const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 10px;
  background: linear-gradient(135deg, #065a82, #044c67);
  box-shadow: 0 4px 6px rgb(0 0 0 / 10%);
  color: white;
`;

const Logo = styled.h2`
  color: whitesmoke;
  font-family: Ubuntu, sans-serif;
  font-weight: 600;
  width: 30%;
  margin-inline: auto;
  transition:
    transform 0.3s ease,
    color 0.3s ease;

  &:hover {
    transform: scale(1.2) translateX(15%); /* Increase the size on hover */
    font-weight: bold;
    color: #d7e6f0;
  }
`;

const MenuIconWrapper = styled.div`
  display: none;
  cursor: pointer;
  width: 60%;
  justify-content: flex-end;
  margin-right: 2.5rem;

  @media (width <= 768px) {
    display: flex;
  }
`;

const MenuIcon = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
`;

const Line = styled.div`
  width: 30px;
  height: 3px;
  background-color: whitesmoke;
  margin: 6px 0;
  transition: 0.4s;
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
  background: linear-gradient(135deg, #065a82, #044c67);
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
  MenuIcon,
  Line,
};
