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
import {
  addEmail,
  addMobilePhone,
  addDescription,
  submitRequest,
  getHandlerState,
} from "./ContactForm.signals"; // Importing Count from the signals file

function ContactFormComponent() {
  return (
    <ContactFormComponentStyle>
      {getHandlerState() == false ? (
        <ContactUsInnerWrapperStyle>
          {/* contact us wrapper */}
          <ContactUsInitialWrapperStyle>
            <ContactUsComponentTitleWrapperStyle>
              Contact us
            </ContactUsComponentTitleWrapperStyle>
            <ContactUsComponentContentWrapperStyle>
              <ContactUsComponentSmallInputWrapperStyle>
                <ContactUsComponentSmallInputStyle
                  onChange={(e) => addEmail(e.target.value)}
                  placeholder="Email"
                ></ContactUsComponentSmallInputStyle>
              </ContactUsComponentSmallInputWrapperStyle>
              <ContactUsComponentSmallInputWrapperStyle>
                <ContactUsComponentSmallInputStyle
                  onChange={(e) => addMobilePhone(e.target.value)}
                  placeholder="Mobile Phone"
                ></ContactUsComponentSmallInputStyle>
              </ContactUsComponentSmallInputWrapperStyle>
              <ContactUsComponentBigInputWrapperStyle>
                <ContactUsComponentBigInputStyle
                  onChange={(e) => addDescription(e.target.value)}
                  placeholder="Message"
                ></ContactUsComponentBigInputStyle>
              </ContactUsComponentBigInputWrapperStyle>
            </ContactUsComponentContentWrapperStyle>
            <ContactUsComponentSubmitBtnWrapperStyle>
              <BoxInfoBtn
                onHoverBackgroundColor={"#D7E6F0"}
                normalViewFontSize={1.2}
                mobileViewFontSize={4.2}
                onClick={() => submitRequest()}
              >
                Submit
              </BoxInfoBtn>
            </ContactUsComponentSubmitBtnWrapperStyle>
          </ContactUsInitialWrapperStyle>
        </ContactUsInnerWrapperStyle>
      ) : (
        <ContactUsComponentTitleWrapperStyle>
          Thanks!We will get back to you soon!
        </ContactUsComponentTitleWrapperStyle>
      )}
    </ContactFormComponentStyle>
  );
}

export default ContactFormComponent;
