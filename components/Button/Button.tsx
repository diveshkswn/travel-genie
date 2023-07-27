import React from "react";

import { StyledButton } from "./Button.styles";
import { ButtonProps } from "./Button.types";

const Button = ({handleClick, text, className = '', type = "button"}: ButtonProps) => {
  return (
    <StyledButton type={type} className={`secondary ${className}`} onClick={handleClick}>
      {text}
    </StyledButton>
  );
};

export default Button;
