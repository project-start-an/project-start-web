import { styled } from "@mui/material/styles";

type MainWrapperInputProps = {
  bannerImg: string;
};

const MainWrapper = styled("div")<MainWrapperInputProps>(({ bannerImg }) => ({
  backgroundImage: `url(${bannerImg})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center bottom",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  height: "100%",
  width: "100%",
}));

const InnerWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "center",
  height: "100%",
  width: "80%",
});

type TitleInputProps = {
  color: string;
};

const Title = styled("h2")<TitleInputProps>(({ color }) => ({
  color: `${color}`,
  fontFamily: "Ubuntu",
  fontWeight: "500",
  fontSize: "4dvh",
  alignSelf: "flex-start",

  "@media (max-width: 768px)": {
    alignSelf: "center",
  },
}));

const ContentWrapper = styled("div")({
  height: "80%",
  width: "100%",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",

  "@media (max-width: 768px)": {
    alignItems: "center",
    flexDirection: "column",
  },
});

const BoxWrapper = styled("div")({
  height: "78%",
  width: "84%",
  display: "flex",
  borderRadius: "0.4em",
  backgroundColor: "#D7E6F0",
  alignItems: "center",
  boxShadow: "rgba(0, 0, 0, 0.25) 0.8px 2px 6px 2px",
  "@media (max-width: 768px)": {
    width: "100%",
    height: "78%",
  },
});

const LeftSectionWrapper = styled("div")({
  height: "100%",
  width: "55%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "@media (max-width: 768px)": {
    width: "100%",
  },
});

const LeftSectionInnerWrapper = styled("div")({
  // Add your default styles here
  height: "70%",
  width: "80%",
  display: "flex",
  // backgroundColor: "grey",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  "@media (max-width: 768px)": {},
});

const RightSectionWrapper = styled("div")({
  // Add your default styles here
  height: "100%",
  width: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@media (max-width: 768px)": {
    display: "none",
  },
});

const ImageStyle: React.CSSProperties = {
  height: "85%",
  width: "85%",
  objectFit: "contain",
};

const FieldWrapper = styled("div")({
  height: "16%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  fontFamily: "Ubuntu",
  fontWeight: "600",
  cursor: "pointer",
  fontSize: "0.95dvw",
  "@media (max-width: 768px)": {
    fontSize: "3dvw",
  },

  "&:hover": {
    opacity: 0.9,
  },
});

const IconWrapper = styled("div")({
  height: "100%",
  width: "12%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media (max-width: 768px)": {},
  "& img": {
    width: "42%",
    height: "100%",
  },
});

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
