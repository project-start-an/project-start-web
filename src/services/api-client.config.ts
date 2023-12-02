const baseURL = import.meta.env.VITE_BE_URL || "";

interface RequestOptions {
  method: string;
  headers: HeadersInit;
  body?: string;
}

export const baseRequest = async (
  method: string,
  url: string,
  data?: object,
) => {
  try {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };

    const requestOptions: RequestOptions = {
      method: method.toUpperCase(),
      headers,
    };

    if (data) {
      requestOptions.body = JSON.stringify(data);
    }

    const response = await fetch(`${baseURL}/${url}`, requestOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();

    console.log(responseData);
  } catch (error) {
    console.error("Error:", error);
  }
};
