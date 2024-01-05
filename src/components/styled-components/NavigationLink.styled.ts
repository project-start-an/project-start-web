import styled from "styled-components";

const NavigationLink = styled.a`
  color: whitesmoke;
  text-decoration: none;
  margin-inline: 2.5rem;
  font-family: Ubuntu, sans-serif;
  font-weight: 600;
  font-size: clamp(0.85rem, -0.5rem + 2.8125vw, 1.3rem);

  &:hover {
    border-radius: 10px;
    padding: 15px; /* Increased padding on hover for emphasis */
    background: linear-gradient(
      135deg,
      #516a91,
      #42587b
    ); /* Gradient for a subtle shading effect */

    color: white;
    box-shadow: 0 4px 8px rgb(0 0 0 / 20%); /* Box shadow for a lifted appearance */
    transition: all 0.3s ease; /* Smooth transition for all properties */
  }

  @media (width <= 768px) {
    margin-inline: 0;
    margin-bottom: 10px;
    font-size: 1rem;
  }
`;

export default NavigationLink;
