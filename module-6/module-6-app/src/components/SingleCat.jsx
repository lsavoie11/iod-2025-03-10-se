import React from "react";

function SingleCat({ cat, onDelete }) {
  return (
    <li
      style={{
        margin: "1rem 0",
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        background: "#f9f9f9",
      }}
    >
      <img
        src={cat.image}
        alt={cat.name}
        style={{
          width: 100,
          height: 100,
          objectFit: "cover",
          borderRadius: "8px",
          marginRight: "1rem",
        }}
      />
      <div style={{ flex: 1 }}>
        <h3 style={{ margin: 0 }}>{cat.name}</h3>
        <p style={{ margin: 0, fontStyle: "italic", color: "#555" }}>
          {cat.latinName}
        </p>
      </div>
      {onDelete && (
        <button
          style={{
            marginLeft: "1rem",
            color: "red",
            border: "none",
            background: "none",
            cursor: "pointer",
          }}
          onClick={() => onDelete(cat.id)}
        >
          Delete
        </button>
      )}
    </li>
  );
}

export default SingleCat;
