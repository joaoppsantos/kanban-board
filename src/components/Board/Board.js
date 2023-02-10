import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const Board = () => (
  <main>
    <div className="container">
      <header>
        <h1>Board</h1>
      </header>
      <DndProvider backend={HTML5Backend}>
        <div></div>
      </DndProvider>
    </div>
  </main>
);

export default Board;
