import React from "react";
import "./tasklist.css";
import TaskListItem from "./TaskListItem";

const TaskList = ({ tasks, onRemoveTask }) => (
  <ul className="TaskList">
    {tasks.map(({ id, text }) => (
      <TaskListItem
        key={id}
        text={text}
        onRemove={() => {
          onRemoveTask(id);
        }}
      />
    ))}
  </ul>
);

export default TaskList;
