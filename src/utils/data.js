export const taskList = [
  { id: 1, title: '[SPIKE] Website performance issue', status: 'backlog' },
  {
    id: 2,
    title: '[BUG] Price not showing correctly in Listing Page',
    status: 'backlog',
  },
  {
    id: 3,
    title: '[FEAT] Add calendar view to Listing Page',
    status: 'backlog',
  },
  { id: 4, title: '[SPIKE] Website Acessibility issue', status: 'todo' },
  { id: 5, title: '[BUG] Cannot wishlist a product', status: 'todo' },
  { id: 6, title: '[FEAT] Add month view to calendar', status: 'wip' },
  { id: 7, title: '[BUG] Not showing correct day in calendar', status: 'wip' },
  { id: 8, title: '[FEAT] Add calendar view to Landing page', status: 'done' },
];

export const workflows = ['backlog', 'todo', 'wip', 'done'];

export const workflowMapping = {
  backlog: 'BACKLOG',
  todo: 'TO DO',
  wip: 'WIP',
  done: 'DONE',
};
