# Simple Kanban Board

This project allows you to create a simple kanban board where you can create new tasks, view the current ones and share a direct link to a ticket. Those tasks persist on refresh through local storage.

The tasks are being served by a fake JSON Server and the data that comes from those can be changed in `data.json`. In case a server is not used, fallback data is being used, it can be found in `utils/FallbackData.js`.

## Getting Started

To run the app, it's recommended to:

- run a fake JSON server (in src directory) that will run in port 3000

> json-server --watch data.json

- then run the application in another port (since the port 3000 will already be in use and the application requires for those requests to be done to port 3000)

> npm run start

To run the existing unit tests:

> npm run test
