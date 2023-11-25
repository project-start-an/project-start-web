import { styled } from "@mui/material";

const ContactFormComponentStyle = styled("div")({
  width: "50%",
  height: "90%",
  borderRadius: "0.4em",
  backgroundColor: "#D7E6F0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "rgba(0, 0, 0, 0.25) 0.8px 2px 6px 2px",

  "@media (max-width: 768px)": {
    width: "86%",
    height: "80%",
  },
});

const ContactUsInnerWrapperStyle = styled("div")({
  width: "98%",
  height: "98%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

//#region Contact Us wrapper
const ContactUsInitialWrapperStyle = styled("div")({
  width: "86%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  //   backgroundColor: "grey",
  alignItems: "center",
  justifyContent: "center",
});

const ContactUsComponentTitleWrapperStyle = styled("div")({
  width: "100%",
  height: "15%",
  display: "flex",
  fontFamily: "Ubuntu",
  fontWeight: "600",
  fontSize: "1.5vw",
  // backgroundColor: "red",
  alignItems: "center",
  justifyContent: "center",

  "@media (max-width: 768px)": {
    fontSize: "6vw",
  },
});

const ContactUsComponentContentWrapperStyle = styled("div")({
  width: "100%",
  height: "65%",
  display: "flex",
  flexDirection: "column",
  fontFamily: "Ubuntu",
  fontWeight: "600",
  fontSize: "1.5vw",
  alignItems: "center",
  justifyContent: "center",
});

const ContactUsComponentSmallInputWrapperStyle = styled("div")({
  width: "100%",
  height: "20%",
  display: "flex",
  fontFamily: "Ubuntu",
  fontWeight: "600",
  fontSize: "1.5vw",
  // backgroundColor: "red",
  alignItems: "center",
  justifyContent: "flex-start",
});

const ContactUsComponentSmallInputStyle = styled("input")({
  width: "60%",
  paddingLeft: "1.5%",
  height: "80%",
  display: "flex",
  fontFamily: "Ubuntu",
  fontWeight: "600",
  fontSize: "0.88vw",
  border: "none",
  borderRadius: "0.25em",
  alignItems: "center",
  justifyContent: "center",

  "@media (max-width: 768px)": {
    fontSize: "3.5vw",
    width: "80%",
  },

  "&:focus": {
    outline: "0",
  },
});

const ContactUsComponentBigInputWrapperStyle = styled("div")({
  width: "100%",
  height: "60%",
  display: "flex",
  fontFamily: "Ubuntu",
  fontWeight: "600",
  fontSize: "1.5vw",
  // backgroundColor: "grey",
  alignItems: "center",
  justifyContent: "flex-start",
});

const ContactUsComponentBigInputStyle = styled("textarea")({
  width: "90%",
  paddingLeft: "1.5%",
  paddingTop: "2%",
  height: "86%",
  display: "flex",
  fontFamily: "Ubuntu",
  fontWeight: "600",
  color: "grey",
  fontSize: "0.88vw",
  border: "none",
  borderRadius: "0.25em",
  alignItems: "center",
  justifyContent: "center",

  "@media (max-width: 768px)": {
    width: "100%",
    fontSize: "3.5vw",
  },

  "&:focus": {
    outline: "0",
  },
});

const ContactUsComponentSubmitBtnWrapperStyle = styled("div")({
  width: "100%",
  height: "20%",
  display: "flex",
  fontFamily: "Ubuntu",
  fontWeight: "600",
  fontSize: "1.5vw",
  // backgroundColor: "red",
  alignItems: "center",
  justifyContent: "center",
});

//#endregion

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
