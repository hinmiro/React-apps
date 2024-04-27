import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3 className={"text-cyan-300"}>
        {task.text}{" "}
        <FaTimes
          style={{
            color: "red",
            cursor: "pointer",
            backgroundColor: "#23272f",
          }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p style={{ backgroundColor: "#23272f" }}>{task.day}</p>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default Task;
