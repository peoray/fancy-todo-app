import React from 'react';
import './custom-button.styles.css';

const CustomButton = ({ children, ...otherCustomButtonProps }) => (
  <div className="control-buttons">
    <div className="btn btn-secondary" {...otherCustomButtonProps}>
      {children}
    </div>
  </div>
);

export default CustomButton;
