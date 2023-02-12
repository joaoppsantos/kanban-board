import React from 'react';
import { render } from '@testing-library/react';
import SelectedTask from '../SelectedTask';

describe('SelectedTask', () => {
  it('should render correctly', () => {
    const task = {
      title: 'Task',
      task_type: 'Type',
      description: 'Description',
    };
    const taskStatus = 'backlog';
    const { getByTestId } = render(
      <SelectedTask task={task} taskStatus={taskStatus} />
    );

    expect(getByTestId('title').textContent).toBe('Task');
    expect(getByTestId('status').textContent).toBe('backlog');
    expect(getByTestId('type').textContent).toBe('TYPE');
    expect(getByTestId('description').textContent).toBe('Description');
  });
});
