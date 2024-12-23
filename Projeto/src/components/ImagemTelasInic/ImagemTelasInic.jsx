import React from "react";
import "./ImagemTelasInic.css";

const ImagemTelasInic = ({ image }) => {
  return <div className="blocoImagem" style={{ backgroundImage: `url(${image})` }} />;
};

export default ImagemTelasInic;