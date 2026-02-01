import { useEffect, useState, useTransition } from "react";
import Tasks from "./tasks";
import axios from "axios";
import { TasksType } from "../../models/models";
import AddTasks from "./add-tasks";
const UseOptimistic = () => {
  const [tasks, setTasks] = useState<TasksType[]>([]);
  const [isPending, startTransition] = useTransition();
  const handelGetTasks = () => {
    startTransition(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("/api/tasksRequest/GET/All/tasks");
          setTasks(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    });
  };
  useEffect(() => {
    handelGetTasks();
  }, []);
  return (
    <div className="w-full h-full overflow-hidden p-3 flex flex-col gap-7">
      <AddTasks tasks={tasks} setTasks={setTasks} />
      <Tasks tasks={tasks} isPending={isPending} />
    </div>
  );
};

export default UseOptimistic;
