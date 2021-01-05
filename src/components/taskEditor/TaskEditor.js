import React from "react";

const TaskEditor = ({ onAddTask }) => {
  return (
    <div className="TaskEditor">
      <button type="button" onClick={onAddTask}>
        Add task
      </button>
    </div>
  );
};

export default TaskEditor;
