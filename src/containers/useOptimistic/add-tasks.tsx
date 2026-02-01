/* eslint-disable @typescript-eslint/no-unused-vars */
import Button from "../../custom/button";
import Input from "../../custom/input";
import { ChangeEvent, useOptimistic, useState, useTransition } from "react";
import { TasksType } from "../../models/models";
import axios from "axios";

type AddTasksProps = {
  tasks: TasksType[];
  setTasks: (value: TasksType[]) => void;
};

const AddTasks = ({ tasks, setTasks }: AddTasksProps) => {
  const [value, setValue] = useState<Omit<TasksType, "data">>({
    taskTitle: "",
  });
  const [isPending, startTransition] = useTransition();
  const [optimistic, setOptimistic] = useOptimistic<TasksType[], TasksType>(
    tasks,
    (currentTasks: TasksType[], newTasks: TasksType) => [
      ...currentTasks,
      newTasks,
    ]
  );

  const handelAddTasks = async () => {
    setOptimistic(value);

    try {
      const respnse = await axios.post(
        "/api/tasksRequest/POST/add/tasks",
        value
      );
      startTransition(() => setTasks([...optimistic, respnse.data]));
      setValue({ taskTitle: "" });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex gap-2 items-center">
      <Input
        value={value.taskTitle}
        className={"inputStyles"}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setValue({ taskTitle: e.target.value })
        }
      />
      <Button
        className={`bg-blue-500 p-1 w-1/6 rounded-md text-white ${
          isPending ? "bg-blue-300" : "bg-blue-500"
        }`}
        onClick={handelAddTasks}
      >
        {isPending ? "adding..." : "Submit"}
      </Button>
    </div>
  );
};

export default AddTasks;
