import styled from "styled-components";

const FieldWrapper = styled.div`
  height: 10%;
  font-size: clamp(0.8rem, 1.4vw, 1.2rem);
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: Ubuntu, sans-serif;
  font-weight: 500;
  cursor: pointer;

  /* font-size: clamp(0.5rem, 3vw, 0.8rem); */

  &:hover {
    opacity: 0.9;
  }

  @media (width <= 768px) {
    font-size: 0.9rem;
  }
`;

const IconWrapper = styled.div`
  height: 100%;
  width: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: 42%;
    height: 100%;
  }
`;

export { FieldWrapper, IconWrapper };
