import React from "react";
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

const HorizontalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  height: 40%;
  overflow: hidden;

  @media (width <= 768px) {
    flex-direction: column-reverse;
  }
`;

const SidePolygonWrapper = styled.div`
  height: 100%;
  width: 5%;

  @media (width <= 768px) {
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

  @media (width <= 768px) {
    flex-direction: column-reverse;
    justify-content: flex-end;
    width: 80%;
    margin-top: 0%;
    margin-left: 0%;
  }
`;

const HomePageTitlesWrapperStyled = styled.div`
  @media (width <= 768px) {
    margin-top: 10%;
    text-align: center;
  }
`;

const TitleText = styled.span`
  color: #000;
  font-family: Ubuntu, sans-serif;
  font-size: min(4vw, 3rem);
  font-style: normal;
  font-weight: 400;

  @media (width <= 768px) {
    font-size: 6vw;
    font-weight: 600;
  }
`;

const TitleBlueText = styled(TitleText)`
  color: #516a91;
  font-size: min(5.9vw, 4rem);
  font-weight: 500;

  @media (width <= 768px) {
    font-size: 8vw;
    font-weight: 600;
  }
`;

const rightAssetStyle: React.CSSProperties = {
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

  @media (width <= 768px) {
    width: 82%;
    margin-right: 0%;
  }
`;

const BottomPolygonWrapper = styled.div`
  align-self: center;
  height: 10%;

  @media (width <= 768px) {
    display: none;
  }
`;
//#endregion Styled Components

export {
  MainWrapper,
  HorizontalWrapper,
  SidePolygonWrapper,
  SidePolygonStyle,
  LeftSection,
  RightSection,
  rightAssetStyle,
  BottomPolygonWrapper,
  TitleText,
  TitleBlueText,
  HomePageTitlesWrapperStyled,
};
