import { ButtonHTMLAttributes, Ref } from "react";
import { FormStatus, useFormStatus } from "react-dom";
type ButtonProps = {
  children?: React.ReactNode;
  ref?: Ref<HTMLButtonElement>;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ ref, ...props }: ButtonProps) => {
  const { pending }: FormStatus = useFormStatus();

  return (
    <button
      className={` p-2 rounded-lg w-1/6 ${pending ? "!bg-slate-300 !text-slate-700" : "bg-blue-500"}`}
      ref={ref}
      {...props}
    >
      {pending ? "loading..." : props.children}
    </button>
  );
};

export default Button;
