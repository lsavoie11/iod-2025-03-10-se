import React, { useState } from "react";

function AddCatForm({ onAddCat }) {
  const [name, setName] = useState("");
  const [latinName, setLatinName] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !latinName.trim() || !image.trim()) return;
    onAddCat({ name, latinName, image });
    setName("");
    setLatinName("");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: "0.5rem" }}
        required
      />
      <input
        type="text"
        placeholder="Latin Name"
        value={latinName}
        onChange={(e) => setLatinName(e.target.value)}
        style={{ marginRight: "0.5rem" }}
        required
      />
      <input
        type="url"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        style={{ marginRight: "0.5rem" }}
        required
      />
      <button type="submit">Add Cat</button>
    </form>
  );
}

export default AddCatForm;
