import React from "react";
import "./Formularios.css";

const Formularios = ({ type, placeholder, value, onChange }) => {
  return (
    <div className={`input${type}`}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default Formularios;