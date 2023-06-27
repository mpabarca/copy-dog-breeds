import React from 'react';

export interface ButtonProps {
  color: string;
  text: string;
  handleOnClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<ButtonProps> = ({color, text, handleOnClick}) => {
  const buttonStyle = {
    backgroundColor: color,
  };
  return (
    <button
      type="button"
      onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleOnClick(e)}
      style={buttonStyle}
    >
      {text}
    </button>
  );
};
export default Button;
