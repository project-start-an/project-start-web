import styled from "styled-components";

//#region Styled Components
const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  height: 100%;
`;

const UpPolygonWrapper = styled.div`
  align-self: center;
  height: 15%;

  @media (max-width: 768px) {
    display: none;
  }
`;

const UpPolygonStyle = {
  height: "100%",
};

const HorizontalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  height: 40%;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const SidePolygonWrapper = styled.div`
  height: 100%;
  width: 5%;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SidePolygonStyle = {
  height: "100%",
  width: "100%",
};

const LeftSection = styled.div`
  height: 100%;
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 5%;
  margin-left: 5%;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: flex-end;
    width: 80%;
    margin-top: 0%;
    margin-left: 0%;
  }
`;

const HomePageTitlesWrapperStyled = styled.div`
  @media (max-width: 768px) {
    margin-top: 10%;
    text-align: center;
  }
`;

const TitleText = styled.span`
  color: #000;
  font-family: Ubuntu;
  font-size: min(4vw, 3rem);
  font-style: normal;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 6vw;
    font-weight: 600;
  }
`;

const TitleBlueText = styled(TitleText)`
  color: #516a91;
  font-size: min(5.9vw, 4rem);
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 8vw;
    font-weight: 600;
  }
`;

const rightAssetStyle = {
  height: "100%",
  width: "100%",
  objectFit: "contain",
};

const RightSection = styled.div`
  height: 100%;
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: 5%;

  @media (max-width: 768px) {
    width: 82%;
    margin-right: 0%;
  }
`;

const BottomPolygonWrapper = styled.div`
  align-self: center;
  height: 10%;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ButtonWrapper = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 768px) {
    height: 20%;
    justify-content: center;
  }
`;

type BtnProps = {
  onHoverBackgroundColor: string;
};

const Button = styled.button<BtnProps>`
  width: 12.5rem;
  padding: 1rem;
  height: 3.5rem;
  font-weight: 600;
  border-radius: 1rem;
  display: flex;
  color: #ffffff;
  font-family: Ubuntu;
  font-size: 1.5rem;
  align-items: center;
  justify-content: center;
  background-color: #065a82;
  border: 0.15em solid #065a82;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 10.5rem;
    font-size: 1.4rem;
  }

  &:hover {
    color: rgb(0 0 0 / 90%);
    background-color: ${(props) => props.onHoverBackgroundColor};
  }
`;
//#endregion

export {
  MainWrapper,
  UpPolygonWrapper,
  UpPolygonStyle,
  HorizontalWrapper,
  SidePolygonWrapper,
  SidePolygonStyle,
  LeftSection,
  RightSection,
  ButtonWrapper,
  Button,
  rightAssetStyle,
  BottomPolygonWrapper,
  TitleText,
  TitleBlueText,
  HomePageTitlesWrapperStyled,
};
