import React from 'react';

const SelectedTask = ({ task, taskStatus }) => (
  <div className="selected-task-wrapper">
    <div className="selected-task-container">
      <div className="selected-task-title" data-testid="title">
        {task?.title}
      </div>
      <div className="selected-task-status" data-testid="status">
        {taskStatus}
      </div>
      <div className="selected-task-type" data-testid="type">
        {task?.task_type.toUpperCase()}
      </div>
      <div className="selected-task-description" data-testid="description">
        {task?.description}
      </div>
    </div>
  </div>
);

export default SelectedTask;
