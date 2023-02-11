import React, { useState } from 'react';

const AddTaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim().length || !type.trim().length) {
      return;
    }

    addTask({
      title: title,
      description: description,
      task_type: type,
    });
    setTitle('');
    setDescription('');
    setType('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-entry">
        <label htmlFor="task-title">Task Title:</label>
        <input
          type="text"
          id="task-title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div className="form-entry">
        <label htmlFor="task-type">Task Type:</label>
        <input
          type="text"
          id="task-type"
          value={type}
          onChange={(event) => setType(event.target.value)}
        />
      </div>
      <div className="form-entry">
        <label htmlFor="task-description">Task Description:</label>
        <textarea
          id="task-description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
