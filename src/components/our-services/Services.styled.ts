import styled from "styled-components";

//#region Styled Components
type MainWrapperInputProps = {
  bannerImg: string;
};

const MainWrapper = styled.div<MainWrapperInputProps>`
  background-image: url(${(props) => props.bannerImg});
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;

  @media (width <= 900px) {
    background-image: unset;
    background-color: #21295c;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 80%;

  @media (width <= 900px) {
    width: 50%;
  }

  @media (width <= 768px) {
    width: 60%;
  }

  @media (width <= 500px) {
    width: 70%;
  }
`;

const Title = styled.h2`
  color: white;
  font-family: Ubuntu, sans-serif;
  font-weight: 500;
  font-size: 4vh;
  align-self: flex-start;

  @media (width <= 900px) {
    align-self: center;
    margin-bottom: 4rem;
  }

  @media (width <= 768px) {
    margin-bottom: 2rem;
  }
`;

const ContentWrapper = styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (width <= 900px) {
    align-items: center;
    flex-direction: column;
    height: 100%;
    display: none;
  }

  @media (width <= 768px) {
    align-items: center;
    flex-direction: column;
    height: 100%;
    display: none;
  }
`;

const BoxWrapper = styled.div`
  height: 80%;
  width: 25%;
  border-radius: 0.5em;
  background-color: #d7e6f0;
  box-shadow: 0 -4px 3px rgb(50 50 50 / 75%);
  display: flex;
  flex-direction: column;

  @media (width <= 900px) {
    height: 94%;
    box-shadow: none;
    width: 100%;
  }
`;

const BoxHeaderVisAssetWrapper = styled.div`
  height: 15%;
  width: 100%;
  position: relative;
  font-family: Ubuntu, sans-serif;
  font-weight: 600;
  font-size: 1.3vw;
  align-items: flex-start;
  justify-content: center;

  @media (width <= 900px) {
    display: none;
  }

  @media (width <= 768px) {
    font-size: 4.5vw;
  }
`;

const BoxHeaderVisAsset = styled.div`
  position: absolute;
  top: -60%;
  left: 50%;
  transform: translateX(-50%);
  width: 34%;
  display: flex;
  height: 160%;
  font-family: Ubuntu, sans-serif;
  font-weight: 600;
  font-size: 1.3vw;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 0.2em;
  z-index: 1;

  & img {
    height: 100%;
  }

  @media (width <= 768px) {
    font-size: 4.5vw;
  }
`;

const BoxTitle = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  font-family: Ubuntu, sans-serif;
  font-weight: 600;
  font-size: 1.3vw;
  align-items: flex-end;
  justify-content: center;

  @media (width <= 900px) {
    margin-top: 4rem;
    font-size: clamp(0.7rem, 5vw, 1.4rem);
    text-align: center;
  }
`;

const BoxContentWrapper = styled.div`
  height: 55%;
  width: 80%;
  margin-left: 10%;
  display: flex;
  font-family: Ubuntu, sans-serif;
  font-weight: 600;
  font-size: 1.1vw;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (width <= 900px) {
    gap: 0.5rem;
    margin-left: 5%;
  }
`;

const BoxInfoBtnWrapper = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

type BtnProps = {
  onHoverBackgroundColor: string;
};

const BoxInfoBtn = styled.div<BtnProps>`
  height: 58%;
  width: 36%;
  display: flex;
  border-radius: 0.6em;
  color: #fff;
  font-family: Ubuntu, sans-serif;
  font-weight: 500;
  font-size: 1.1rem;
  align-items: center;
  justify-content: center;
  background-color: #065a82;
  border: 0.15em solid #065a82;
  cursor: pointer;

  @media (width <= 768px) {
    width: 48%;
    height: 54%;
    border-radius: 1.2rem;
    font-size: 1.3rem;
    font-weight: 500;
  }

  &:hover {
    color: rgb(0 0 0 / 90%);
    background-color: ${(props) => props.onHoverBackgroundColor};
  }
`;
//#endregion Styled Components

export {
  MainWrapper,
  InnerWrapper,
  Title,
  ContentWrapper,
  BoxWrapper,
  BoxHeaderVisAssetWrapper,
  BoxHeaderVisAsset,
  BoxTitle,
  BoxContentWrapper,
  BoxInfoBtnWrapper,
  BoxInfoBtn,
};
