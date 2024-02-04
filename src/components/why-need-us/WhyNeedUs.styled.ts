import styled from "styled-components";

//#region Styled Components
type MainWrapperInputProps = {
  bannerImg: string;
};

const MainWrapper = styled.div<MainWrapperInputProps>`
  background-image: url(${(props) => props.bannerImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center bottom;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;

  @media (width <= 900px) {
    background-image: unset;
    background-color: #fff;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 80%;
`;

type TitleInputProps = {
  color: string;
};

const Title = styled.h2<TitleInputProps>`
  color: ${(props) => props.color};
  font-family: Ubuntu, sans-serif;
  font-weight: 500;
  font-size: 4vh;
  align-self: flex-start;

  @media (width <= 768px) {
    align-self: center;
  }
`;

const ContentWrapper = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (width <= 768px) {
    align-items: center;
    flex-direction: column;
  }
`;

const BoxWrapper = styled.div`
  height: 78%;
  width: 84%;
  display: flex;
  border-radius: 0.4em;
  background-color: #d7e6f0;
  align-items: center;

  @media (width <= 900px) {
    width: 100%;
  }

  @media (width <= 768px) {
    width: 100%;
    height: 78%;
  }
`;

const LeftSectionWrapper = styled.div`
  height: 100%;
  width: 55%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (width <= 768px) {
    width: 100%;
  }
`;

const LeftSectionInnerWrapper = styled.div`
  height: 70%;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (width <= 768px) {
    width: 96%;
  }
`;

const RightSectionWrapper = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (width <= 768px) {
    display: none;
  }
`;

const ImageStyle: React.CSSProperties = {
  height: "85%",
  width: "85%",
  objectFit: "contain",
};

const FieldWrapper = styled.div`
  height: 16%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: Ubuntu, sans-serif;
  font-weight: 500;
  cursor: pointer;
  font-size: clamp(0.5rem, 3vw, 0.8rem);

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
//#endregion Styled Components

export {
  MainWrapper,
  InnerWrapper,
  Title,
  ContentWrapper,
  BoxWrapper,
  LeftSectionWrapper,
  LeftSectionInnerWrapper,
  RightSectionWrapper,
  ImageStyle,
  FieldWrapper,
  IconWrapper,
};
