import React, { useState, useCallback, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import BoardItem from '../BoardItem/BoardItem';
import BoardColumn from '../BoardColumn/BoardColumn';
import SelectedTask from '../SelectedTask/SelectedTask';
import AddTaskForm from '../AddTaskForm/AddTaskForm';
import axios from 'axios';
import './Board.css';

const Board = () => {
  const [tasks, setTasks] = useState([]);
  const [workflows, setWorkflows] = useState([]);
  const [workflowMapping, setWorkflowMapping] = useState({});
  const { id } = useParams();
  const [tickets, setTicketsStatus] = useState(tasks);
  const [selectedTask, setSelectedTask] = useState(
    tasks.find((ticket) => ticket.id === id)
  );
  const history = useHistory();

  useEffect(() => {
    axios
      .get('http://localhost:3000/tasks')
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get('http://localhost:3000/workflows')
      .then((response) => {
        setWorkflows(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get('http://localhost:3000/workflowMapping')
      .then((response) => {
        setWorkflowMapping(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (!tasks) {
      setTicketsStatus(tasks);
    }
  }, [tasks]);

  useEffect(() => {
    const localStorageTickets = localStorage.getItem('tickets');
    if (localStorageTickets) {
      const parsedTickets = JSON.parse(localStorageTickets);
      setTicketsStatus(parsedTickets);
      setSelectedTask(parsedTickets.find((ticket) => ticket.id === id));
    }
  }, [id]);

  const replaceTicketStatus = useCallback(
    (id, status) => {
      const ticketIndex = tickets.findIndex((ticket) => ticket.id === id);
      const ticketToUpdate = { ...tickets[ticketIndex], status };
      const newTasks = tickets.map((t, index) =>
        index === ticketIndex ? ticketToUpdate : t
      );
      setTicketsStatus(newTasks);
      localStorage.setItem('tickets', JSON.stringify(newTasks));
    },
    [tickets]
  );

  if (!tasks && !workflows && !workflowMapping) {
    return null;
  }

  const addTask = (newTask) => {
    const id = Math.floor(Math.random() * 1000);
    setTicketsStatus([
      ...tickets,
      { id: `${id}`, status: 'backlog', ...newTask },
    ]);
    localStorage.setItem(
      'tickets',
      JSON.stringify([
        ...tickets,
        { id: `${id}`, status: 'backlog', ...newTask },
      ])
    );
  };

  const handleItemClick = (task) => {
    setSelectedTask(task);
    history.push(`/ticket/${task.id}`);
  };

  return (
    <main className="main-container">
      <div className="container">
        <header className="title">
          <h1>Board</h1>
        </header>
        <DndProvider backend={HTML5Backend}>
          <div className="board-scheme">
            {workflows.map((workflow) => (
              <div className="column-container">
                <div className="column">
                  <BoardColumn
                    status={workflow}
                    replaceTicketStatus={replaceTicketStatus}
                    key={workflow}
                  >
                    <div className="column-header">
                      {workflowMapping[workflow]}
                    </div>
                    <div>
                      {tickets.reduce((acc, ticket) => {
                        if (ticket.status === workflow) {
                          acc.push(
                            <BoardItem
                              key={ticket.id}
                              id={ticket.id}
                              onClick={() => handleItemClick(ticket)}
                            >
                              <div className="item">{ticket.title}</div>
                            </BoardItem>
                          );
                        }
                        return acc;
                      }, [])}
                    </div>
                  </BoardColumn>
                </div>
              </div>
            ))}
          </div>
        </DndProvider>
      </div>
      {selectedTask?.title ? (
        <SelectedTask
          task={selectedTask}
          taskStatus={workflowMapping[selectedTask.status]}
        />
      ) : null}
      <AddTaskForm addTask={addTask} />
    </main>
  );
};

export default Board;
