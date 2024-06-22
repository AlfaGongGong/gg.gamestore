import React from "react";
import { Link } from "react-router-dom";
import "./Error.scss";

function Error({ errorNumber, errorType }) {
  return (
    <main id="errors">
      <h1>
        Error {errorNumber} ({errorType})
      </h1>
      <p>
        {`The ${errorType} you are looking for does not exist. Please return to the home page.`}
      </p>
      <Link to="/" replace>
        <button>Back to home</button>
      </Link>
    </main>
  );
}

export default Error;
