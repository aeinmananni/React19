import { ChangeEvent, FormEvent, useState } from "react";
import { sleep } from "../../utils";

export default function ActionOld() {
  const [input, setInput] = useState<string>("");
  const [name, setName] = useState<string>(() => {
    const storedName = localStorage.getItem("name");
    return storedName ? JSON.parse(storedName) : "anonymous";
  });

  const handelSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await sleep(1000).then(() => {
      if (input.trim() === "") return;
      localStorage.setItem("name", JSON.stringify(input));
      setName(input);
      setInput("");
    });
  };
  return (
    <div className="flex flex-col gap-4">
      <h1>Actions : {name}</h1>
      <form className="flex flex-col gap-3" onSubmit={handelSubmit}>
        <input
          type="text"
          value={input}
          className="border outline-none py-1 px-2"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
        />
        <button
          className="p-1 bg-green-500/50 text-white rounded-lg"
          type="submit"
        >
          Submit
        </button>
      </form>
      <hr />
    </div>
  );
}
