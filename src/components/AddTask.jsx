import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    if (!text) {
      alert("No task to add");
      return;
    }
    onAdd({ text, day, reminder });
    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className={"add-form"} onSubmit={onsubmit}>
      <div className={"form-control"}>
        <label>Task</label>
        <input
          type={"text"}
          placeholder={"Add Task"}
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </div>
      <div className={"form-control"}>
        <label>Day and Time</label>
        <input
          type={"text"}
          placeholder={"Add Time"}
          value={day}
          onChange={(event) => setDay(event.target.value)}
        />
      </div>
      <div className={"form-control form-control-check"}>
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(event) => setReminder(event.currentTarget.checked)}
        />
      </div>
      <input
        className={"btn btn-block"}
        type={"submit"}
        value={"Save"}
        onClick={onSubmit}
      />
    </form>
  );
};

export default AddTask;
