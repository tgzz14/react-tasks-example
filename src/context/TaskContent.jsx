import { createContext, useState, useEffect } from "react";
import { tareas } from "../data/tasks";

export const TaskContext = createContext(); // returna un objeto

export function TaskContextProvider(props) {
  //en componente context tiene como nombre provider
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(tareas);
  }, []);

  const createTask = (task) => {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <>
      <TaskContext.Provider
        value={{
          tasks,
          deleteTask,
          createTask,
        }}
      >
        {props.children}
      </TaskContext.Provider>
    </>
  );
}
