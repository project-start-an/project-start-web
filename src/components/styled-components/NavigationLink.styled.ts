import styled from "styled-components";
import { Link } from "@mui/material";

const NavigationLink = styled(Link)`
  text-decoration: none;
  color: black;
  margin-inline: 2.5rem;
  font-family: "Inter";
  font-weight: 600;
  font-size: 0.8vw;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default NavigationLink;
