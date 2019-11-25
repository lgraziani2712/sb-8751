import React, { HTMLAttributes } from "react";

// It will print all of the props
interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  justified?: boolean;
}

export default function ButtonGroup({
  className,
  justified,
  children,
  ...props
}: ButtonGroupProps) {
  return (
    <div
      className={`button-group ${className || ""} ${
        justified ? "justified" : ""
      }`}
      {...props}
    >
      {children}
    </div>
  );
}
