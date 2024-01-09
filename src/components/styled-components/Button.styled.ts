import styled from "styled-components";

type BtnWrapperProps = {
  position: "flex-start" | "flex-end" | "center";
};

const ButtonWrapper = styled.div<BtnWrapperProps>`
  height: 20%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.position};

  @media (width <= 768px) {
    height: 20%;
    justify-content: center;
  }
`;

const Button = styled.button`
  width: 12.5rem;
  padding: 1rem;
  height: 3.5rem;
  font-weight: 600;
  border-radius: 1rem;
  display: flex;
  font-family: Ubuntu, sans-serif;
  font-size: 1.5rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (width <= 768px) {
    height: 3rem;
    width: clamp(8.438rem, 30%, 10.5rem);
    font-size: clamp(1rem, -0.5rem + 2.8vw, 1.3rem);
  }
`;

const DarkButton = styled(Button)`
  background-color: #065a82;
  color: #fff;
  border: 0.15em solid #065a82;

  &:hover {
    color: rgb(0 0 0 / 90%);
    background-color: #fff;
  }
`;

const LightButton = styled(Button)`
  color: rgb(0 0 0 / 90%);
  background-color: #fff;

  &:hover {
    color: #fff;
    background-color: #065a82;
  }
`;

export { ButtonWrapper, LightButton, DarkButton };
