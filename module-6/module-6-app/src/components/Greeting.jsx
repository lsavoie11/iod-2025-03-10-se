import React from "react";

function Greeting({ name, children }) {
  return (
    <div>
      <h2>Hello {name ? name : "World"}</h2>
      {children && <div>{children}</div>}
    </div>
  );
}

export default Greeting;
