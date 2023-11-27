# Client Side Abstract Service Configuration

## Setup

I created a simple abstract function that can be found: [service-config](../src//services/api-client.config.ts) and looks like this:

```typescript
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

    const response = await fetch(`${baseURL}${url}`, requestOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();

    console.log(responseData);
  } catch (error) {
    console.error("Error:", error);
  }
};
```

- the function has as an argument **method**: (POST, GET, PUT and etc.)
- argument **url** get the path to the exact endpoint (e.g. "cars/getAll")
- optional argumen **data** gets any possible data that you might as a body in POST request

## Usage

- You need to import the function like:

```
import { baseRequest } from "<path-to-service-dir>";
```

- After that you can execute the function wherever you want:

```
###POST
const postRequest = async (url: string, data: FormData) => {
  await baseRequest("POST", url, data);
};
```

```
###GET
export const getRequest = async (url: string) => {
  await baseRequest("GET", url);
};
```

## To do

- Add the **base_url** configuration in an environmental file, once the server-side is deployed to the !
