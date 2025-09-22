import PropTypes from "prop-types";
import "../App.css";
import { DeleteIcon } from "../assets/icons/DeleteIcon";
import { EditIcon } from "../assets/icons/EditIcon";

const List = ({ id, onCheck, tasks, onEdit, onDelete  }) => {
  return (
    <div className="list" key={id}>
      <input type="checkbox" onClick={() => onCheck(id)} />
      <div style={{ textDecoration: tasks.isCompleted ? "line-through" : "" }}>
        <li>{tasks}</li>
      </div>
      <p className="action-buttons tooltip">
        <button className="edit" onClick={onEdit}>
          <EditIcon />
          <span>Edit</span>
        </button>
        <button className="delete" onClick={onDelete}>
          <DeleteIcon />
          <span>Delete</span>
        </button>
      </p>
    </div>
  );
};

List.propTypes = {
  id: PropTypes.node,
  onCheck: PropTypes.func,
  tasks: PropTypes.array,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func
};

export default List;
