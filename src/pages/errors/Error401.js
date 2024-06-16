import { Link } from "react-router-dom";

import "./Errors.scss";
function Error() {
  return (
    <main id="errors">
      <h1>Error 401 (Unauthorized)</h1>
      <p>
        You are not authorized to view this page. Please log in to access this
        page.
      </p>
      <Link to='/' replace >
        <button>Back to Home</button>
      </Link>
    </main>
  );
}

export default Error401;
