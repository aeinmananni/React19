import { useRef } from "react";
import { Button } from "../../components";

export default function Refs() {
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const handelClick = () => {
    btnRef.current!.style.backgroundColor = "lightblue";
    setTimeout(() => {
      btnRef.current!.style.backgroundColor = "";
    }, 2000);
  };
  return (
    <Button ref={btnRef} onClick={handelClick}>
      On Click
    </Button>
  );
}
