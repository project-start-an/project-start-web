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
  height: 10%;
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
`;

const SidePolygonWrapper = styled.div`
  height: 100%;
  width: 5%;
`;

const SidePolygonStyle = {
  height: "100%",
  width: "100%",
};

const MiddleSectionWrapper = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  @media (max-width: 768px) {
    width: 78%;
  }
`;

const MiddleSectionInnerWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  flex-direction: column;
  gap: 2rem;
`;

const MiddleSectionTitle = styled.div`
  color: #000;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: "Ubuntu";
  font-size: min(7vw, 4.375rem);
  font-style: normal;
  font-weight: 400;
  line-height: 84px;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 8vw;
    font-weight: 600;
  }
`;

const MiddleSectionDescription = styled.div`
  color: #000;
  text-align: center;
  font-family: "Ubuntu";
  font-size: min(3vw, 2rem);
  font-style: italic;
  font-weight: 400;
  line-height: normal;

  @media (max-width: 768px) {
    font-size: 5.2vw;
    font-weight: 500;
  }
`;

const BottomPolygonWrapper = styled.div`
  align-self: center;
  height: 10%;
  margin-left: 30%;

  @media (max-width: 768px) {
    display: none;
  }
`;

const BottomPolygonStyle = {
  height: "calc(100% + 5rem)",
};

const ButtonWrapper = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  font-family: "Ubuntu";
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
    color: rgba(0, 0, 0, 0.9);
    background-color: ${(props) => props.onHoverBackgroundColor};
  }
`;
//#endregion Styled Components

export {
  MainWrapper,
  UpPolygonWrapper,
  UpPolygonStyle,
  HorizontalWrapper,
  SidePolygonWrapper,
  SidePolygonStyle,
  ButtonWrapper,
  Button,
  BottomPolygonWrapper,
  BottomPolygonStyle,
  MiddleSectionWrapper,
  MiddleSectionInnerWrapper,
  MiddleSectionTitle,
  MiddleSectionDescription,
};
