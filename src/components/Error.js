import React from "react";

function Error({ message }) {
  return (
    <div
      style={{
        fontSize: "25px",
        fontWeight: "bold",
        textAlign: "center",
        color: "red",
      }}
    >
      Error: {message}
    </div>
  );
}

export default Error;
