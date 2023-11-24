import { BoxInfoBtn } from "../services/Services.styled";
import {
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
} from "./ContactForm.styled";

//usage of signals
// import { signal } from "@preact/signals-react";

// const count = signal(2);

function ContactFormComponent() {
  return (
    <ContactFormComponentStyle>
      <ContactUsInnerWrapperStyle>
        {/* contact us wrapper */}
        <ContactUsInitialWrapperStyle>
          <ContactUsComponentTitleWrapperStyle>
            Contact us
          </ContactUsComponentTitleWrapperStyle>
          <ContactUsComponentContentWrapperStyle>
            <ContactUsComponentSmallInputWrapperStyle>
              <ContactUsComponentSmallInputStyle placeholder="Email"></ContactUsComponentSmallInputStyle>
            </ContactUsComponentSmallInputWrapperStyle>
            <ContactUsComponentSmallInputWrapperStyle>
              <ContactUsComponentSmallInputStyle placeholder="Mobile Phone"></ContactUsComponentSmallInputStyle>
            </ContactUsComponentSmallInputWrapperStyle>
            <ContactUsComponentBigInputWrapperStyle>
              <ContactUsComponentBigInputStyle placeholder="Message"></ContactUsComponentBigInputStyle>
            </ContactUsComponentBigInputWrapperStyle>
          </ContactUsComponentContentWrapperStyle>
          <ContactUsComponentSubmitBtnWrapperStyle>
            <BoxInfoBtn
              onHoverBackgroundColor={"#D7E6F0"}
              normalViewFontSize={1}
              mobileViewFontSize={3.8}
            >
              Submit
            </BoxInfoBtn>
          </ContactUsComponentSubmitBtnWrapperStyle>
        </ContactUsInitialWrapperStyle>
      </ContactUsInnerWrapperStyle>
    </ContactFormComponentStyle>
  );
}

export default ContactFormComponent;
