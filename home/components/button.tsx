import React from "react";

const Button = ({ onClick, title }: { onClick: () => void; title: String }) => (
  <button type="button" id="test-btn" onClick={onClick}>
    <p>{title}</p>
  </button>
);

export default Button;
