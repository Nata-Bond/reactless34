import React, { Component } from "react";
import Counter from "../Counter";
import Layout from "./layout/Layout";
import TaskList from "./tasklist/TaskList";
import TaskEditor from "./taskEditor/TaskEditor";
import createTask from "./utils/createTask";

export default class App extends Component {
  state = {
    tasks: [],
  };

  addTask = () => {
    const task = createTask();
    console.log(task);

    this.setState((prevState) => {
      return {
        tasks: [...prevState.tasks, task],
      };
    });
  };

  removeTask = (taskId) => {
    console.log(taskId);

    this.setState((prevState) => {
      return {
        tasks: prevState.tasks.filter(({ id }) => id !== taskId),
      };
    });
  };

  render() {
    const { tasks } = this.state;
    return (
      <Layout>
        <h1>yahoo</h1>
        <Counter initialvalue={5} step={2} />
        <TaskEditor onAddTask={this.addTask} />
        {tasks.length > 0 && (
          <TaskList tasks={tasks} onRemoveTask={this.removeTask} />
        )}
      </Layout>
    );
  }
}
