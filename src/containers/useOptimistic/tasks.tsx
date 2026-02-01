import { column } from "../../data";
import { TasksType } from "../../models/models";
type TasksProps = {
  tasks: TasksType[];

  isPending: boolean;
};

const Tasks = ({ tasks, isPending }: TasksProps) => {
  if (isPending) {
    return <div>Is Loading...</div>;
  }
  return (
    <div className=" w-full h-full  overflow-y-auto">
      <table className="border w-full">
        <thead>
          <tr className="border">
            <th className="w-1/6">{"ردیف"}</th>
            {Object.keys(column).map((item, index) => (
              <th className="border w-1/2" key={index}>
                {column[item as keyof Omit<TasksType, "taskId">]}
              </th>
            ))}
            <th className="p-2 text-red-500">{"Delete"}</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr className="w-full">
              <td className=" border text-center py-2">{index + 1}</td>
              {Object.keys(column).map((col, index) => (
                <td className="border w-full text-center" key={index}>
                  {task[col as keyof Omit<TasksType, "taskId">]}
                </td>
              ))}
              <td className="border text-center cursor-pointer">
                <span onClick={() => console.log(task.taskId)}>🗑</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tasks;
