export const taskList = [
  {
    id: '1',
    status: 'backlog',
    title: 'Website performance issue',
    task_type: 'SPIKE',
    description:
      'Investigate the performance issue on the website and come up with a solution to improve it.',
  },
  {
    id: '2',
    status: 'backlog',
    title: 'Price not showing correctly in Listing Page',
    task_type: 'BUG',
    description:
      'Fix the issue with the incorrect pricing display on the listing page.',
  },
  {
    id: '3',
    status: 'backlog',
    title: 'Add calendar view to Listing Page',
    task_type: 'FEAT',
    description:
      'Add a calendar view to the listing page to help users easily navigate and select dates.',
  },
  {
    id: '4',
    status: 'todo',
    title: 'Website Accessibility issue',
    task_type: 'SPIKE',
    description:
      'Investigate the accessibility issue on the website and come up with a solution to make it more accessible for all users.',
  },
  {
    id: '5',
    status: 'todo',
    title: 'Cannot wishlist a product',
    task_type: 'BUG',
    description:
      'Fix the issue with the wishlist functionality, so that users are able to add items to their wishlist.',
  },
  {
    id: '6',
    status: 'wip',
    title: 'Add month view to calendar',
    task_type: 'FEAT',
    description:
      'Add a month view to the calendar, allowing users to easily see a full month worth of dates at once.',
  },
  {
    id: '7',
    status: 'wip',
    title: 'Not showing correct day in calendar',
    task_type: 'BUG',
    description:
      'Fix the issue with the incorrect day display in the calendar, so that it accurately reflects the selected date.',
  },
  {
    id: '8',
    status: 'done',
    title: 'Add calendar view to Landing page',
    task_type: 'FEAT',
    description:
      'Add a calendar view to the landing page to help users easily select a date and navigate to the listing page.',
  },
];

export const workflows = ['backlog', 'todo', 'wip', 'done'];

export const workflowMapping = {
  backlog: 'BACKLOG',
  todo: 'TO DO',
  wip: 'WIP',
  done: 'DONE',
};
