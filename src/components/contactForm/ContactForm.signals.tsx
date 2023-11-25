import { signal } from "@preact/signals-react";
import { getBaseUrl } from "../../services/api-client.config";

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

const postRequest = async (url: string, data: FormData) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();

    console.log(responseData);
  } catch (error) {
    console.error("Error:", error);
  }
};

const submitRequest = (): void => {
  if (!email.value || !mobilePhone.value || !description.value) {
    console.error("All fields are required");
    return;
  }

  if (!validateEmail(email.value)) {
    console.error();
    return;
  }

  const formData: FormData = {
    email: email.value,
    mobilePhone: mobilePhone.value,
    description: description.value,
  };

  postRequest(`${getBaseUrl}formInputs/addNewInput`, formData);

  changeHandlerState(true);
  console.log(formData);
};

export {
  addEmail,
  addMobilePhone,
  addDescription,
  submitRequest,
  getHandlerState,
  changeHandlerState,
};
