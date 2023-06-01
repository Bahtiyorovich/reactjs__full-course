import { useState } from "react";

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <ul className="list-group w-50 mt-2">
      {tasks.map((task) => (
        <li key={task.id} className="list-group-item">
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <div className="d-flex gap-2">
        <input
          className="form-control"
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(false)} className="btn btn-secondary">Save</button>
      </div>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)} className="btn btn-secondary">Edit</button>
      </>
    );
  }
  return (
    <div className="d-flex gap-1">
      <input
       className="form-checkbox"
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          onChange({
            ...task,
            done: e.target.checked,
          });
        }}
      />
      {taskContent}
      <button onClick={() => onDelete(task.id)} className="btn btn-danger">Delete</button>
    </div>
  );
}
