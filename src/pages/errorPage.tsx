import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>
          {isRouteErrorResponse(error)
            ? // note that error is type `ErrorResponse`
              error.error?.message || error.statusText
            : "Unknown error message"}
        </i>
      </p>
    </div>
  );
}
