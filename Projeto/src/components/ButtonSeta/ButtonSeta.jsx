import React from "react";
import EastIcon from "@mui/icons-material/East";
import "./ButtonSeta.css";

const ButtonSeta = ({ onClick }) => {
  return (
    <div className="botaoSeta">
      <button className="button" type="submit" onClick={onClick}>
        <EastIcon />
      </button>
    </div>
  );
};

export default ButtonSeta;