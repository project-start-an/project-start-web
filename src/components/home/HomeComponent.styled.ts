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

  @media (width <= 768px) {
    justify-content: center;
    align-items: center;
  }
`;

const HorizontalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  height: 40%;
  overflow: hidden;

  @media (width <= 768px) {
    height: 100%;
    justify-content: center;
    align-items: center;
    flex: unset;
    overflow: unset;
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
    margin-top: unset;
    margin-left: unset;
    width: 100%;
    height: 30%;
  }
`;

const HomePageTitlesWrapperStyled = styled.div`
  @media (width <= 768px) {
    margin-top: 10%;
    text-align: center;
    width: 80%;
  }
`;

const TitleText = styled.span`
  color: #000;
  font-family: Ubuntu, sans-serif;
  font-size: min(4vw, 3rem);
  font-style: normal;
  font-weight: 400;

  @media (width <= 768px) {
    font-size: clamp(1.5rem, -0.5rem + 5.5vw, 4rem);
    font-weight: 600;
  }
`;

const TitleBlueText = styled(TitleText)`
  color: #516a91;
  font-size: min(5.9vw, 4rem);
  font-weight: 500;

  @media (width <= 768px) {
    font-size: clamp(2rem, -0.5rem + 6.5vw, 5rem);
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
    width: 100%;
    height: 50%;
    margin-right: unset;
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
