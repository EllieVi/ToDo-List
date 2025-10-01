import "../App.css";
import EditTaskForm from "./EditTaskForm";
import List from "./list";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Card = () => {
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (description) {
      const newTasks = [...tasks, {content: description, id: uuidv4(), completed: false, isEditing: false}];
      setTasks(newTasks);
      localStorage.setItem('tasks', JSON.stringify(newTasks));
      setDescription("");
    } else {
      alert("Empty tasks is not allowed! Do something :)");
    }
  };

  const handleRemoveTask = (id) => {
    const newTasks = tasks?.filter((task) => task.id !== id);
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  const handleCompleteCheck = (id) => {
    const newTasks = tasks?.map((task) =>
      task.id === id 
    ? { ...task, completed: !task.completed } 
    : task
    );
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  const handleEditTask = (id) => {
    setTasks(
      tasks?.map((task) =>
        task.id === id ? { ...task, isEditing: !task.isEditing } : task
      )
    );
  };

  const editTask = (newTask, id) => {
    const newTasks = tasks?.map((task) =>
      task.id === id
        ? { ...task, content: newTask, isEditing: !task.isEditing }
        : task
    );
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  return (
    <section>
      <div className="todo-section">
        <input
          className="text-input"
          value={description}
          onChange={(evt) => setDescription(evt.target.value)}
          maxLength={1000}
          wrap="hard"
          placeholder="Type the task..."
        />
        <button
          className="add-button"
          onClick={(evt) => {
            evt.preventDefault();
            handleAddTask();
          }}
        >
          Add
        </button>
        <ul>
          {
            <>
              {tasks?.map((task, index) => {
                return task.isEditing ? (
                  <EditTaskForm edit={editTask} task={task} />
                ) : (
                  <List
                    id={index}
                    onCheck={handleCompleteCheck}
                    onEdit={handleEditTask}
                    task={task}
                    onDelete={() => handleRemoveTask(task?.id)}
                  />
                );
              })}
            </>
          }
        </ul>
      </div>
    </section>
  );
};

export default Card;
