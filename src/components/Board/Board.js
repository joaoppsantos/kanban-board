import React, { useState, useCallback, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import BoardItem from '../BoardItem/BoardItem';
import BoardColumn from '../BoardColumn/BoardColumn';
import './Board.css';
import { taskList, workflows, workflowMapping } from '../../utils/data';
import SelectedTask from '../SelectedTask/SelectedTask';

const Board = () => {
  const { id } = useParams();
  const [tickets, setTicketsStatus] = useState(taskList);
  const [selectedTask, setSelectedTask] = useState(
    taskList.find((ticket) => ticket.id === id)
  );
  const history = useHistory();

  useEffect(() => {
    const localStorageTickets = localStorage.getItem('tickets');
    if (localStorageTickets) {
      setTicketsStatus(JSON.parse(localStorageTickets));
    }
  }, []);

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
      {selectedTask?.title && (
        <SelectedTask
          task={selectedTask}
          taskStatus={workflowMapping[selectedTask.status]}
        />
      )}
    </main>
  );
};

export default Board;
