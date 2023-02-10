import React from 'react';

const SelectedTask = ({ task, taskStatus }) => (
  <div className="selected-task-wrapper">
    <div className="selected-task-container">
      <div className="selected-task-title">{task?.title}</div>
      <div className="selected-task-status">{taskStatus}</div>
      <div className="selected-task-type">{task?.task_type}</div>
      <div className="selected-task-description">{task?.description}</div>
    </div>
  </div>
);

export default SelectedTask;
