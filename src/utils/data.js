export const taskList = [
  {
    id: '1',
    title: 'Website performance issue',
    status: 'backlog',
    task_type: 'SPIKE',
    description:
      'Investigate the performance issue on the website and come up with a solution to improve it.',
  },
  {
    id: '2',
    title: 'Price not showing correctly in Listing Page',
    status: 'backlog',
    task_type: 'BUG',
    description:
      'Fix the issue with the incorrect pricing display on the listing page.',
  },
  {
    id: '3',
    title: 'Add calendar view to Listing Page',
    status: 'backlog',
    task_type: 'FEAT',
    description:
      'Add a calendar view to the listing page to help users easily navigate and select dates.',
  },
  {
    id: '4',
    title: 'Website Accessibility issue',
    status: 'todo',
    task_type: 'SPIKE',
    description:
      'Investigate the accessibility issue on the website and come up with a solution to make it more accessible for all users.',
  },
  {
    id: '5',
    title: 'Cannot wishlist a product',
    status: 'todo',
    task_type: 'BUG',
    description:
      'Fix the issue with the wishlist functionality, so that users are able to add items to their wishlist.',
  },
  {
    id: '6',
    title: 'Add month view to calendar',
    status: 'wip',
    task_type: 'FEAT',
    description:
      'Add a month view to the calendar, allowing users to easily see a full month worth of dates at once.',
  },
  {
    id: '7',
    title: 'Not showing correct day in calendar',
    status: 'wip',
    task_type: 'BUG',
    description:
      'Fix the issue with the incorrect day display in the calendar, so that it accurately reflects the selected date.',
  },
  {
    id: '8',
    title: 'Add calendar view to Landing page',
    status: 'done',
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
