import React, { useState } from "react";

function Emoji() {
  const [happy, setHappy] = useState(true);

  return (
    <div style={{ fontSize: "3rem", textAlign: "center", margin: "1rem" }}>
      <span role="img" aria-label={happy ? "happy" : "sad"}>
        {happy ? "😊" : "😢"}
      </span>
      <br />
      <button onClick={() => setHappy((mood) => !mood)}>Change Mood</button>
    </div>
  );
}

export default Emoji;
