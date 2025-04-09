import React from "react";

export default function Button({ text = "click", btnclass, icon, onClick }) {
  return (
    <button className={`btn ${btnclass}`} onClick={onClick}>
      {icon}
      {text}
    </button>
  );
}
