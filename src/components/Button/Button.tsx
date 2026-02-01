import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonProps = {
  children?: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ ...props }, ref) => {
    return (
      <button ref={ref} {...props}>
        {props.children}
      </button>
    );
  }
);

export default Button;
