import "../App.css";
import List from "./list";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Card = () => {
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState([]);
  // const [edit, setEdit] = useState(false);

  const handleAddTask = () => {
    if (description) {
      setTasks([
        ...tasks,
        { content: description, id: uuidv4(), isCompleted: false },
      ]);
      setDescription("");
    }
  };

  const handleRemoveTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleCompleteTask = (id) => {
    const createdTasks = [...tasks];
    createdTasks?.map((createdTask) =>
      createdTask.id === id
        ? (createdTask.isCompleted = !createdTask.isCompleted)
        : createdTask
    );
    setTasks(createdTasks);
  };

  useEffect(() => {
    console.log('Tasks::', tasks);
  }, [tasks])

  return (
    <section>
      <form
        className="todo-section"
        onSubmit={(evt) => {
          evt.preventDefault();
          handleAddTask();
        }}
      >
        <textarea
          className="text-input"
          value={description}
          onChange={(evt) => setDescription(evt.target.value)}
          maxLength={1000}
          wrap="hard"
          placeholder="Type task..."
        />
        <button className="add-button" type="submit">
          Add
        </button>
        <ul>
          {
            <>
              {tasks?.map((task, index) => {
                return (
                  <List
                    id={index}
                    onCheck={handleCompleteTask}
                    // onEdit={handleEditTask}
                    tasks={task?.content}
                    onDelete={() => handleRemoveTask(task?.id)}
                  />
                );
              })}
            </>
          }
        </ul>
      </form>
    </section>
  );
};

export default Card;
