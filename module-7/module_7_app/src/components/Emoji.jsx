import React from "react";
import { useMood } from "./MoodContext";

function Emoji() {
  const { happy, toggleMood } = useMood();

  return (
    <div style={{ fontSize: "3rem", textAlign: "center", margin: "1rem" }}>
      <span role="img" aria-label={happy ? "happy" : "sad"}>
        {happy ? "😊" : "😢"}
      </span>
      <br />
      <button onClick={toggleMood}>Change Mood</button>
    </div>
  );
}

export default Emoji;
