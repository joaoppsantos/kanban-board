import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddTaskForm from '../AddTaskForm';

const addTask = jest.fn();

describe('AddTaskForm', () => {
  it('should render correctly', () => {
    const { getByLabelText, getByText } = render(
      <AddTaskForm addTask={addTask} />
    );

    expect(getByLabelText(/Task Title/i)).toBeInTheDocument();
    expect(getByLabelText(/Task Type/i)).toBeInTheDocument();
    expect(getByLabelText(/Task Description/i)).toBeInTheDocument();
    expect(getByText(/Add Task/i)).toBeInTheDocument();
  });

  it('should call addTask with correct task information when submit button is clicked', () => {
    const { getByTestId } = render(<AddTaskForm addTask={addTask} />);

    fireEvent.change(getByTestId('task-title'), {
      target: { value: 'Task' },
    });
    fireEvent.change(getByTestId('task-type'), {
      target: { value: 'Type' },
    });
    fireEvent.change(getByTestId('task-description'), {
      target: { value: 'Description' },
    });
    fireEvent.click(getByTestId('submit-button'));

    expect(addTask).toHaveBeenCalledWith({
      title: 'Task',
      task_type: 'Type',
      description: 'Description',
    });
  });

  it('should call addTask with task data on submit button click', () => {
    const { getByTestId } = render(<AddTaskForm addTask={addTask} />);

    fireEvent.change(
      getByTestId('task-title'),
      {
        target: { value: 'Task' },
      },
      { target: { value: 'Task' } }
    );
    fireEvent.change(
      getByTestId('task-type'),
      {
        target: { value: 'Type' },
      },
      { target: { value: 'Type' } }
    );
    fireEvent.change(
      getByTestId('task-description'),
      {
        target: { value: 'Description' },
      },
      {
        target: { value: 'Description2' },
      }
    );
    fireEvent.click(getByTestId('submit-button'));

    expect(addTask).toHaveBeenCalledWith({
      title: 'Task',
      task_type: 'Type',
      description: 'Description',
    });
  });

  it('should not call addTask function when there is no titleInput', () => {
    const { getByTestId } = render(<AddTaskForm addTask={addTask} />);

    fireEvent.change(getByTestId('task-title'), { target: { value: '' } });
    fireEvent.change(getByTestId('task-type'), { target: { value: 'Type' } });
    fireEvent.click(getByTestId('submit-button'));

    expect(addTask).not.toHaveBeenCalled();
  });

  it('should not call addTask function when there is no typeInput', () => {
    const { getByTestId } = render(<AddTaskForm addTask={addTask} />);

    fireEvent.change(getByTestId('task-title'), { target: { value: 'Task' } });
    fireEvent.change(getByTestId('task-type'), { target: { value: '' } });
    fireEvent.click(getByTestId('submit-button'));

    expect(addTask).not.toHaveBeenCalled();

    fireEvent.change(getByTestId('task-type'), { target: { value: 'Type' } });
    fireEvent.click(getByTestId('submit-button'));

    expect(addTask).toHaveBeenCalled();
  });
});
