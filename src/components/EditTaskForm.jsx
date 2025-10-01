import { useState } from "react";

const EditTaskForm = ({ edit, task }) => {
  const [description, setDescription] = useState(task.content);

  const handleEditTask = () => {
    if(description) {
    edit(description, task.id);
    setDescription("");
    } else {
      alert('Empty tasks is not allowed! Do something :)')
    }
  };

  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault();
        handleEditTask();
      }}
    >
      <input
        className="text-input"
        value={description}
        onChange={(evt) => setDescription(evt.target.value)}
        maxLength={1000}
        wrap="hard"
        placeholder="Update the task..."
      />
      <button className="add-button" type="submit">
        Update
      </button>
    </form>
  );
};

export default EditTaskForm;
