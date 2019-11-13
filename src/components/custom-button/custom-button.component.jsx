import React from "react";
import "./custom-button.styles.css";

const CustomButton = ({ children, ...otherCustomButtonProps }) => (
  <div className="btn btn-secondary" {...otherCustomButtonProps}>
    {children}
  </div>
);

export default CustomButton;
