import styled from "styled-components";

const ResponsiveInnerWrapper = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default ResponsiveInnerWrapper;
