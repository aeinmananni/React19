import { forwardRef, InputHTMLAttributes } from "react";

type InputProps = {} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(({ ...props }, ref) => {
  return <input {...props} ref={ref}  className={`inputStyles ${props.className}`}/>;
});

export default Input;
