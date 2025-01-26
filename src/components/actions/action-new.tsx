import { useState } from "react";
import { sleep } from "../../utils";

const ActionNew = () => {
  const [name, setName] = useState<FormDataEntryValue>(() => {
    const storedName = localStorage.getItem("name");
    return storedName ? JSON.parse(storedName) : "anonymous";
  });

  const updateNewOldName = async (newName: FormDataEntryValue | null) => {
    await sleep(1000).then(() => {
      if (newName?.toString()?.toLowerCase().includes("error")) {
        throw new Error("Faild to update name");
      }
      localStorage.setItem("name", JSON.stringify(newName));
      setName(newName ?? "");
    });
  };
  const FormAction = async (FormDataInfo: FormData) => {
    try {
      const user_name = FormDataInfo.get("user_name");
      await updateNewOldName(user_name);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <h1>Actions : {name as string}</h1>
      <form className="flex flex-col gap-3" action={FormAction}>
        <input
          type="text"
          name="user_name"
          className="border outline-none py-1 px-2"
        />
        <button
          className="p-1 bg-green-500/50 text-white rounded-lg"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ActionNew;
