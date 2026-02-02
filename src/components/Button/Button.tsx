import { ButtonHTMLAttributes, forwardRef } from "react";
import { FormStatus, useFormStatus } from "react-dom";
type ButtonProps = {
  children?: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ ...props }, ref) => {
    const {pending}:FormStatus = useFormStatus();

    return (
      <button className={` p-2 rounded-lg w-1/6 ${pending ? "!bg-slate-300 !text-slate-700" : "bg-blue-500"}`}  ref={ref} {...props}>
        {pending ? "loading..." : props.children}
      </button>
    );
  }
);

export default Button;
