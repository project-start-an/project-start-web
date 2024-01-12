import styled from "styled-components";

//#region Styled Components
const ContactFormComponentStyle = styled.div`
  width: 50%;
  height: 90%;
  border-radius: 0.4em;
  background-color: #d7e6f0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgb(0 0 0 / 25%) 0.8px 2px 6px 2px;

  @media (width <= 768px) {
    width: 86%;
    height: 80%;
  }
`;

const ContactUsInnerWrapperStyle = styled.div`
  width: 98%;
  height: 98%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContactUsInitialWrapperStyle = styled.div`
  width: 86%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContactUsComponentTitleWrapperStyle = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  font-family: Ubuntu, sans-serif;
  font-weight: 600;
  font-size: 1.5vw;
  align-items: center;
  justify-content: center;

  @media (width <= 768px) {
    font-size: 6vw;
  }
`;

const ContactUsComponentContentWrapperStyle = styled.div`
  width: 100%;
  height: 65%;
  display: flex;
  flex-direction: column;
  font-family: Ubuntu, sans-serif;
  font-weight: 600;
  font-size: 1.5vw;
  align-items: center;
  justify-content: center;
`;

const ContactUsComponentSmallInputWrapperStyle = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  font-family: Ubuntu, sans-serif;
  font-weight: 600;
  font-size: 1.5vw;
  align-items: center;
  justify-content: flex-start;
`;

const ContactUsComponentSmallInputStyle = styled.input`
  width: 60%;
  padding-left: 1.5%;
  height: 80%;
  font-family: Ubuntu, sans-serif;
  font-weight: 600;
  font-size: 0.88vw;
  border: none;
  border-radius: 0.25em;
  align-items: center;
  justify-content: center;

  @media (width <= 768px) {
    font-size: 3.5vw;
    width: 80%;
  }

  &:focus {
    outline: 0;
  }
`;

const ContactUsComponentBigInputWrapperStyle = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  font-family: Ubuntu, sans-serif;
  font-weight: 600;
  font-size: 1.5vw;
  align-items: center;
  justify-content: flex-start;
`;

const ContactUsComponentBigInputStyle = styled.textarea`
  width: 90%;
  padding-left: 1.5%;
  padding-top: 2%;
  height: 86%;
  font-family: Ubuntu, sans-serif;
  font-weight: 600;
  color: black;
  font-size: 0.88vw;
  border: none;
  border-radius: 0.25em;
  align-items: center;
  justify-content: center;
  resize: none;

  @media (width <= 768px) {
    width: 100%;
    font-size: 3.5vw;
  }

  &:focus {
    outline: 0;
  }
`;

const ContactUsComponentSubmitBtnWrapperStyle = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  font-family: Ubuntu, sans-serif;
  font-weight: 600;
  font-size: 1.5vw;
  align-items: center;
  justify-content: center;
`;

//#endregion Styled Components

export {
  ContactFormComponentStyle,
  ContactUsInnerWrapperStyle,
  ContactUsInitialWrapperStyle,
  ContactUsComponentTitleWrapperStyle,
  ContactUsComponentContentWrapperStyle,
  ContactUsComponentSubmitBtnWrapperStyle,
  ContactUsComponentSmallInputWrapperStyle,
  ContactUsComponentBigInputWrapperStyle,
  ContactUsComponentSmallInputStyle,
  ContactUsComponentBigInputStyle,
};
