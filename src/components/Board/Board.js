import React, { useState, useCallback, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import BoardItem from '../BoardItem/BoardItem';
import BoardColumn from '../BoardColumn/BoardColumn';
import './Board.css';
import { taskList, workflows, workflowMapping } from '../../utils/data';

const Board = () => {
  const [tickets, setTicketsStatus] = useState(taskList);

  const replaceTicketStatus = useCallback(
    (id, status) => {
      const ticketIndex = tickets.findIndex((ticket) => ticket.id === id);
      const ticketToUpdate = { ...tickets[ticketIndex], status };
      const newTasks = tickets.map((t, index) =>
        index === ticketIndex ? ticketToUpdate : t
      );
      setTicketsStatus(newTasks);
    },
    [tickets]
  );

  return (
    <main>
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
                            <BoardItem key={ticket.id} id={ticket.id}>
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
    </main>
  );
};

export default Board;
