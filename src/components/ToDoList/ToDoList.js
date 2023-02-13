import React from "react";
import Tasks from "../../Tasks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Paper, TextField } from "@material-ui/core";
import { Checkbox, Button } from "@material-ui/core";
import "./ToDoList.css";

class ToDoList extends Tasks { 
    state = { tasks: [], currentTask: "" };
    render() {
      const { tasks } = this.state; 
        return (
          <div className="App flex">
            <Paper elevation={3} className="container">
              <div className="heading">TO-DO List</div>
              <form onSubmit={this.handleSubmit} className="flex" style={{ margin: "15px 0" }}>
                <TextField variant="outlined" size="small" style={{ width: "80%", paddingRight:"20px" }} 
                    value={this.state.currentTask}
                    required={true}
                    onChange={this.handleChange}
                    placeholder="Add New TO-DO List"
                />
                <button className="add-todo-btn"style={{ height: "40px" }} color="primary" variant="outlined" type="submit">
                    Add Task
                </button>
              </form>
              <div>
                {tasks.map((task) => (
                  <Paper key={task._id} className="flex task_container">
                    <Checkbox checked={task.completed} onClick={() => this.handleUpdate(task._id)} color="primary"/>
                    <div className={task.completed ? "task line_through" : "task"}>
                      {task.task}
                    </div>
                    <Button onClick={() => this.handleDelete(task._id)} color="secondary">
                      <FontAwesomeIcon icon={faTrash} color="gray" />
                    </Button>
                  </Paper>
                ))}
              </div>
            </Paper>
          </div>
        );
    }
}
export default ToDoList;
