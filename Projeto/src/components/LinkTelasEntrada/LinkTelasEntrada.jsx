import React from "react";
import "./LinkTelasEntrada.css";

const LinkTelasEntrada = ({ links }) => {
  return (
    <div className="links">
      {links.map((link, index) => (
        <a key={index} href={link.href}>
          {link.text}
        </a>
      ))}
    </div>
  );
};

export default LinkTelasEntrada;