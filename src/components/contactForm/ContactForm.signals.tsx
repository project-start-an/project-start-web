import { signal } from "@preact/signals-react";

interface FormData {
  email: string;
  mobilePhone: string;
  description: string;
}

const email = signal("");
const mobilePhone = signal("");
const description = signal("");
const checkHandler = signal(false);

const addEmail = (newEmail: string) => {
  return (email.value = newEmail);
};

const addMobilePhone = (newPhone: string) => {
  return (mobilePhone.value = newPhone);
};

const addDescription = (newDescription: string) => {
  return (description.value = newDescription);
};

const getHandlerState = () => {
  return checkHandler.value;
};

const changeHandlerState = (newState: boolean) => {
  return (checkHandler.value = newState);
};

const validateEmail = (email: string): boolean => {
  // Simple email validation
  return /\S+@\S+\.\S+/.test(email);
};

const submitRequest = (): void => {
  if (!email.value || !mobilePhone.value || !description.value) {
    console.error("All fields are required");
    return;
  }

  if (!validateEmail(email.value)) {
    console.error("Invalid email format");
    return;
  }

  const formData: FormData = {
    email: email.value,
    mobilePhone: mobilePhone.value,
    description: description.value,
  };

  changeHandlerState(true);
  console.log(formData);
};

export {
  addEmail,
  addMobilePhone,
  addDescription,
  submitRequest,
  getHandlerState,
};
