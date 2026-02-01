/* eslint-disable @typescript-eslint/no-explicit-any */
import { useActionState, useState } from "react";
import axios from "axios";
import Input from "../custom/input";
import Button from "../custom/button";
const PersonForm = () => {
  const [res, setRes] = useState<{ message: string } | null>(null);
  const [error, submitAction, isPending] = useActionState(
    async (_previousState: any, formData: any) => {
      const firstName = formData.get("firstName");
      const lastName = formData.get("lastName");
      const userName = formData.get("userName");
      const password = formData.get("password");
      console.log({ firstName, lastName, userName, password });
      if (!firstName || !lastName || !userName || !password) {
        return "All fields are required!";
      }

      const response = await axios.post("/api/personsRquest", {
        firstName,
        lastName,
        userName,
        password,
      });
      setRes(response.data);
    },
    null
  );

  if (error) {
    return <h1>{error}</h1>;
  }

  console.log(res);
  return (
    <form action={submitAction} className="flex flex-col p-3 gap-4">
      <Input
        className="inputStyles"
        placeholder="First Name"
        name="firstName"
      />
      <Input className="inputStyles" placeholder="Last Name" name="lastName" />
      <Input className="inputStyles" placeholder="Username" name="userName" />
      <Input
        className="inputStyles"
        placeholder="Password"
        name="password"
        type="password"
      />
      {error && <p className="text-red-500">{error}</p>}
      <div className="text-center">
        <Button
          className="bg-blue-600 text-white p-1 rounded-lg w-1/6"
          type="submit"
          disabled={isPending}
        >
          {isPending ? "Submitting..." : "Submit"}
        </Button>
      </div>
    </form>
  );
};

export default PersonForm;
