import React from "react";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  bgColorClass?: string;
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  bgColorClass = "bg-primary",
}) => (
  <button
    onClick={onClick}
    className={`px-4 py-1.5 ${bgColorClass} text-secondary border border-secondary rounded-full text-sm hover:bg-secondary hover:text-white transition-colors`}
  >
    {label}
  </button>
);

export default Button;  
