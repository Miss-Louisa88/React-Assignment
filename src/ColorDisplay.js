import React from "react";

const colors = [
  { name: "Red", code: "#ff4d4f" },
  { name: "Green", code: "#52c41a" },
  { name: "Blue", code: "#1890ff" },
  { name: "Purple", code: "#722ed1" },
  { name: "Orange", code: "#ffa500" },
];

const ColorDisplay = () => {
  return (
    <div style={{ width: "100%", padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Five Colors</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {colors.map((color, index) => (
          <div
            key={index}
            style={{
              backgroundColor: color.code,
              width: "150px",
              height: "150px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              color: "#fff",
              fontWeight: "bold",
              margin: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            }}
          >
            {color.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorDisplay;
