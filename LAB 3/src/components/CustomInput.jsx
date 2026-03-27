import React from "react";

const CustomInput = ({ label, type, name, value, onChange }) => {
  return (
    <div style={{ marginBottom: "15px" }}>
      <label>{label}</label><br />
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        style={{
          padding: "8px",
          width: "100%",
          marginTop: "5px"
        }}
      />
    </div>
  );
};

export default CustomInput;