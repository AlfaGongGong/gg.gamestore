import React from "react";

function Widget({ children }) {
  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>{children}</div>
  );
}

export default Widget;
