import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContent";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description);
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className='max-w-md mx-auto'>
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          placeholder="escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className='bg-stone-300 p-3 w-full mb-2'
          autoFocus
        />
        <textarea
          placeholder="escribe la descripcion de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          className='bg-stone-300 p-3 w-full mb-2'
          value={description}
        ></textarea>
        <button
        className='bg-indigo-500 px-3 py-1 text-white'>guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
